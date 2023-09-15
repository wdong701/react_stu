/*
 * @Author: dlwan1
 * @Date: 2023-09-12 16:54:33
 * @LastEditTime: 2023-09-14 20:01:31
 * @LastEditors: dlwan1
 * @Description: 
 * @FilePath: \study_react\src\index.js
 */
/*
 * @Author: dlwan1
 * @Date: 2023-09-12 14:59:10
 * @LastEditTime: 2023-09-13 10:17:19
 * @LastEditors: dlwan1
 * @Description: 
 * @FilePath: \study_react\src\index.js
 */
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
