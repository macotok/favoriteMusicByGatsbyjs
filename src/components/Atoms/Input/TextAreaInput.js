import React from 'react';
import { TextField } from '@material-ui/core';

const TextAreaInput = (field) => {
  const { input, label, type, meta: { touched, error } } = field;
  return (
    <TextField
      label={label}
      type={type}
      errorText={touched && error}
      {...input}
      fullWidth
      multiline
    />
  );
};

export default TextAreaInput;
