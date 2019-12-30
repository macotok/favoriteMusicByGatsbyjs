import React from 'react';
import {
  ThemeProvider as MaterialThemeProvider,
  StylesProvider
} from '@material-ui/styles';
import styled, {
  ThemeProvider as StyledThemeProvider
} from 'styled-components';
import theme from '../../styled/theme';
import Footer from '../Atoms/Text/Footer';
import Header from '../Organisms/Header';
import DefaultStyled from './DefaultStyled';
import { propChildren, propString } from '../../helpers/propTypes';

const LayoutWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Default = ({ children, pathname }) => (
  <StylesProvider injectFirst>
    <MaterialThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <DefaultStyled />
        <Header pathname={pathname} />
        <LayoutWrapper>
          <main>
            {children}
          </main>
        </LayoutWrapper>
        <Footer />
      </StyledThemeProvider>
    </MaterialThemeProvider>
  </StylesProvider>
);

Default.propTypes = {
  children: propChildren(),
  pathname: propString().isRequired,
};

export default Default
