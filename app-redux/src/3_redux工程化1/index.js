import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import Vote from './redux工程化/1_Vote'
// 根目录src下的index导入store
import store from './store/index'
// react-redux
import {Provider} from 'react-redux'

/* 
 * Provider：react-redux提供的祖先组件，目的是把redux容器中的store放置到上下文当中，供后代组件直接调取使用
 */
ReactDOM.render(
  // 把所有渲染的组件用provider包起来，必须加一个store的属性否则报错
  <Vote store={store} />,
  document.getElementById('root')
);
