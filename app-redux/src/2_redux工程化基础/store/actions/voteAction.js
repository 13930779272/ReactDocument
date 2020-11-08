/* 
 * 存储当前版块需要派发的action对象
 */
import * as TYPES from '../actionTypes'

function changeSupNum(){
  return {
    type:TYPES.VOTE_CHANGE_SUPNUM
  }
}
function changeOppNum(){
  return {
    type:TYPES.VOTE_CHANGE_OPPNUM
  }
}

export default {
  changeSupNum,
  changeOppNum
}