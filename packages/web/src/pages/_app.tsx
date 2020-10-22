/* eslint-disable no-unused-vars */
import { AppProps } from 'next/app';
import NextHead from 'next/head';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../styles/global';
import { LightTheme, DarkTheme } from '../styles/themes/index';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState(LightTheme);

  return (
    <>
      <ThemeProvider theme={theme}>
        <NextHead>
          <meta charSet="UTF-8" />
          <title>Happy</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="Leve a felicidade para o mundo, visite orfanatos e mude o dia de muitas crianças."
          />
          <link rel="icon" href="/favicon.ico" />
          <link rel="shortcut icon" href="/icon-512.png" />
          <link rel="apple-touch-icon" href="/icon-512.png" />
          <link rel="manifest" href="/manifest.json" />
        </NextHead>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
