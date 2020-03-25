import React, { Component } from 'react'
import './条件渲染.css'
class App8 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show:true,
      cm:'red'
    }
  }
  render() { 
    const {show,cm} = this.state
    return (
      <div>
        <h1 style={{display:show?'block':'none'}} className={cm}>条件渲染</h1>
      </div>
    );
  }
}
 
export default App8;