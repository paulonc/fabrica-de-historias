import React from "react";
import { Radio, RadioGroup, FormControlLabel, Box } from "@mui/material";

const CustomRadioGroup = ({ name, value, onChange, options }) => {
  return (
    <RadioGroup name={name} value={value} onChange={onChange} required>
      <Box display="flex" justifyContent="center">
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio />}
            label={option.label}
            style={{ margin: "0 20px" }} 
          />
        ))}
      </Box>
    </RadioGroup>
  );
};

export default CustomRadioGroup;
