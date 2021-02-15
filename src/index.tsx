import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

/* External dependencies */
import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';

/* Internal dependencies */
import App from 'App';
import * as serviceWorker from 'serviceWorker';
import 'sanitize.css/sanitize.css';
import 'antd/dist/antd.less';

ReactDOM.render(
  <HelmetProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HelmetProvider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
