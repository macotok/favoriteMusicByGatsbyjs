import React from 'react';
import { TextField } from '@material-ui/core';
import ErrorText from '../Text/ErrorText';

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
        touched && ((error && <ErrorText>{error}</ErrorText>))
      }
    </>
  );
};

export default TextInput;
