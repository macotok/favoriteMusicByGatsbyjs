import React from 'react';
import styled from 'styled-components';

const Error = styled.p`
  color: red;
  font-size: .8rem;
  padding-top: .3rem;
`

const ErrorText = ({ children }) => (
  <Error>
    {children}
  </Error>
);

export default ErrorText;
