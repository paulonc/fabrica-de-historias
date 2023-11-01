import React from "react";
import { useLocation } from "react-router-dom";
import {
  Container,
  Typography,
  Paper,
  CardMedia,
  CardContent,
} from "@mui/material";
import BackgroundLayout from "../components/Layout/BackgroundLayout";

const HistoriaPage = () => {
  const location = useLocation();
  const historyData = location.state.historyData;
  const { title, history, image } = historyData;

  const headerStyle = {
    fontFamily: "'Dancing Script', cursive",
    fontWeight: 800,
    fontSize: "5rem",
    marginTop: "20px",
    textAlign: "center",
  };

  const containerStyle = {
    maxHeight: "100vh",
  };

  const paperStyle = {
    padding: "20px",
    marginTop: "20px",
    height: "auto",
  };

  const imageStyle = {
    height: "512px",
    width: "auto",
    margin: "0 auto",
    display: "block",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    border: "1px solid #ccc",
  };

  const storyTextStyle = {
    fontSize: "20px",
    fontWeight: 500,
  };

  const renderParagraphs = (text) => {
    return text
      .split("\n")
      .map((paragraph, index) => <p key={index}>{paragraph}</p>);
  };

  return (
    <BackgroundLayout>
      <Container maxWidth="lg" style={containerStyle}>
        <Typography variant="h3" style={headerStyle} gutterBottom>
          {title}
        </Typography>
        <Paper elevation={3} style={paperStyle}>
          <CardMedia
            component="img"
            alt="Story Image"
            style={imageStyle}
            image={image}
          />
          <CardContent>
            <Typography variant="body1" style={storyTextStyle}>
              {renderParagraphs(history)}
            </Typography>
          </CardContent>
        </Paper>
      </Container>
    </BackgroundLayout>
  );
};

export default HistoriaPage;
