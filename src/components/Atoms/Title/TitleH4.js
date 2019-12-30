import React from 'react';
import Typography from '@material-ui/core/Typography';
import { propChildren } from '../../../helpers/propTypes';

const TitleH4 = ({ children }) => (
  <Typography
    variant="subtitle1"
    component="h4"
    gutterBottom
  >
    {children}
  </Typography>
);

TitleH4.propTypes = {
  children: propChildren(),
}

export default TitleH4;
