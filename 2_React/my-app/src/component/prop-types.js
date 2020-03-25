import React, { Component } from 'react'
class App7 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num:'1'
    }
  }
  render() { 
    const {num} = this.state
    return (
      <div>
        <h1>父组件</h1>
        <hr/>
        <A7Child pnum={num} />
      </div>
    );
  }
}

class A7Child extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() { 
    const {pnum} = this.props
    // 条件渲染
    if(typeof pnum === 'number'){
      return (
        <div>
          <h1>子组件_数字版{pnum}</h1>
        </div>
      );
    }else if(typeof pnum === 'string'){
      return (
        <div>
          <h1>子组件_字符串版{pnum}</h1>
        </div>
      );
    }
    
  }
}
 

export default App7;