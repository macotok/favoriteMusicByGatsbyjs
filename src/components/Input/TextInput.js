import React from 'react';
import { TextField } from '@material-ui/core';

const TextInput = (field) => {
  const { input, label, type, meta: { touched, error } } = field;
  return (
    <TextField
      label={label}
      type={type}
      errorText={touched && error}
      {...input}
      fullWidth
    />
  );
};

export default TextInput;
