import React, { Component } from 'react';
import ChildCC from './childCComponrnt'
class ChildC extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <h1>子级</h1>
        <hr/>
        <ChildCC/>
      </div>
     );
  }
}
 
export default ChildC;