import React, { Component } from 'react';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div>
        <button onClick={this.login}>点击登录</button>
      </div>
    );
  }
  login = () => { 
    console.log(1)
    // this.props.history.push('/')
    setTimeout(() => {
      sessionStorage.setItem('islogin','true')
      this.props.history.push('/');
    },1000)
    
  }
}
 
export default Login;