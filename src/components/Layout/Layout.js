import React from 'react';
import {
  ThemeProvider as MaterialThemeProvider,
  StylesProvider
} from '@material-ui/styles';
import styled, {
  ThemeProvider as StyledThemeProvider
} from 'styled-components';
import theme from '../../styled/theme';
import Header from '../Organisms/Header';
import LayoutStyled from './LayoutStyled';

const LayoutWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Layout = ({ children }) => (
 <StylesProvider injectFirst>
   <MaterialThemeProvider theme={theme}>
     <StyledThemeProvider theme={theme}>
       <LayoutStyled />
       <Header />
       <LayoutWrapper>
        {children}
       </LayoutWrapper>
     </StyledThemeProvider>
   </MaterialThemeProvider>
 </StylesProvider>
);

export default Layout
