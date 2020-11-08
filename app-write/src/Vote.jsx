import React from 'react'
import { connect } from './store/my-react-redux'
import actions from './store/actions/index'
class Vote extends React.Component {
  render() {
    console.log('组件Vote重新渲染了')
    console.log(this.props)
    return <>
      {this.props.m}
      <button onClick={this.props.changeM}>+</button>
    </>;
  }
}

export default connect(state => state.vote, actions.voteAction)(Vote);