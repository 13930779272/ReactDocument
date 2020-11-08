import React from 'react'
import actions from '../store/actions'
import {connect} from 'react-redux'

const Main = connect(state=>state.vote,null)(main)
function main(props) {
  let {supNum,oppNum} = props
  return (
    <div>
      <p>支持 ：{supNum}</p>
      <p>反对 ：{oppNum}</p>
    </div>
  )
}
const Btn = connect(null,actions.vote)(btn)

function btn(props) {
  // console.log(props)
  return (
    <div>
      <button onClick={ev => {
        props.changeSupNum()
      }}>支持</button>
      <button onClick={ev => {
        props.changeOppNum()
      }}>反对</button>
    </div>
  )
}



class Vote extends React.Component {
  render() {
    // console.log(this.props)
    let {supNum,oppNum} = this.props
    return (
      <div>
        <h3>请投票 ：<span>N:{supNum+oppNum?supNum+oppNum:0}</span></h3>
        <Main />
        <Btn />
      </div>
    );
  }
  
}

export default connect(state=>({...state.vote}),actions.vote)(Vote);



