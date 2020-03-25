import {INCREMENT,DECREMENT,INCREMENT1,DECREMENT1} from './actionsType';
import {combineReducers} from 'redux'
const redirect = (state={num:1},action) => {
  state = JSON.parse(JSON.stringify(state))
  switch(action.type){
    case INCREMENT:
      state.num++
      break;
    case DECREMENT:
      state.num--
      break;
  }
  return state
}
const redirect1 = (state={num:10},action) => {
  state = JSON.parse(JSON.stringify(state))
  switch(action.type){
    case INCREMENT1:
      state.num += 2
      break;
    case DECREMENT1:
      state.num -=2
      break
  }
  return state
}
const rootRedirect = combineReducers({
  r:redirect,
  r1:redirect1
})
export {rootRedirect}