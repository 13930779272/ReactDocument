import React from 'react';
import ReactDOM from 'react-dom';
import Btn from './Btn'
import Num from './Num'
import Vote from './Vote'
import {Provider} from './store/my-react-redux'
import store from './store/index.js'
ReactDOM.render(
<Provider store={store}>
  <Num/>
  <Btn/>
  <hr/>
  <Vote/>
</Provider>,
  document.getElementById('root')
);