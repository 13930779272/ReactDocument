import React from 'react';
import propTypes from 'prop-types'
class Num extends React.Component {
  static contextTypes = {
    num:propTypes.number
  }
  render() {
    return (
      <div>
        {this.context.num}
      </div>
    );
  }
}


class Btn extends React.Component {
  static contextTypes = {
    add:propTypes.func
  }
  render() {
    return (
      <div>
        <button onClick={() => {
          // console.log(this.context)
          this.context.add()
        }}>佳佳</button>
      </div>
    );
  }
}


class App extends React.Component {
  static childContextTypes = {
    num:propTypes.number,
    add:propTypes.func
  }
  getChildContext(){
    return {
      num:this.state.num,
      add:this.add
    }
  }
  state = {
    num:1
  }
  add  = () => {
    let n = this.state.num
    this.setState({
      num : ++n
    })
  }
  render() {
    return (
      <>
        <h2>传统的contextTypes</h2>
        计数器
        <Num></Num>
        <Btn></Btn>
      </>
    );
  }
}

export default App