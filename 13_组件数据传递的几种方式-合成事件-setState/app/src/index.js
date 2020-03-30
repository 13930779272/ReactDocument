import React from 'react';
import ReactDOM from 'react-dom';
import Vote from './components/Vote/Vote基于属性实现组件间的通信'
import Vote1 from './components/Vote/Vote基于上下文实现组件间的通信'
import Vote2 from './components/Vote/基于发布订阅实现组件通信/index'
// 导入公共样式
import './assets/reset.min.css'

ReactDOM.render(
  <div>
    {/* <Vote title="小李是不是一个优秀的CV工程师"></Vote> */}
    <Vote1 title="小李是不是一个优秀的CV工程师"></Vote1>
    {/* <Vote2 title="小李是不是一个优秀的CV工程师"></Vote2> */}
  </div>,
  document.getElementById('root')
);
