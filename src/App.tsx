import React from 'react';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';

import GlobalStyle from './styles/global';
import light from './styles/themes/light';
import Header from './components/Header';

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      {/* <Header /> */}
      <main>
        <Routes />
      </main>
    </ThemeProvider>
  );
}

export default App;
