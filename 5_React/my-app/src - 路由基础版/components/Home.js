import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import NoRouter from './NoRouter'
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() { 
    return (
      <div>
        <h1>Home</h1>
        <hr/>
        <Link to="/about"><button>关于</button></Link>
        <Link to="/login"><button>登录</button></Link>
        <button onClick={this.logout}>推出登录</button>
        <NoRouter/>
      </div>
    );
  }
  logout = () => {
    sessionStorage.clear()
    this.props.history.push('/login')
  }
}
 
export default Home;