import React from "react";
import { Typography, Box, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import BackgroundLayout from "../components/Layout/BackgroundLayout";

const titleStyle = {
  fontFamily: "'Dancing Script', cursive",
  fontWeight: 700,
  fontSize: "6rem",
};

const HomePage = () => {
  return (
    <BackgroundLayout>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h1" style={titleStyle} gutterBottom>
          Fábrica de Histórias
        </Typography>
        <Typography
          variant="body1"
          align="center"
          style={{ fontSize: "1.1rem", fontWeight: "bold" }}
        >
          Crie histórias incríveis com o poder da sua imaginação!
          <br />
          Personalize o número de personagens, escolha o ambiente perfeito
          <br />e defina o tema para gerar histórias únicas e emocionantes.
        </Typography>
        <MuiLink component={Link} to="/formulario" underline="none">
          <CustomButton label="Comece aqui" />
        </MuiLink>
      </Box>
    </BackgroundLayout>
  );
};

export default HomePage;
