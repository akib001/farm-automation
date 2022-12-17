import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";


export const FormStatusDropdown = ({
  name,
  control,
  label,
    options,
    required=false,

}) => {
  const generateSingleOptions = () => {
    return (options || []).map((option) => {
      return (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      );
    });
  };

  return (
    <FormControl sx={{ mr: '2rem' }} fullWidth>
      <InputLabel >{label}</InputLabel>
      <Controller
        render={({ field: { onChange, value }, fieldState: { error }, }) => (
          <Select  error={!!error} fullWidth variant="outlined" label={label} onChange={onChange} value={value} required={required}>
            {generateSingleOptions()}
          </Select>
        )}
        // rules={{ required: "Please choose a status"}}
        control={control}
        name={name} 
        defaultValue={false}
      />
    </FormControl>
  );
};
