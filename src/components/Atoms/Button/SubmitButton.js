import React from 'react';
import { Button } from '@material-ui/core';
import { propBool, propShape, propString } from '../../../helpers/propTypes';

const SubmitButton = ({ children, disabledProps }) => {
  const { pristine, submitting, invalid } = disabledProps;
  return (
    <Button
      type="button"
      disabled={pristine || submitting || invalid}
      variant="contained"
      color="primary"
    >
      {children}
    </Button>
  );
};

SubmitButton.propTypes = {
  children: propString().isRequired,
  disabledProps: propShape({
    pristine: propBool(),
    submitting: propBool(),
    invalid: propBool(),
  }).isRequired,
};

export default SubmitButton;
