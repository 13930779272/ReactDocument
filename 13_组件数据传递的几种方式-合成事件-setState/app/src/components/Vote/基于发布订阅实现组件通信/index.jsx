import React from 'react';
import '../Vote.less';
import Em from './EventEmit'
class VoteMain extends React.Component {
  state = {
    supNum:0,
    oppNum:0
  }
  render() {
    // console.log(this.props)
    const {supNum,oppNum} = this.state
    return <main className="mainBox">
      <p>支持人数：{supNum}</p>
      <p>反对人数：{oppNum}</p>
      {/* <p>支持比率：{supNum/oppNum*100 || 0 }%</p> */}
    </main>;
  }
  handle = (type,num=1) => {
    const {supNum,oppNum} = this.state
    //=>修改状态的信息（状态信息的修改会触发RENDER重新渲染）
    this.setState({
      supNum:type === 'sup'?supNum+num:supNum,
      oppNum:type === 'opp'?oppNum+num:oppNum
    })
  }
  componentDidMount(){ // 第一次渲染完成后订阅方法
    Em.$on('handle',this.handle)
  }
}

class VoteFooter extends React.Component {
  render() {
    return <footer className="footerBox">
      <button onClick={ev => {
        Em.$emit('handle','sup')
        Em.$emit('add')
      }}>支持</button>
      <button onClick={ev => {
        Em.$emit('handle','opp')
        Em.$emit('add')
      }}>反对</button>
    </footer>;
  }
}

class Vote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num:0
    }
  }
  render() {
    return (
      <div className="voteBox">
        <header className="headerBox">
          <h3>{this.props.title}</h3>
          <span>N：{this.state.num}</span>
        </header>
        {/* 当父组件渲染的时候也会重新渲染子组件，我们可以把支持反对的状态信息传递给子组件 */}
        <VoteMain></VoteMain>
        {/* 子组件想要调取父组件中的方法，以此实现子组件修改父组件中的信息：我们把父组件中的方法基于属性传递给子组件即可 */}
        <VoteFooter></VoteFooter>
      </div>
    );
  }
  add = () => {
    this.setState({
      num:++this.state.num
    })
  }
  componentDidMount(){
    Em.$on('add',this.add)
  }
}

export default Vote;
