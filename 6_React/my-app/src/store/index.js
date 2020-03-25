import {createStore,bindActionCreators} from 'redux'
import {rootRedirect} from './redirect'
import * as actionCreators from './actions'
const store = createStore(rootRedirect)
// 使用connect就不用bindActionCreators(actions,store.dispatch)走这一步
// const actionCreators = bindActionCreators(actions,store.dispatch)

export default store
export {actionCreators}