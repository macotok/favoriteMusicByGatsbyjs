import React from 'react';
import SiteInfo from '../Molecules/SiteInfo';
import HeaderNav from '../Molecules/List/HeaderNav';
import { HeaderWrapper, HeaderInner } from './HeaderStyled';
import { propString } from '../../helpers/propTypes';

const Header = ({ pathname }) => (
  <HeaderWrapper>
    <HeaderInner>
      <SiteInfo />
      <HeaderNav pathname={pathname}/>
    </HeaderInner>
  </HeaderWrapper>
);

Header.propTypes = {
  pathname: propString().isRequired,
};

export default Header;

