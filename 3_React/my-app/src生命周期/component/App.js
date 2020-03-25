import React, { Component } from 'react'
/*
    React的生命周期从广义上分为三个阶段：挂载、渲染、更新、卸载

    执行一次:
        constructor   1
        componentWillMount  2
        render   3
        componentDidMount 4
    数据更新阶段
      父级数据变化
          componentWillReceiveProps(nextProps)  (1)

      数据发生变化的时候出发(不管是子级的数据还是父级的数据)
          shouldComponentUpdate(nextProps,nextState)   (2)

      DOM更新之前
        componentWillUpdate (3) (用的不多)

      render  (4)

      DOM更新之后
       componentDidUpdate (5) (有用)

      组件销毁之后
        componentWillUnmount

      只要是钩子函数(render,componentDidUpdate)中都要小心使用this.setState,小心死循环，使用的时候建议加判断。


    一次的
      component  Will Mount
      component  Did Mount

    更新
      component Will Updtae
      component Did  Updtae

      
      component Will Receive Props

      should Component Update
*/
class App extends Component {
  constructor(props) {
    super(props);
    console.log('constructor',this.state)
    this.state = {
      num:1,
      val:'父级的数据变化子级也会跟着变',
      ary:[1,2,3,4]
    }
    this.timer = null
  }
  // 可以拿得到数据，一般很少用
  componentWillMount(){
    console.log('componentWillMount',this.state)
  }
  // 可以放ajax请求，可以进行DOM操作，定时器操作
  componentDidMount(){
    console.log('componentDidMount',document.querySelector('#app'))
    // setInterval(() => {
    //   console.log('1111111')
    // },1000)

    this.timer = setInterval(() => {
      console.log('11111')
    }, 1000);
  }
  // 父级的数据变化就会触发
  componentWillReceiveProps(nextProps){
    if(nextProps.pnum === this.props.pnum){
      this.setState({val:'父级的数据变化了'})
    }
    console.log('copmonentWillReceiveProps','父级的数据发生变化就会触发新数据'+nextProps.pnum,'老数据'+this.props.pnum)
  }
  // 当return false后父级数据变化会阻止render
  shouldComponentUpdate(nextProps,nextState){
    console.log('shouldComponentUpdata')
    if(nextState.val === this.state.val && nextState.val === '父级的数据变化了'){
      return false
    }
    return true
  }
  // DOM更新之前
  componentWillUpdate(){
    console.log('componentWillUpdate','DOM更新之前')
    console.log(document.querySelectorAll('li'))
  }
  // DOM更新之后
  componentDidUpdate(){
    console.log('componentDidUpdate','DOM更新之后')
    console.log(document.querySelectorAll('li'))
  }

  // 组件销毁
  componentWillUnmount(){
    console.log('组件销毁')
    clearInterval(this.timer)
  }
  render() {
    /*
      在render里面不要使用this.setState()不然会1死循环
    */
    let list = this.state.ary.map((item,i) => <li key={i}>{item}</li>)
    console.log('render') 
    return (
      <div id="app">
        <h1>子级{this.props.pnum}</h1>
        <h1>{this.state.val}</h1>
        <button onClick={this.add}>更新li</button>
        <ul>{list}</ul>
      </div>
    );
  }
  add = () => {
    this.state.ary.push(this.state.ary.length+1)
    this.setState({})
  }
}
 
export default App;