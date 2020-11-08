// 把标识符引入
import * as TYPES from '../actionTypes'
// 初始化状态
const initialState = {
  num:100
}
// reducer函数
export default function reducer(state = initialState,action){
  console.log('app-reducer执行了')
  state = JSON.parse(JSON.stringify(state))
  switch(action.type){
    case TYPES.CHANGE_N_FN:
      state.num += 100
      break;
  }
  // 最后必须把state返回否则没有效果
  return state
}