import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './configureStore';
import LocaleProvider from './context/localeContext';
import './style.css';

render(
  <Provider store={store}>
    <LocaleProvider>
      <App />
    </LocaleProvider>
  </Provider>,
  document.getElementById('root'),
);
