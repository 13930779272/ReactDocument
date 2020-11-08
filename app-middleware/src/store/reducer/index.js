/* 
 * 合并每个小的reducer组成一个reducers
 *   combineReducers做的事：把每个模块的状态分模块合并
 *     {
 *       vote:{
 *         supNum:100,
 *         oppNum:100
 *       }
 *       personal:{
 *         supNum:100,
 *         info:{}
 *       }
 *     }
 *     获取的时候：store.getState().vote.supNum
 */
// redux提供的合并reducer的方法
import {combineReducers} from 'redux'
// 导入每个reducer
import voteReducer from './voteReducer'
import personalReducer from './personalReducer'
// 合并
export default combineReducers({
  vote:voteReducer,
  personal:personalReducer
})