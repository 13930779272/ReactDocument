// import {combineReducers} from 'redux'
import {combineReducers} from '../my-redux'
import appReducer from './appReducer'
import voteReducer from './voteReducer'
export default combineReducers({
  app:appReducer,
  vote:voteReducer
})