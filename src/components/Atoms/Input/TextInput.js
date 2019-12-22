import React from 'react';
import { TextField } from '@material-ui/core';

const TextInput = (field) => {
  const { input, label, type, meta: { touched, error } } = field;
  return (
    <>
      <TextField
        label={label}
        type={type}
        {...input}
        fullWidth
      />
      {
        touched && ((error && <span>{error}</span>))
      }
    </>
  );
};

export default TextInput;
