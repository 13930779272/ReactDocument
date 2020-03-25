function createStore(reducer,initState){
  // reducer必须为一个函数
  if(typeof reducer !== 'function'){
    throw new Error('reducer必须为一个函数')
  }
  let currentState = initState // 初始化数据
  let currentReducer = reducer // 默认的reducer
  let listeners = [] // 订阅池
  // 获取数据
  function getState(){
    return currentState
  }
  // 判断是否为纯对象的函数
  function isObject(obj){
    if(typeof obj !== 'object'){
      throw new Error('obj必须为一个对象')
    }
    return Object.getPrototypeOf(obj) === Object.prototype
  }
  // dipatch函数，一上来就得调用一次，保证currentState值
  function dispatch(action){
    if(!isObject(action)){
      throw new Error('action必须为一个纯对象')
    }
    currentState = currentReducer(currentState,action)
    listeners.forEach(item => item())
  }
  dispatch({type:'@_@'})

  function subscribe(listener){
    listeners.push(listener)
    return function(){
      let index = listeners.indexOf(listener)
      listeners.split(index,1)
    }
  }
  return {
    getState,
    dispatch,
    subscribe
  }
}
export {createStore}