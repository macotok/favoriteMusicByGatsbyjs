import React from 'react';
import Typography from '@material-ui/core/Typography';
import TitleIcon from '@material-ui/icons/Title';

const TitleH2 = ({ children }) => (
  <Typography
    variant="h6"
    component="h2"
    gutterBottom
  >
    <TitleIcon style={{ position: 'relative', top: 5 }} />
    {children}
  </Typography>
);

export default TitleH2;
