import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
`;

const LinkText = styled(Link)`
  color: white;
  text-decoration: none;
`

const LinkButton = ({ children, toLink }) => (
  <ButtonWrap>
    <Button variant="contained" color="secondary">
      <LinkText to={toLink}>
        {children}
      </LinkText>
    </Button>
  </ButtonWrap>
);

LinkButton.propTypes = {
  toLink: PropTypes.string.isRequired,
};

export default LinkButton;
