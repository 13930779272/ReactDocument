import React, { Component } from 'react'
class NotPage extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div>
        <h1>您的页面走丢了</h1>
        <h2>请尝试刷新</h2>
      </div>
    );
  }
}
 
export default NotPage;