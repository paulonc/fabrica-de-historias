import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Container, Paper } from "@mui/material";
import axios from "axios";
import BackgroundLayout from "../components/Layout/BackgroundLayout";
import Form from "../components/Form";

const apiUrl = "http://localhost:5000/generate_history";

const FormPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    personagens: "",
    publicoAlvo: "",
    tema: "",
    ambiente: "",
    enredo: "",
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
        plot: formData.enredo,
        story_length: formData.comprimentoHistoria,
      };
      axios
        .post(apiUrl, requestData)
        .then((response) => {
          if (response.data.history && response.data.title) {
            navigate("/historia", { state: { historyData: response.data } });
          } else {
            navigate("/error");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      alert("Por favor, preencha todos os campos obrigatórios.");
      setIsLoading(false);
    }
  };

  return (
    <BackgroundLayout>
      <Container maxWidth="sm">
        <Paper
          elevation={3}
          style={{
            padding: "20px",
            marginTop: "20px",
            height: "auto",
          }}
        >
          <Typography
            variant="h4"
            display="flex"
            justifyContent="center"
            gutterBottom
          >
            Preencha o formulário
          </Typography>
          <Form
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
          />
        </Paper>
      </Container>
    </BackgroundLayout>
  );
};

export default FormPage;
