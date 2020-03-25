import React, { Component } from 'react';
import Hook from './hooks'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num:11
    }
  }
  render() { 
    document.title = 'hahaha'
    const {num} = this.state
    return (
      <div>
        <h1>app</h1>
        <button onClick={this.add}>{num}</button>
        <hr/>
        <Hook></Hook>
      </div>
      
    );
  }
  add = () => {
    let {num} = this.state
    num ++
    setTimeout(() => {
        this.setState({num})
      console.log(this.state.num) // 在这里打印中可以看出数据更新是伪异步的
    })
  
  }
}
 
export default App;