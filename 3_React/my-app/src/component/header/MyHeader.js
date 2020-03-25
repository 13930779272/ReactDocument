import React, { Component } from 'react';
class MyHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val:''
    }
  }
  render() {
    let {val} = this.state
    return (
      <header className="header" >
        <h1>todos</h1>
        <input 
            className="new-todo" 
            placeholder="请输入内容"
            value={val}
            onChange={this.change}
            onKeyUp={this.add}
        />
      </header>
    );
  }
  add = (ev) => {
    let {val} = this.state
    const {paddList} = this.props
    if(ev.keyCode === 13){
      paddList(val)
      this.setState({val:''})
    }
   
  }
  change = (ev) => {
    this.setState({val:ev.target.value})
  }
}
 
export default MyHeader;