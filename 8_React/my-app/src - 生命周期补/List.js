import React, { Component } from 'react';
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const {ptxt} = this.props
    return (
      <li>{ptxt}</li>
    );
  }
}
 
export default List;