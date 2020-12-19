import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

/* External dependencies */
import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { createGlobalStyle } from 'styled-components';

/* Internal dependencies */
import App from 'App';
import * as serviceWorker from 'serviceWorker';
import 'sanitize.css/sanitize.css';

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
  }

  #root {
    display: flex;
    justify-contents: 
    margin: 0 auto;
    text-align: center;
    height: 100%;
  }
`;

ReactDOM.render(
  <HelmetProvider>
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>
  </HelmetProvider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
