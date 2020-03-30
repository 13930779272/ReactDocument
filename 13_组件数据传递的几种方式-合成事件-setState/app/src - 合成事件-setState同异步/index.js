import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1,
      num1:100
    }
  }
  // 第一次渲染之前
  componentWillMount(){
    this.setState({num:100}) // 在这更改数据会渲染视图，如果是同步的会立即渲，当这个生命周期走完再到render就是第二次渲染了生命周期就乱了，所以setState必须是异步的
    console.log(this.state.num)
  }
  render() {
    console.log('渲染了') // 同一个事件中不管调用几次setState都会合成一次执行，只调用一次render
    return (
      <div>
        {this.state.num}!==
        {this.state.num1}
        <button onClick={this.add}>按钮</button>
        <button ref={ele => {
          this.ele = ele
        }}>setState同步</button>
      </div>
    );
  }
  add = () => {
    /* 
     * setState在合成事件或者生命周期函数中都是异步操作
     *   React有一个类似浏览器渲染的队列机制，会在多次执行setState的情况下合成一次执行渲染（如果同时修改同一个状态，那么会以最后一次为主），所以setState必须是异步的，可以看成性能优化
     */
    let num = this.state.num
    let num1 = this.state.num1 
    this.setState({ num: ++num })
    // this.setState({ num: 100 })
    // this.setState({ num: 200 })
    this.setState({ num1: ++num1 })
    console.log(this.state.num) // 是更改之前的数据
  }
  componentDidMount(){
    /*
		 * 把SET-STATE放到一个异步操作中，此时它就没必要异步了，走的是同步处理
		 *  1.定时器
		 *  2.原生JS事件 
		 *  3.AJAX异步请求
		 */
    // 定时器是同步的
    setTimeout(_ => {
      this.setState({
        num:1000
      })
      console.log(this.state)
    },1000)
    // 原生的事件也是同步的
    this.ele.addEventListener('click' ,() => {
      this.setState({
        num:100000
      })
      console.log(this.state.num)
    })
  }
}



ReactDOM.render(
  <App></App>,
  document.getElementById('root')
);
