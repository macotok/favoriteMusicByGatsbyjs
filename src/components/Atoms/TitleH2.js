import React from 'react';
import Typography from '@material-ui/core/Typography';

const TitleH2 = ({ children }) => (
  <Typography variant="h6" component="h2" gutterBottom>
    {children}
  </Typography>
);

export default TitleH2;
