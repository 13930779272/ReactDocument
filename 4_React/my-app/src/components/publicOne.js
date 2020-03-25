import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class PublicOne extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div>
        <h1>PublicOne</h1>
        <Link
          to={{
            pathname:'/public',
            state:{
              id:1
            }
          }}
        >
          <button>公共1去公共</button>
        </Link>
      </div>
    );
  }
}
 
export default PublicOne;