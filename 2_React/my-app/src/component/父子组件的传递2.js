import React, { Component } from 'react'
class App6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num:1,
    }
  }
  render() { 
    const {num} = this.state
    return ( 
      <div>
        <h1>父组件{num}</h1>
        <button onClick={(ev) => this.add(0,ev)}>{num}</button>
        <hr/>
        <A6Child pnum={num} padd={this.add} />
      </div>
    );
  }
  add= (...arg) => {
    console.log(arg)
    if(typeof arg === 'number'){
      this.setState({num:arg})
      return
    }
    this.setState({num: ++ this.state.num})
  }
}
class A6Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num:this.props.pnum
    }
  }
  render() {
    const {num} = this.state
    const {pnum} = this.props
    const {padd} = this.props
    return (
      <div>
        <h1>子组件</h1>
        <button onClick={this.padd} >同步num{pnum}</button>
        <button onClick={this.add}>自己的num{num}</button>
        <button onClick={this.merge}>同步数据</button>
      </div>
    );
  }
  padd = () => {
    this.props.padd()
  }
  add = () => {
    this.setState({num:++ this.state.num})
  }
  merge = (ev) => {
    // console.log(ev)
    this.props.padd(this.state.num)
  }
}

export default App6;