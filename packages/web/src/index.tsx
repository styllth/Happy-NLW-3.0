import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import AppProvider from './contexts';
import reportWebVitals from './reportWebVitals';
import Routes from './routes';
import GlobalSyles from './styles/global';
import { LightTheme } from './styles/theme';

const App: React.FC = () => {
  const [theme, setTheme] = useState(LightTheme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalSyles />
      <AppProvider>
        <Routes />
      </AppProvider>
    </ThemeProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
