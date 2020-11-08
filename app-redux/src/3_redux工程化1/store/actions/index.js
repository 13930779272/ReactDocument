import {bindActionCreators} from  'redux'
import voteAction from './voteAction'
import personalAction from './personalAction'

const action = {
  vote:voteAction,
  personal:personalAction
}

export default action