import thunk from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import {rootRedirect} from './reducer'
const store = createStore(rootRedirect,applyMiddleware(thunk.withExtraArgument()))
export default store