import React from "react";
import { Typography, Box, Paper } from "@mui/material";
import { useLocation } from "react-router-dom";
import BackgroundLayout from "../components/Layout/BackgroundLayout";

const HistoriaPage = () => {
  const location = useLocation();
  const historyData = location.state.historyData;
  const { title, history } = historyData;

  const headerStyle = {
    fontFamily: "'Dancing Script', cursive",
    fontWeight: 700,
    fontSize: "5rem",
    marginTop: "20px",
  };

  const titleStyle = {
    fontWeight: 800,
    textAlign: "center",
    textTransform: "uppercase",
  };

  const renderParagraphs = (text) => {
    return text
      .split("\n")
      .map((paragraph, index) => <p key={index}>{paragraph}</p>);
  };

  return (
    <BackgroundLayout>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        minHeight="100vh"
        maxWidth="md"
      >
        <Typography variant="h3" style={headerStyle} gutterBottom>
          Sua história
        </Typography>
        <Paper elevation={3} style={{ padding: "20px"}}>
          <Typography variant="h6" style={titleStyle} gutterBottom>
            {title}
          </Typography>
          <div style={{ maxHeight: "400px", overflowY: "auto" }}>
            <Typography variant="body1" component="div">
              {renderParagraphs(history)}
            </Typography>
          </div>
        </Paper>
      </Box>
    </BackgroundLayout>
  );
};

export default HistoriaPage;
