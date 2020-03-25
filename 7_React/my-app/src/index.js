import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import App from './App';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>
  ,document.getElementById('root'));