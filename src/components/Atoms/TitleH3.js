import React from 'react';
import Typography from '@material-ui/core/Typography';

const TitleH3 = ({ children, icon }) => (
  <Typography
    variant="subtitle1"
    component="h3"
    gutterBottom
  >
    {icon}
    {children}
  </Typography>
);

export default TitleH3;
