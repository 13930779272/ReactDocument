import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import Vote from './redux基础/1_Vote'
import Outher from './redux基础/2_Other'

function reducer(state={supNum:0,oppNum:0},action){
  state = JSON.parse(JSON.stringify(state))
  switch(action.type){
    case "SUP":
      state.supNum = state.supNum += action.payload
      break;
    case "OPP":
      state.oppNum = state.oppNum += action.payload
  }
  return state
}


let store = createStore(reducer)
ReactDOM.render(
 <>
 {/* 把store通过属性传到子组件里 */}
  <Vote store={store} />
  <hr/>
  <Outher store={store}/>
 </>,
  document.getElementById('root')
);
