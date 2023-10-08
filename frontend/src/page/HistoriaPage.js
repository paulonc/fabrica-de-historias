import React from "react";
import { Typography, Box, Paper } from "@mui/material";
import { useLocation } from "react-router-dom";
import BackgroundLayout from "../components/Layout/BackgroundLayout";

const historiaStyle = {
  padding: "20px",
  marginBottom: "20px",
};

const HistoriaPage = () => {
  const location = useLocation();
  const historyData = location.state.historyData;
  const { history } = historyData;

  const titleStyle = {
    fontFamily: "'Dancing Script', cursive",
    fontWeight: 700,
    fontSize: "5rem",
  };

  return (
    <BackgroundLayout>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        minHeight="100vh"
      >
        <Typography variant="h3" style={titleStyle} gutterBottom>
          História
        </Typography>
        <Paper elevation={3} style={historiaStyle}>
          <Typography variant="body1">{history}</Typography>
        </Paper>
      </Box>
    </BackgroundLayout>
  );
};

export default HistoriaPage;
