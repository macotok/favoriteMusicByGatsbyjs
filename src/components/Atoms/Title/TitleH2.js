import React from 'react';
import Typography from '@material-ui/core/Typography';
import TitleIcon from '@material-ui/icons/Title';
import { propString } from '../../../helpers/propTypes';

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

TitleH2.propTypes = {
  children: propString().isRequired,
};

export default TitleH2;
