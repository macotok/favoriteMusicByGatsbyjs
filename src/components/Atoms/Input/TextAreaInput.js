import React from 'react';
import { TextField } from '@material-ui/core';
import ErrorText from '../Text/ErrorText';

const TextAreaInput = (field) => {
  const { input, label, type, meta: { touched, error } } = field;
  return (
    <>
      <TextField
        label={label}
        type={type}
        {...input}
        fullWidth
        multiline
      />
      {
        touched && ((error && <ErrorText>{error}</ErrorText>))
      }
    </>
  );
};

export default TextAreaInput;
