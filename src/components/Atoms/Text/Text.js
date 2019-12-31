import React from 'react';
import Typography from '@material-ui/core/Typography';
import { propArray, propOneOfType, propString } from '../../../helpers/propTypes';

const Text = ({ children }) => (
  <Typography variant="body1" gutterBottom>
    {children}
  </Typography>
);

Text.propTypes = {
  children: propOneOfType([
    propString(),
    propArray(),
  ]).isRequired,
};

export default Text;
