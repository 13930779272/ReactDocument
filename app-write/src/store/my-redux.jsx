/* 
 * createStore(reducer):创建容器，并且基于reducer管理容器中的状态，
 *   =>事件池
 *   =>状态池
 * 返回 getState / dispatch / subscribe 三个方法
 */
export function createStore(reducer) {
  // 创建事件池和状态池
  let state,
    listeners = []
  // 获取状态信息（为了保证外界拿到的状态和本身没关系，需要把其深度克隆后返回）
  function getState() {
    return JSON.parse(JSON.stringify(state))
  }
  // 向事件池中追加方法执行执行subscribe方法的返回值为一个函数（unsubscribe）执行unsubscribe把时间池中对应的方法删除
  function subscribe(func) {
    // 事件池中没有这个方法时再添加
    if(!listeners.includes(func)){
      listeners.push(func)
    }
    return function unsubscribe(){
      // 把这个方法过滤掉，实际的源码中是删除
      listeners.filter(item => item !== func)
    }
  }
  // 执行dispatch方法参数为action 就是执行传进来的reducer函数返回的是最新的状态信息并且通知事件池中的方法执行重新渲染
  function dispatch(action) {
    // 更新最新的状态
    state = reducer(state,action);
    // 通知事件池中的方法执行
    listeners.forEach(item => {
      // 只有事件池中为函数时再执行，真实的redux也没有做这个判断
      if(typeof item === 'function'){
        item()
      }
    })
  }
  
  // 创建容器后state是undefined所以最好先派发依次任务：让容器中的状态等于REDUCER中设置的初始状态
  dispatch({
    // 这个type的原则是不能与我们的reducer中的type一致，不然会影响我们的初始化的状态
    type:'@@redux/INIT'
  })
  // 
  return {
    getState,
    dispatch,
    subscribe
  }

}
/*
 * redux源码中的getState并没有把传进来的状态深克隆再返回而是直接返回原来的状态，我自己写的为了保证外界拿到的状态和我们传进来的状态不互相影响所以深克隆返回
 * 向事件池中追加subscribe传进来的方法时，我们先判断有没有这个方法如果有就不再追加没有时再追加，redux源码中并没有做这件事
 */

/* let store = createStore(function(stste = {
  num:100
},action){
  // 修改状态的方法...

  // 最后把修改后的state返回
  return state
})

// 拿到所有的状态
store.getState()

store.dispatch({
  type:'xxx',
  payLoad:'xxx'
})

let unsubscribe = store.sunscribe(func)
unsubscribe() */


/* 
 * combineReducers:合并reducer,把传进来的对象合并成一个reducer
 */

export function combineReducers(reducers){
  // 返回的而是一个新的reducer包括状态和action，每次dispatch派发都是通知这个reducer来执行，再由大的reducer通知每个小的reducer来执行,每个小的reducer执行只会更新每个小的reducer的状态信息
  return function reducer(state={},action){
    // console.log(state,action)
    // 容器中的总状态 state={app:{},app1:{}}
    for(let key in reducers){
      // console.log(key)
      if(!reducers.hasOwnProperty(key)) break;
      state[key] = reducers[key](state[key],action)
    }
    return state
  }
}


/* let reducer = combineReducers({
  app:function reducer(state={num:100},action){
    // ...
  },
  app1:function reducer(state={num1:200},action){
    // ...
  },
}) */