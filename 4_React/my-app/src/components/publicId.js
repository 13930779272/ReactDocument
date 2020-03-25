import React, { Component } from 'react';
class PublicId extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    console.log(this.props)
    return (
      <div>
        <h1>PublicId</h1>
      </div>
    );
  }
}
 
export default PublicId;