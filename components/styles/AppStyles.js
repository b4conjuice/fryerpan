import React from 'react';
import { node } from 'prop-types';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

const theme = {
  blue: '#8b9dc3',
  darkBlue: '#3b5998',
  lightBlue: '#dfe3ee',
  grey: '#f7f7f7',
  white: '#ffffff',
  maxWidth: '100%',
};

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
  height: 100%;
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  height: 100%;
`;

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 20px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'Arial'
  }

  html,
  body,
  #root {
    height: 100%;
  }

  header,
  footer {
    height: 10%;
    font-size: 5vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  header {
    background: ${props => props.theme.darkBlue};
    color: white;
  }

  main {
    background: ${props => props.theme.grey};
    color: ${props => props.theme.blue};
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    height: 80%;
    padding: 4vw;
  }

  footer {
    background: ${props => props.theme.lightBlue};
  }
`;

const AppStyles = ({ children }) => (
  <ThemeProvider theme={theme}>
    <StyledPage>
      <GlobalStyle />
      <Inner>{children}</Inner>
    </StyledPage>
  </ThemeProvider>
);

AppStyles.propTypes = {
  children: node.isRequired,
};

export default AppStyles;
