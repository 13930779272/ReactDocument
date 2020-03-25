import React, { Component } from 'react'
class App3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ary:[1,2,3,4]
    }
  }
  render() {
    const {ary} = this.state
    let list = ary.map((item,i) => <li key={i}>{item}</li>)
    return (
      <div>
        <input type="text" ref="txt"/>
        <button onClick={this.add}>发送</button>
        {/* <ul>{list}</ul> */}
        <ul>{ary.map((item,i) => <li key={i}>{item}</li>)}</ul>
      </div>
    );
  }
  add = () => {
    const {ary} = this.state
    // ary.push(this.refs.txt.value)
    // this.setState({ary})

    ary.push(this.refs.txt.value)
    this.setState({})
  }
}
 
export default App3;