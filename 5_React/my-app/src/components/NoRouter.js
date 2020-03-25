import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
class NoRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() { 
    console.log(this.props)
    return (
      <div>
        <button>没有路由功能</button>
      </div>
    );
  }
}
// 没有路由功能的组件想要拿到路由的this.props功能就要用withRouter
export default withRouter(NoRouter);