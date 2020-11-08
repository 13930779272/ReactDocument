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
// 简易版
/* 
 actions.vote = {
	 changeSupNum(){
		 return {type: TYPES.VOTE_CHANGE_SUPNUM}
	 }
 } 
 REACT-REDUX帮我们把ACTION-CREATORS中的方法变为 mapDispatchToProps 返回的派发格式
 {
	 changeSupNum(){
		dispatch( {type: TYPES.VOTE_CHANGE_SUPNUM});
	 } 
 }
*/
export default connect(state=>({...state.vote}),actions.vote)(Vote);



// 普通版react-redux
/* 
 * connect:React-Redux的高阶组件 
 *  我们可以通过这个组件把容器中的state和action通过属性赋值给某个组件（Vote……）
 *  帮助我们给redux容器的事件池中添加一个“公共状态改变能够重新渲染组件”的事件方法
 *  connect(mapStateToProps,mapDispatchToProps)(Vote)：返回结果是一个代理组件，页面中渲染的是这个组件。
 */
// function mapStateToProps(state){
//   // state拿到redux容器中所有的状态
//   // 返回值为一个对象，对象放的是当前组件需要的状态,通过属性挂载到组件的属性上
//   return {
//     ...state.vote
//   }
// }

// function mapDispatchToProps(dispatch){
//   // dispatch === store.dispatch
//   return {
//     changeSupNum(){
//       // 完成派发
//       dispatch(actions.vote.changeSupNum())
//     },
//     changeOppNum(){
//       dispatch(actions.vote.changeOppNum())
//     }
//   }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Vote);