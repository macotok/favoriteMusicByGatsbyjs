import React from 'react';
import Typography from '@material-ui/core/Typography';
import { propChildren } from '../../../helpers/propTypes';

const Text = ({ children }) => (
  <Typography variant="body1" gutterBottom>
    {children}
  </Typography>
);

Text.propTypes = {
  children: propChildren(),
};

export default Text;
