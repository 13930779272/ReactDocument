import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import Vote from './redux工程化/1_Vote'
import store from './store/index'
ReactDOM.render(
 <Provider store={store}>
   <Vote/>
 </Provider>,
  document.getElementById('root')
);