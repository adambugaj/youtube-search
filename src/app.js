import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter, { history } from './routers/AppRouter';
import View from './components/ViewComponent';
import configureStore from './store/configureStore';

const store = configureStore();

// connect store with every components - allow download the data
const jsx = (
  <Provider store={store}>
    <View />
  </Provider>
);

// Run app ID from HTML code
ReactDOM.render(jsx, document.getElementById('app'));
