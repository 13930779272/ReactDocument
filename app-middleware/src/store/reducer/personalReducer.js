import * as TYPES from '../actionTypes'
const initialState = {
  supNum:100,
  info:{}
}

export default function personalReducer(state=initialState,action){
  state = JSON.parse(JSON.stringify(state))
  switch(action.type){
    
  }
  return state
}