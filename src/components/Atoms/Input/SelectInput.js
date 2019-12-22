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
        errorText={touched && error}
        {...input}
        fullWidth
      >
        {
          selectValue.map(select => (
            <MenuItem value={select.value}>{select.text}</MenuItem>
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
