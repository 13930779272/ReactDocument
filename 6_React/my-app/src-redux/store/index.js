import {createStore,bindActionCreators} from 'redux'
import {rootRedirect} from './reducers'
import * as actions from './actions'
console.log(actions) // 是个对象
const store = createStore(rootRedirect)
const actionCreators = bindActionCreators(actions,store.dispatch)

export default store
export {actionCreators}