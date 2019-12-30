import React from 'react';
import Typography from '@material-ui/core/Typography';
import { propChildren, propElement } from '../../../helpers/propTypes';

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

TitleH3.propTypes = {
  children: propChildren(),
  icon: propElement(),
};

export default TitleH3;
