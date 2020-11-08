import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import Vote from './redux工程化/1_Vote'
// 根目录src下的index导入store
import store from './store/index'
// function reducer(state={supNum:0,oppNum:0},action){
//   state = JSON.parse(JSON.stringify(state))
//   switch(action.type){
//     case "SUP":
//       state.supNum = state.supNum += action.payload
//       break;
//     case "OPP":
//       state.oppNum = state.oppNum += action.payload
//   }
//   return state
// }


// let store = createStore(reducer)
ReactDOM.render(
 <>
 {/* 把store通过属性传递 */}
  <Vote store={store} />
 </>,
  document.getElementById('root')
);
