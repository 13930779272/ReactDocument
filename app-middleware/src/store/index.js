// 引入 applyMiddleware、createStore
import {createStore,applyMiddleware} from 'redux'
import reducer from './reducer'
// 引入中间件
import reduxLogger from 'redux-logger'
import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'
// 使用中间件
const store = createStore(reducer,applyMiddleware(reduxLogger,reduxThunk,reduxPromise))

export default store
/*
 * 中间件：介于dispatch派发和reducer执行中间做的一些事情
 *   重构dispatch
 *   const dispatchOrigin = store.dispatch;
 *   store.dispatch = function (action) {
 *	    console.log('派发开始', store.state);
 *	    dispatchOrigin(action);
 *	    console.log('派发结束', store.state);
 *   };
 * applyMiddleware使用中间件
 *   redux-logger 输出派发日志
 *   redux-thunk 处理派发中的异步请求
 *   redux-promise 处理派发中的异步请求
 */