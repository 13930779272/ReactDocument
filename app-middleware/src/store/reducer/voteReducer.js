/* 
 * 每个reducers都管理自己的单独的状态 ,先把基本的架子搭起来，
 */
import * as TYPES from '../actionTypes'
// 初始化状态
const initialState = {
  supNum:100,
  oppNum:100
}
export default function voteReducer(state=initialState, action) {
  // 深度克隆数据（官方浅克隆会有bug）
  state = JSON.parse(JSON.stringify(state))
  switch(action.type){
    case TYPES.VOTE_CHANGE_SUPNUM:
      state.supNum++
      break
    case TYPES.VOTE_CHANGE_OPPNUM:
      state.oppNum += action.payload
      break
  }
  return state
}