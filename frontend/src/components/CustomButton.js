import React from "react";
import Button from "@mui/material/Button";

const CustomButton = ({ label, onClick , width, height}) => {
  return (
    <Button
      variant="contained"
      color="primary"
      style={{
        backgroundColor: "darkmagenta",
        marginTop: "1rem",
        width: width || "160px",
        height: height || "60px",
      }}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
