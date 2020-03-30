import React from 'react';
import './Vote.less'
class VoteMain extends React.Component {
  render() {
    // console.log(this.props)
    const {supNum,oppNum} = this.props
    console.log(1/0)
    return <main className="mainBox">
      <p>支持人数：{supNum}</p>
      <p>反对人数：{oppNum}</p>
      {/* <p>支持比率：{supNum/oppNum*100 || 0 }%</p> */}
    </main>;
  }
}

class VoteFooter extends React.Component {
  render() {
    console.log(this.props)
    return <footer className="footerBox">
      <button onClick={ev => {
        this.props.handle('sup',1)
      }}>支持</button>
      <button onClick={this.props.handle.bind(null,'opp',1)}>反对</button>
    </footer>;
  }
}

class Vote extends React.Component {
  constructor(props) {
    super(props);
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
        <VoteMain {...{supNum,oppNum}}></VoteMain>
        {/* 子组件想要调取父组件中的方法，以此实现子组件修改父组件中的信息：我们把父组件中的方法基于属性传递给子组件即可 */}
        <VoteFooter handle={this.handle}></VoteFooter>
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
