import React, { Component } from 'react';
import {actionCreators} from './store/index'
const {add,remove,add1,remove1} = actionCreators
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    console.log(this.props)
    let {r,r1} = this.props
    return (
      <div>
        <button onClick={remove}>-</button>
        <span>{r.num}</span>
        <button onClick={add}>+</button>
        <hr/>
        <button onClick={remove1}>-</button>
        <span>{r1.num}</span>
        <button onClick={add1}>+</button>
      </div>
    );
  }
}
 
export default App;