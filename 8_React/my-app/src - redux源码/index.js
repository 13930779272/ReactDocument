import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from './redux'
const store = createStore(reducer)

function reducer(state={num:1},action){
  state = JSON.parse(JSON.stringify(state))
  switch(action.type){
    case 'INCREMENT':
      state.num ++
  }
  // console.log(state)
  return state
}

function render(){
  ReactDOM.render(<App store={store} />, document.getElementById('root'));
}
render()
/*
  subscribe(监听数据变化)只要reducer的state发生了变化，那么就会触发subscribe中的回调函数

  store.subscribe,有个返回值(函数)，返回的是解除监听状态，只要调用这个返回函数，
  那么就不在做状态监听，但是状态继续变化，是不影响store中的state更新的
*/
let sub = store.subscribe(()=>{render()})