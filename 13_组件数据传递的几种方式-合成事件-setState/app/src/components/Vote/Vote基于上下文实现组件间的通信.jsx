import React from 'react';
import './Vote.less'
import PropTypes from 'prop-types'
class VoteMain extends React.Component {
  static contextTypes = {
    supNum:PropTypes.number,
    oppNum:PropTypes.number
  }
  constructor(props,context){
    super(props,context)
    console.log(context)
  }
  render() {
    // console.log(this.props)
    const {supNum,oppNum} = this.context
    // console.log(1/0)
    return <main className="mainBox">
      <p>支持人数：{supNum}</p>
      <p>反对人数：{oppNum}</p>
      {/* <p>支持比率：{supNum/oppNum*100 || 0 }%</p> */}
    </main>;
  }
}

class VoteFooter extends React.Component {
  static contextTypes = {
    handle:PropTypes.func
  }
  constructor(props,context){
    super(props,context)
    console.log(context)
  }
  render() {
    // console.log(this.props)
    return <footer className="footerBox">
      <button onClick={ev => {
        this.context.handle('sup',1)
      }}>支持</button>
      <button onClick={ev => {
        this.context.handle('opp',1)
      }}>反对</button>
    </footer>;
  }
}

class Vote extends React.Component {
  static childContextTypes = {
    supNum:PropTypes.number,
    oppNum:PropTypes.number,
    handle:PropTypes.func
  }
  getChildContext(){ 	//=>第一次在getIntialState之后执行，每当祖先组件中的状态改变，重新渲染的时候，此钩子函数也会重新被执行
    return {
      supNum:this.state.supNum,
      oppNum:this.state.oppNum,
      handle:this.handle
    }
  }
  constructor(props) {
    super(props);
    /* 我们一般都要把挂载到祖先上下文中的数据放置到祖先的状态上（后期只需要把祖先的状态改变，上下文中的信息也会跟着改变，同时组先元素重新渲染，
    后代元素也要重新渲染，获取到最先的上下文信息） */
    this.state = {
      supNum:0,
      oppNum:0
    }
  }
  render() {
    const {supNum,oppNum} = this.state
    return (
      <div className="voteBox">
        <header className="headerBox">
          <h3>{this.props.title}</h3>
          <span>N：{supNum + oppNum}</span>
        </header>
        {/* 当父组件渲染的时候也会重新渲染子组件，我们可以把支持反对的状态信息传递给子组件 */}
        <VoteMain></VoteMain>
        {/* 子组件想要调取父组件中的方法，以此实现子组件修改父组件中的信息：我们把父组件中的方法基于属性传递给子组件即可 */}
        <VoteFooter></VoteFooter>
      </div>
    );
  }
  handle = (type,num=1) => {
    const {supNum,oppNum} = this.state
    //=>修改状态的信息（状态信息的修改会触发RENDER重新渲染）
    this.setState({
      supNum:type === 'sup'?supNum+num:supNum,
      oppNum:type === 'opp'?oppNum+num:oppNum
    })
  }
}

export default Vote;
