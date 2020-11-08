/* 
 * 存储当前版块需要派发的action对象
 */
import * as TYPES from '../actionTypes'

function changeSupNum() {
  return {
    type: TYPES.VOTE_CHANGE_SUPNUM
  }
}
// 基于redux-thunk实现异步操作,第一次dispatch派发的是一个函数，第二次才真正派发了
/* function changeOppNum() {
  return dispatch => {
    setTimeout(_ => {
      dispatch({
        type: TYPES.VOTE_CHANGE_OPPNUM
      })
    }, 1000)
  }
} */

// 基于redux-thunk实现异步操作请求接口
/* function changeOppNum() {
  return async dispatch => {
    let num = await axios.get('/xxx')
    dispatch({
      type:TYPES.VOTE_CHANGE_OPPNUM,
      num
    })
  }
} */

// 基于redux-promise实现异步操作
// action对象传递给reducer的值只能存储在payload中（叫其它名字不好使 =>reduxPromise中间件的要求）
function changeOppNum() {
  return {
    type: TYPES.VOTE_CHANGE_OPPNUM,
    payload:new Promise(resolve => {
      setTimeout(_ => {
        resolve(1)
      },1000)
    })
  }
}


export default {
  changeSupNum,
  changeOppNum
}