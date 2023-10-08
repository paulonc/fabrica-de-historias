from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os
import requests
import maritalk


def load_configuration():
    load_dotenv()
    api_key = os.getenv('API_KEY')
    return api_key


def get_maritalk_response(request_data, headers):

    response = requests.post(
        URL,
        json=request_data,
        headers=headers
    )

    if response.status_code == 429:
        print("rate limited, tente novamente em breve")

    elif response.ok:
        data = response.json()
        return (data["answer"])

    else:
        response.raise_for_status()


app = Flask(__name__)
CORS(app)

api_key = load_configuration()
if api_key is None:
    raise ValueError("API_KEY não foi configurada corretamente.")

URL = "https://chat.maritaca.ai/api/chat/inference"

MODEL = maritalk.MariTalk(key=api_key)

auth_header = {
    "authorization": f"Key {api_key}"
}


@app.route('/generate_history', methods=['POST'])
def generate_history():
    try:
        data = request.json

        qtd_person = data['persons']
        target_public = data['target']
        theme = data['theme']
        environment = data['environment']
        story_length = data['story_length']

        prompt = f"Por favor, conte uma história envolvendo {qtd_person} personagens, com o público-alvo sendo {target_public}, com foco no tema {theme} e o ambiente em que a história acontece é {environment}. A história deve ser {story_length}"

        request_data = {
            "messages": prompt,
            "chat_mode": True,
            "do_sample": True,
            "max_tokens": 1000,
            "temperature": 0.7,
        }

        response = get_maritalk_response(request_data, auth_header)
        return jsonify({'history': response})
    except Exception as e:
        return jsonify({'error': str(e)})


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)

