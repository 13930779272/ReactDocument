import React, { Component } from 'react'
import './布局/css/index.css'
import MyHeader from './header/MyHeader'
import MyMain from './body/MyMain'
import MyFooter from './footer/MyFooter'
class App extends Component {
  constructor(props) {
    super(props);
    let hash = window.location.hash?window.location.hash.slice(1):'/all';
    this.state = {
      hash,
      ary:[
        {
          id:0,
          txt:'禁止使用野生动物',
          checked:false
        },
        {
          id:1,
          txt:'不要随便返京',
          checked:false
        },
        {
          id:2,
          txt:'半夜记得翻墙进小区',
          checked:true
        }
      ]
    }
  }
  rehash = (hash) => {
    this.setState({hash:hash})
  }
  render() {
    const {ary,hash} = this.state
    // console.log(ary)
    let fotter = null
    if(ary.length){
      fotter =  <MyFooter 
        num={ary.filter(item => !item.checked).length}
        hash={hash}
        rehash={this.rehash}
      />
    }
    let newAry = ary.filter(item => {
      switch(hash){
        case "/all":
          return item
        case "/unchecked":
          return !item.checked
        case "/checked":
          return item.checked
        default :
          return item
      }
    })
    return (
      <section className="todoapp">
        <div>
          <MyHeader paddList={this.addList} />
          <MyMain ary={newAry} pchecked={this.changeChecked} premoveList={this.removeList} retxt={this.retxt} />
          {fotter}
        </div>
      </section>
      
    );
  }
  changeChecked=(id)=>{
    let {ary} = this.state
    ary.forEach(item => {
      if(item.id === id){
        item.checked = !item.checked
      }
    })
    this.setState({ary})
  }
  addList = (val) => {
    let {ary} = this.state
    ary.push({
      id:Date.now(),
      txt:val,
      checked:false,
    })
    this.setState({ary})
  }
  removeList = (id) => {
    let {ary} = this.state
    ary = ary.filter(item => item.id !== id)
    this.setState({ary})
  }

  retxt = (id,newVal) => {
    // console.log('执行了')
    let {ary} = this.state
    ary.forEach(item => {
      if(item.id === id){
        item.txt = newVal
      }
    })
    this.setState({ary})
  }
}
 
export default App;