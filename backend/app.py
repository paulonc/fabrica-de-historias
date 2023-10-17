from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os
import requests
import maritalk
import json

def load_configuration():
    load_dotenv()
    api_key = os.getenv('API_KEY')
    return api_key

app = Flask(__name__)
CORS(app)

api_key = load_configuration()
if api_key is None:
    raise ValueError("API_KEY não foi configurada corretamente.")

URL = "https://api.openai.com/v1/chat/completions"

MODEL = "gpt-3.5-turbo"

AUTH_HEADER = {
    "Authorization": f"Bearer {api_key}", "Content-Type": "application/json"
}

def get_gpt_response(request_data):
    try:
        response = requests.post(
            URL,
            data=request_data,
            headers=AUTH_HEADER
        )

        if response.status_code == 200:
            data = response.json()
            data_response = data["choices"][0]["message"]["content"]
            print(data_response)
            return data_response
        else:
            return f"Erro ao chamar a API OpenAI: {response.status_code}"
    except Exception as e:
        return f"Erro na solicitação à API OpenAI: {str(e)}"

    

@app.route('/generate_history', methods=['POST'])
def generate_history():
    try:
        data = request.json

        qtd_person = data['persons']
        target_public = data['target']
        theme = data['theme']
        environment = data['environment']
        story_length = data['story_length']

        prompt = f"Por favor, conte uma história envolvendo '{qtd_person}' personagens, com o público-alvo sendo '{target_public}', com foco no tema '{theme}' e o ambiente em que a história acontece é '{environment}'. A história deve ter um tamanho '{story_length}'. Além disso, defina um título para a história e coloque-o em negrito antes do primeiro paragrafo."
        
        request_data = {
            "model": MODEL,
            "messages": [{"role": "user", "content": prompt}],
            "top_p": 0.8
        }

        request_data = json.dumps(request_data)

        response = get_gpt_response(request_data)
        return jsonify({'history': response})
    except Exception as e:
        return jsonify({'error': str(e)})


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)

