import React, { Component } from 'react'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      num:1,
      ary:[1,2,3]
    }
  }
  render() {
    const {num,ary} = this.state
    return ( 
      <div>
        <h1>哈啊哈</h1>
        <hr/>
        <button onClick={this.add}>{num}</button>
        {/* {} 里面可以放表达式，注释，能够把数组扩展出来 */}
        <button>{ary}</button>
      </div>
    );
  }
  add = () => {
    console.log('num更新之前' + this.state.num)

    // 更新数据方式二 函数,函数必须return一个对象，
    // this.setState((prev) => ({
    //   num: ++ prev.num
    // }),() => {
    //   console.log('num更新之后' + this.state.num)
    // })

    this.setState((prev,props) => {
      console.log(props)
      return {
        num: ++ prev.num
      }
      
    },() => {
      console.log('num更新之后' + this.state.num)
    })


    // 更新数据方式一 对象
    // this.setState({
    //   num: ++ this.state.num 
    // },() => { // 更新数据之后的回调
    //   console.log('num更新之后' + this.state.num)
    // })
  }
}
 
export default App;