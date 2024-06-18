import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom"
import { Provider } from 'react-redux';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid'

import App from '@/App';
import "normalize.css"
import "./assets/css/index.less"
import store from './store';
import theme from './assets/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback="loading">
      <Provider store={store}>
        <StyleSheetManager shouldForwardProp={isPropValid}>
          <ThemeProvider theme={theme}>
            <HashRouter>
              <App />
            </HashRouter>
          </ThemeProvider>
        </StyleSheetManager>
      </Provider>
    </Suspense>
  </React.StrictMode>
);
