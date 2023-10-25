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
    overflowY: "scroll",
    maxHeight: "100vh",
  };

  const paperStyle = {
    padding: "20px",
    marginTop: "20px",
    height: "auto",
  };

  const storyTextStyle = {
    fontSize: "20px",
    fontWeight: 600,
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
            style={{
              height: "512px",
              width: "auto",
              margin: "0 auto",
              display: "block",
            }}
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
