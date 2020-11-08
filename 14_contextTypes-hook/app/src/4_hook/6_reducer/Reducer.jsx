
// 初始化状态
let initailState = {
  n: 0,
  m: 0
}
/* 
 * reducer统一修改state的函数,reducer必须要有返回值，返回的是修改后的状态
 *   state:容器中当前的状态
 *   actions:基于dispatch派发的行为操作（派发时候传递的对象）
 */
function reducer(state, action) {
  // console.log(state)
  switch (action.type) {
    case 'CHANGE-N':
      state = { ...state, n: action.payload }
      break;
    case 'CHANGE-M':
      state = { ...state, m: action.payload }
      break
  }
  return state // 返回啥就把当前容器中的状态改成啥
}
export  {
  initailState,
  reducer
}

