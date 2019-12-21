import React from 'react';
import { InputLabel, MenuItem, Select } from '@material-ui/core';

const SelectInput = (field) => {
  const { input, label, type, meta: { touched, error } } = field;

  return (
    <>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        label={label}
        type={type}
        errorText={touched && error}
        {...input}
        fullWidth
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </>
  );
};

export default SelectInput;
