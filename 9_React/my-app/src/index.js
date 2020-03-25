import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Provider from './react-redux/index'
// import {Provider} from 'react-redux'
import {createStore} from 'redux'
const store = createStore(reducer)
function reducer(state={num:1},action){
  state = JSON.parse(JSON.stringify(state))
  switch(action.type){
    case 'add':
      state.num++
      break
  }
  return state
}
ReactDOM.render(
<Provider store={store}>
  <App/>
</Provider>
,document.getElementById('root'))