import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

/* 
 * <></>：空标签节点，既能把某个组件的全部内容包起来，又不占据一个DOM节点，减少DOM的层级嵌套深度
 */
ReactDOM.render(<App />, document.getElementById('root'));
