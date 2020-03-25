import React, { Component } from 'react'
class App5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num:1,
      ary:[1,2,3,4]
    }
  }
  render() {
    const {ary,num} = this.state
    let list = ary.map((item,i) => <List key={i} txt={item} />)
    return (
      <div>
        <ul>{list}</ul>
        <hr/>
        {/* <A5Child pnum={num} pary={ary}/> */}
        <A5Child {...{pnum:num,pary:ary}} />
      </div>
    );
  }
}
// 函数声明组件
function List(props){
  return (<li>{props.txt}</li>)
}
// 类声明组件
class A5Child extends Component {
  constructor() {
    super();
    this.state = {  }
  }
  render() {
    const {pnum,pary} = this.props
    return (
      <div>
      <h1>子组件{pnum}</h1>
      </div>
    );
  }
}

// function A5Child({pnum,pary}){
//   return (
//   <h1>子组件{pnum}</h1>
//   )
// }

export default App5;