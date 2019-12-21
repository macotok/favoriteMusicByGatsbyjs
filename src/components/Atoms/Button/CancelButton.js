import React from 'react';
import { Button } from '@material-ui/core';

const CancelButton = ({ children }) => (
  <Button
    variant="contained"
    color="secondary"
  >
    {children}
  </Button>
);

export default CancelButton;
