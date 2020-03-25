import React, { Component } from 'react';
import {connect} from 'react-redux'
import {actionCreators} from '../store/index'
class ChildCC extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const {add1,num,remove1} = this.props
    return (
      <div>
        <h1>子级的子级</h1>
        <hr/>
        <button onClick={remove1}>-</button>
        {num}
        <button onClick={add1}>+</button>
      </div>
    );
  }
}
export default connect((state) => ({num:state.r1.num}),actionCreators)(ChildCC)
// export default ChildCC;