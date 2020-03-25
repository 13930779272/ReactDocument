import React, { Component } from 'react'
class App4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ary:[1,2,3,4],
      val:'',
      checkd:true
    }
  }
  render() {
    const {ary,val,checked} = this.state
    let list = ary.map((item,i) => <li key={i}>{item}</li>)
    return (
      <div>
        <button onClick={this.add}>按钮</button>
        <input type="text" value={val} onChange={this.change} />
        <input type="checkbox" checked={checked} onChange={this.check} />
        <ul>{list}</ul>
      </div>
    );
  }
  add = () => {
    const {ary,val} = this.state
    ary.push(val)
    this.setState({ary,val:''})
  }
  change = (ev) => {
    let {val} = this.state
    val = ev.target.value
    this.setState({val})
  }
  check = (ev) => {
    console.log(ev.target.checked)
    this.setState({checked:ev.target.checked})
  }
}
 
export default App4;