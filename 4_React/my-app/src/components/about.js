import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div>
        <h1>About</h1>
        <hr/>
        <Link
          to={{
            pathname:'/',
            search:'?to=about'
          }}
        >
          <button>关于页去首页</button>
        </Link>
      </div>
    );
  }
}
 
export default About;