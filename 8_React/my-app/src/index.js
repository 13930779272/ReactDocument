import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
const store = createStore(reducer,applyMiddleware(thunk.withExtraArgument()))

function reducer(state={num:1},action){
  state = JSON.parse(JSON.stringify(state))
  switch(action.type){
    case 'INCREMENT':
      state.num ++
      break
      case "DECREMENT":
      state.num --
      break
  }
  return state
}
ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>

  
  , document.getElementById('root'));