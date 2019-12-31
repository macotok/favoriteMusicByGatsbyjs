import React from 'react';
import Typography from '@material-ui/core/Typography';
import { propElement, propString } from '../../../helpers/propTypes';

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
  children: propString(),
  icon: propElement(),
};

export default TitleH3;
