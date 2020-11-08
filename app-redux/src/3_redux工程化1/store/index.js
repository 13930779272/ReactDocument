/* 
 * 创建一个store的容器 
 */

import {createStore,bindActionCreators} from 'redux'
import actions from './actions/index'
import reducer from './reducer'

const store = createStore(reducer)
// 每个模块的action
const BindActionCreators = bindActionCreators(actions.vote,store.dispatch)
// console.log(actions)
export default store
export {BindActionCreators}