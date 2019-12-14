import React from 'react';
import Typography from '@material-ui/core/Typography';

const TitleH4 = ({ children }) => (
  <Typography
    variant="subtitle1"
    component="h4"
    gutterBottom
  >
    {children}
  </Typography>
);

export default TitleH4;
