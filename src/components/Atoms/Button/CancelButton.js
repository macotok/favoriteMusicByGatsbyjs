import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { propString } from '../../../helpers/propTypes';

const LinkText = styled(Link)`
  color: white;
  text-decoration: none;
`;

const CancelButton = ({ children, linkTo }) => (
  <Button
    variant="contained"
    color="secondary"
  >
    <LinkText to={linkTo}>
      {children}
    </LinkText>
  </Button>
);

CancelButton.propTypes = {
  children: propString().isRequired,
  linkTo: propString().isRequired,
};

export default CancelButton;
