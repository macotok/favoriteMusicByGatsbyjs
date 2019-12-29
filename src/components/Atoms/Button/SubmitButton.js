import React from 'react';
import * as PropTypes from 'prop-types';
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

SubmitButton.propTypes = {
  children: PropTypes.element.isRequired,
  disabledProps: PropTypes.shape({
    pristine: PropTypes.bool,
    submitting: PropTypes.bool,
    invalid: PropTypes.bool,
  }).isRequired,
};

export default SubmitButton;
