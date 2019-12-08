import React from 'react';
import styled from 'styled-components';

const TextStyle = styled.p`
  padding: 1rem 0;
`;

const Text = ({ children }) => (
  <div>
    <TextStyle>
      {children}
    </TextStyle>
  </div>
);

export default Text;
