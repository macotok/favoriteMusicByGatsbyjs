import React from 'react';
import Typography from '@material-ui/core/Typography';

const Text = ({ children }) => (
  <Typography variant="body1" gutterBottom>
    {children}
  </Typography>
);

export default Text;
