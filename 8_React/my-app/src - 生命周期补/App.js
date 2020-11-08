import React, { Component } from 'react';
import List from './List'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ary:[1,2,3,4],
      val:''
    }
  }
  render() { 
    const {ary,val} = this.state
    return (
      <div>
        <h1>App</h1>
        <hr/>
        <input type="text"
          value={val}
          onChange={this.change}
          onKeyUp={this.onkeyup}
        />
        <Main pary={ary}/>
      </div>
    );
  }
  change = (ev) => {
    this.setState({val:ev.target.value})
  }
  onkeyup = (ev) => {
    const {ary,val} = this.state
    if(ev.keyCode === 13){
      let newAry = [...ary]
      newAry.push(val)
      this.setState({ary:newAry,val:''})
    }
    
  }
}
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  // 当父级的数据变化会触发这个钩子,组件初始化时不调用，组件接受新的props时调用。
  componentWillReceiveProps(nextProps){
    console.log(nextProps)
  }
  // 当数据变化时就会触发，不管是父级的数据还是自己的数据，对于性能优化重要，参数为新的数据
  /* 
   * 当需要用到这个钩子判断是否渲染的时候，要给新数据赋值一个新地址才能拿到新的数据和老的数据
   * 如果要使用这个生命周期，在修改数据状态的时候，需要修改数据引用类型的地址
   */
  shouldComponentUpdate(nextProps, nextState){
    console.log(this.props.pary,'老数据')
    console.log(nextProps.pary,'新数据')
    if(this.props.pary.length === nextProps.pary.length){
      return false
    }
    return true
  }
  render() { 
    console.log('render')
    const {pary} = this.props
    return (
      <div>
        <ul>
          {
            pary.map((item,i) => <List key={i} ptxt={item}  />)
          }
        </ul>
      </div>
    );
  }
}

export default App;