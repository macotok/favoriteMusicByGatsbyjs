import React from 'react';
import styled from 'styled-components';

const FooterWrap = styled.div`
  text-align: center;
  padding: 2rem 0 1rem;
  color: #999;
`;

const FooterText = styled.p`
  font-size: .8rem;
`;

const Footer = () => (
  <FooterWrap>
    <footer>
      <FooterText>
        pukos-music-story.netlify.com
      </FooterText>
    </footer>
  </FooterWrap>
);

export default Footer;
