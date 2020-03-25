import React, { Component } from 'react';
import PropTypes from 'prop-types'
/*
  1.引入prop-types
  2.在层级比较高的组件中定义一个childContextTypes的静态对象（这个对象上放的是需要传递的数据类型）
    static childContextTypes = {
        num:PropTypes.number，
        add:PropTypes.func
    }
  3.定义一个放具体数据的方法，返回一个对象
      getChildContext(){
          return {
              num:0,
              add:()=>{
                  ....
              }
          }
      }
  4.下级组件取数据或者方法
      1.在下级组件中定制一个contextTypes的对象（要什么数据就把这个数据的名字和类型定义好）
          static contextTypes = {
              num:PropTypes.number,
              add:PropTypes.func
          }
      2.下级组件就可以通过
          this.context.xxx
*/
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num:1,
    }
  }
  // 申明数据的类型
  static childContextTypes = {
    num:PropTypes.number,
    add:PropTypes.func
  }
  // 定义具体的数据
  getChildContext(){
    return {
      num:this.state.num,
      add:() =>{
        this.setState((prev) => ({num:++prev.num}))
      }
    }
  }
  render() {
    return (
      <div>
        <h1>App</h1>
        <hr/>
        <AppChild/>
      </div>
    );
  }
  
}
class AppChild extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    }
  }
  // static contextTypes = {
  //   num:PropTypes.number
  // }
  render() {
    return (
      <div>
        <h1>AppChild</h1>
        {/* {this.context.num} */}
        <hr/>
        <AppChildC1/>
        <AppChildC2/>
      </div>
    );
  }
  
}
class AppChildC1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    }
  }
  static contextTypes = {
    num:PropTypes.number,
    add:PropTypes.func
  }
  render() {
    return (
      <div>
        <h1>AppChildC1</h1>
        <button onClick={this.context.add}>{this.context.num}</button>
      </div>
    );
  }
  
}
class AppChildC2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    }
  }
  static contextTypes = {
    num:PropTypes.number
  }
  render() {
    return (
      <div>
        <h1>AppChildC2</h1>
        {this.context.num}
      </div>
    );
  }
  
}

export default App;