import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Box,
  TextField,
  Container,
  Paper,
  CircularProgress,
} from "@mui/material";
import CustomRadioGroup from "../components/CustomRadioGroup";
import CustomButton from "../components/CustomButton";
import axios from "axios";
import BackgroundLayout from "../components/Layout/BackgroundLayout";

const apiUrl = "http://localhost:5000/generate_history";

const FormPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    personagens: "",
    publicoAlvo: "",
    tema: "",
    ambiente: "",
    comprimentoHistoria: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    if (
      formData.personagens &&
      formData.publicoAlvo &&
      formData.tema &&
      formData.ambiente &&
      formData.comprimentoHistoria
    ) {
      const requestData = {
        persons: formData.personagens,
        target: formData.publicoAlvo,
        theme: formData.tema,
        environment: formData.ambiente,
        story_length: formData.comprimentoHistoria,
      };
      axios
        .post(apiUrl, requestData)
        .then((response) => {
            if (response.data.history && response.data.title) {
                navigate("/historia", { state: { historyData: response.data } });
              } else {
                navigate("/error");
        }})
        .catch((error) => {
          console.error(error);
        });
    } else {
      alert("Por favor, preencha todos os campos obrigatórios.");
      setIsLoading(false);
    }
  };

  const radioOptions = [
    { value: "pequena", label: "Pequena" },
    { value: "media", label: "Média" },
    { value: "longa", label: "Longa" },
  ];

  return (
    <BackgroundLayout>
      <Container maxWidth="sm">
        <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
          <Typography
            variant="h4"
            display="flex"
            justifyContent="center"
            gutterBottom
          >
            Preencha o formulário
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              name="personagens"
              label="Quantidade de Personagens"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.personagens}
              onChange={handleChange}
              required
            />
            <TextField
              name="publicoAlvo"
              label="Público-Alvo"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.publicoAlvo}
              onChange={handleChange}
              required
            />
            <TextField
              name="tema"
              label="Tema"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.tema}
              onChange={handleChange}
              required
            />
            <TextField
              name="ambiente"
              label="Ambiente"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.ambiente}
              onChange={handleChange}
              required
            />
            <Typography
              variant="h6"
              gutterBottom
              display="flex"
              justifyContent="center"
            >
              Tamanho da História
            </Typography>
            <CustomRadioGroup
              name="comprimentoHistoria"
              value={formData.comprimentoHistoria}
              onChange={handleChange}
              options={radioOptions}
            />
            {isLoading ? (
              <Box display="flex" justifyContent="center">
                <CircularProgress />
              </Box>
            ) : (
              <Box display="flex" justifyContent="center">
                <CustomButton
                  label="Enviar"
                  width="200px"
                  height="60px"
                  onClick={handleSubmit}
                />
              </Box>
            )}
          </form>
        </Paper>
      </Container>
    </BackgroundLayout>
  );
};

export default FormPage;
