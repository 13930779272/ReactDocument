import {INCREMENT,DECREMENT} from './actionType'
function reducer(state={num:1},action) {
  state = JSON.parse(JSON.stringify(state))
  switch(action.type) {
    case INCREMENT:
      state.num++
      break;
    case DECREMENT :
      state.num--
      break
  }
  return state
}
export {reducer}