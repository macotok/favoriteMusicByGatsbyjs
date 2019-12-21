import React from 'react';
import { Button } from '@material-ui/core';

const SubmitButton = ({ children, disabledProps }) => {
  const { pristine, submitting, invalid } = disabledProps;
  return (
    <Button
      type="submit"
      disabled={pristine || submitting || invalid}
      variant="contained"
      color="primary"
    >
      {children}
    </Button>
  );
};

export default SubmitButton;
