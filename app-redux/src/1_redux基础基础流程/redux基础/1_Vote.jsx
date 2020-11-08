import React from 'react'

function Main(props){
  /* 
   * 只要父级组件重新渲染了，这一定会重新渲染，无需任何操作就可以更新，但是如果没有这种关系是不会重新更新的，具体看Outher组件
   */
  let store = props.store,
  {supNum,oppNum} = store.getState();
  return (
    <div>
      <p>支持 ：{supNum}</p>
      <p>反对 ：{oppNum}</p>
    </div>
  )
}
function Btn(props){
  // console.log(props)
  return (
    <div>
      <button onClick={ev => {
        props.store.dispatch({
          type:'SUP',
          payload:1
        })
      }}>支持</button>
      <button onClick={ev => {
        props.store.dispatch({
          type:'OPP',
          payload:1
        })
      }}>反对</button>
    </div>
  )
}
class Vote extends React.Component {
  /*
	 * 获取REDUX中的状态信息 GET-STATE
	 * 向REDUX事件池中追加方法（目的：容器中状态改变，执行这个方法，控制当前组件重新渲染）SUB-SCRIBE
   * 只要父组件重新渲染，子组件也会重新渲染
	 */
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    let store = this.props.store,
    {supNum,oppNum} = store.getState();
    return (
      <div>
        <h3>请投票 ：<span>N:{isNaN(supNum+oppNum)?0:supNum+oppNum}</span></h3>
        <Main store={store} />
        <Btn store={store} />
      </div>
    );
  }
  componentDidMount(){
    let subscribe = this.props.store.subscribe(() => {
      this.forceUpdate()
    })
  }
}
 
export default Vote;