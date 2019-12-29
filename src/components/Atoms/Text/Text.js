import React from 'react';
import * as PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const Text = ({ children }) => (
  <Typography variant="body1" gutterBottom>
    {children}
  </Typography>
);

Text.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Text;
