import React from 'react';
import { InputLabel, MenuItem, Select } from '@material-ui/core';

const SelectInput = (field) => {
  const { input, label, type, labelId, selectValue, meta: { touched, error } } = field;

  return (
    <>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select
        labelId={labelId}
        label={label}
        type={type}
        {...input}
        fullWidth
      >
        {
          selectValue.map((select, index) => (
            <MenuItem value={select.value} key={index}>{select.text}</MenuItem>
          ))
        }
      </Select>
      {
        touched && ((error && <span>{error}</span>))
      }
    </>
  );
};

export default SelectInput;
