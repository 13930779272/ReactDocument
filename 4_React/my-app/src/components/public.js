import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Public extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    console.log(this.props)
    return (
      <div>
        <Link
         to={{
           pathname:'/',
           search:"?to=public"
         }}
        >
          <button>公共页去首页</button>
        </Link>
        <div>
          Public
          <hr/>
          <Link
            to="/public/1"
          >
            <button>第一个ID</button>
          </Link>
          <Link
            to="/public/2"
          >
            <button>第二个ID</button>
          </Link>
          <Link
            to="/public/3"
          >
            <button>第三个ID</button>
          </Link>
        </div>
      </div>
    );
  }
}
 
export default Public ;