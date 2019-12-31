import React from 'react';
import styled from 'styled-components';
import { propString } from '../../../helpers/propTypes';

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
  children: propString(),
};

export default ErrorText;
