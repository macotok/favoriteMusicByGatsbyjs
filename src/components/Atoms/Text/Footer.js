import React from 'react';
import styled from 'styled-components';
import Text from './Text';

const FooterWrap = styled.div`
  text-align: center;
  padding: 2rem 0 1rem;
`;

const Footer = () => (
  <FooterWrap>
    <footer>
      <Text>
        xxxxx.com
      </Text>
    </footer>
  </FooterWrap>
);

export default Footer;
