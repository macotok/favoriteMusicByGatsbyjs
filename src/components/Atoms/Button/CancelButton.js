import React from 'react';
import * as PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { Link } from 'gatsby';
import styled from 'styled-components';

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
  children: PropTypes.element.isRequired,
  linkTo: PropTypes.string.isRequired,
};

export default CancelButton;
