import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// 把返回值引到需要用的组件
import MyContext from './context'
// 把供应者结构出来
const {Provider} = MyContext

ReactDOM.render(
  // 必须为value
  <Provider value={{num:1}}>
    <App />
  </Provider>
  
  
  , document.getElementById('root'));