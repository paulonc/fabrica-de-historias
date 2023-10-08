import React from "react";
import { Box } from "@mui/material";
import backgroundImage from "../../assets/img/background.jpg";

const backgroundStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  minHeight: "100vh",
};

const BackgroundLayout = ({ children }) => {
  return (
    <Box
      style={backgroundStyle}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      {children}
    </Box>
  );
};

export default BackgroundLayout;
