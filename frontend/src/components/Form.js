import React from "react";
import CustomRadioGroup from "./CustomRadioGroup";
import CustomButton from "./CustomButton";
import { Typography, Box, TextField, CircularProgress } from "@mui/material";

function Formulario({ formData, handleChange, handleSubmit, isLoading }) {
  const radioOptions = [
    { value: "pequena", label: "Pequena" },
    { value: "media", label: "Média" },
    { value: "longa", label: "Longa" },
  ];

  return (
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
        style={{ marginBottom: "-5px" }}
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
        style={{ marginBottom: "-5px" }}
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
        style={{ marginBottom: "-5px" }}
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
        style={{ marginBottom: "-5px" }}
      />
      <TextField
        name="enredo"
        label="Enredo da História (opcional)"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.enredo}
        onChange={handleChange}
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
  );
}

export default Formulario;
