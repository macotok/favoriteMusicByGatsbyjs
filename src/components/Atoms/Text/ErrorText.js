import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

const Error = styled.p`
  color: red;
  font-size: .8rem;
  padding-top: .3rem;
`;

const ErrorText = ({ children }) => (
  <Error>
    {children}
  </Error>
);

ErrorText.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ErrorText;
