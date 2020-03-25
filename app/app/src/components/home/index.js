import React, { Component } from 'react';
class Home extends Component {
  constructor(props) {
    console.log(props)
    super(props);
    this.state = {
      // val:''
    }
  }
  render() { 
    console.log(this.props)
    // let {val} = this.state
    return (
      <div>
        <input type="text" onChange={e=>{this.change(e,1)}}/>
      </div>
    );
  }
  change = (ev,a) => {
    console.log(ev.target.value,a)
    ev.returnValue = false
  }
}
 
export default Home;