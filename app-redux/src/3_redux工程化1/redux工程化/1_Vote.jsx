import React from 'react'
import actions from '../store/actions'
import {BindActionCreators} from '../store/index'
// console.log(BindActionCreators)
function Main(props) {
  let store = props.store,
  {supNum,oppNum} = store.getState().vote
  return (
    <div>
      <p>支持 ：{supNum}</p>
      <p>反对 ：{oppNum}</p>
    </div>
  )
}
function Btn(props) {
  // console.log(props)
  let store = props.store
  return (
    <div>
      <button onClick={ev => {
        BindActionCreators.changeSupNum()
      }}>支持</button>
      <button onClick={ev => {
        store.dispatch(actions.vote.changeOppNum())
      }}>反对</button>
    </div>
  )
}
class Vote extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props.store.getState())
    let { vote: { supNum, oppNum } } = props.store.getState()
    this.state = {
      supNum,
      oppNum
    }
    
  }
  render() {
    // console.log(this.state)
    let store = this.props.store,
    {supNum, oppNum} = this.state
    return (
      <div>
        <h3>请投票 ：<span>N:{(supNum+oppNum)?(supNum+oppNum):0}</span></h3>
        <Main store={store} />
        <Btn store={store} />
      </div>
    );
  }
  componentDidMount(){
    let store = this.props.store
    store.subscribe(() => {
      this.setState({
        ...store.getState().vote
      })
    })
  }
}

export default Vote;