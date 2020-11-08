import * as TYPES from '../actionTypes'
const initialState = {
  m: 100
}

export default function reducer(state = initialState, action) {
  console.log('vote-reducer执行了')
  state = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case TYPES.CHANGE_M_FN:
      state.m += 100
      break;
  }
  return state
}