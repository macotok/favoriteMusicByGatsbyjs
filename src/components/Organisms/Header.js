import React from 'react';
import styled from 'styled-components';
import SiteInfo from '../Molecules/SiteInfo';
import HeaderNav from '../Molecules/List/HeaderNav';

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.palette.primary.main};
  padding: 1rem 0;
  margin-bottom: 2rem;
`;

const HeaderInner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  width: 1000px;
  height: 100%;
`;

const Header = () => (
  <HeaderWrapper>
    <HeaderInner>
      <SiteInfo />
      <HeaderNav />
    </HeaderInner>
  </HeaderWrapper>
);

export default Header;

