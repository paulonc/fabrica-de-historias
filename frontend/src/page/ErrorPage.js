import React from "react";
import { Typography, Box } from "@mui/material";
import BackgroundLayout from "../components/Layout/BackgroundLayout";

const ErrorPage = () => {
  return (
    <BackgroundLayout>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        maxWidth="md"
        textAlign="center"
      >
        <Typography variant="h3" gutterBottom>
          Ops! Parece que a máquina de contos teve um curto-circuito na
          imaginação.
        </Typography>
        <div style={{ maxWidth: "800px" }}>
          <Typography variant="body1" style={{ fontSize: "1.3rem" }}>
            Nossos engenheiros literários estão trabalhando arduamente para
            desembaraçar as palavras e reverter o colapso narrativo. <br />
            Por favor, volte mais tarde para desfrutar de mais aventuras
            literárias!
          </Typography>
        </div>
      </Box>
    </BackgroundLayout>
  );
};

export default ErrorPage;
