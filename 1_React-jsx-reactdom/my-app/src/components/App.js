import React,{Component} from 'react'
import Home from './Home'
class App extends Component{
  constructor(props){
    super(props)
    // 存放数据的
    this.state = {
      num:1,
      num2:2,
      obj:{
        name:'哈啊哈'
      },
      num3:''
    }
  }
  render(){
    const {num,num2,obj,num3} = this.state
    // console.log(num2)
    return (
      // 顶层只能放一个
      <>
        <div>{num}</div>
        <div>{num2}</div>
        <button onClick={this.add}>{num}</button>
        <div>{obj.name}</div>
        {num3}
        <input onInput={this.inp} type="text"/>
        <Home />
      </>
    )
  }
  add = (ev) => {
    console.log(ev.target)
    let {num} = this.state
    num ++
    this.setState({num})
  }
  inp = () => {
    let {num3} = this.state
    // num3 = ev.target.value
    this.setState({num3})
  }
  renderHome(obj){
    return <Home value={obj}/>
  }
}


export default App