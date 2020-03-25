import React, { Component } from 'react';
// import {connect} from 'react-redux';
import {connect} from '../react-redux/index'
import * as actions from '../react-redux/actios'
class ApA extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    console.log(this.props)
    const {num,add} = this.props
    return (
      <div>
        <h1>ApA</h1>
        <button onClick={add}>{num}</button>
      </div>
    );
  }
}
function mapstate(state){
  return state
}
// export default ApA;
export default connect(mapstate,actions)(ApA)