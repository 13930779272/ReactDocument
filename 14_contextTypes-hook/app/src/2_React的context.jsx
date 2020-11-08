import React from 'react';

/* 
 * 创建一个上下文对象 React.createContext()
 *   ThemeContext.Provider :祖先元素创建一个上下文组件注册上下文内容
 *   ThemeContext.Consumer :后代组件获取上下文内容进行消费
 */
// 创建上下文对象
let ThemeContext = React.createContext()

// 组件一代表数字
class Num extends React.Component {
  // 消费方法一上下文的内容放到this.context中了
  static contextType = ThemeContext
  render() {
    return (
      <div>
        {this.context.num}
      </div>
    );
  }
}

// 组件二代表按钮
class Btn extends React.Component {
  render() {
    return (
      // 消费方法二：使用Consumer组件消费，需要把子元素内容用函数包裹起来，context就是祖先中注册的上下文信息 context===value
      <ThemeContext.Consumer>
       {context => {
         return (
          <button onClick={() => {
            context.add()
          }}>佳佳</button>
         )
       }}
      </ThemeContext.Consumer>
    );
  }
}

// 父级组件
class App1 extends React.Component {
  state = {
    num:1
  }
  add  = () => {
    let n = this.state.num
    this.setState({
      num : ++n
    })
  }
  render() {
    return (
      <ThemeContext.Provider value={{
        num:this.state.num,
        add:this.add
      }}>
        <h2>React的contextTypes</h2>
        计数器
        <Num></Num>
        <Btn></Btn>
      </ThemeContext.Provider>
    );
  }
}

export default App1