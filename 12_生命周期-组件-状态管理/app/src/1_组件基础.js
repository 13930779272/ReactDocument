import React from 'react';
import ReactDOM from 'react-dom';
/*
 * 函数式组件（静态组件）：
 *   简单：开发维护简单，渲染也简单（渲染速度快）
 *   静态：只要把组件调取渲染完后，组件中的内容将不再修改（函数式组件中没有自己的状态管控、生命周期等）
 * 
 * 组件特点：给组件传递进来的属性是只读的（只能获取不能修改）报错信息： Cannot assign to read only property 'title' of object
 * 	1.不能直接的赋值默认值
 *    =>props.title = props.title || "我是标题";  （错误的）
 *    =>let title = props.title || "我是标题";    （可以的）
 *  2.函数式组件不能像类组件一样，基于prop-types给属性设置默认的规则
 */
// function App(props){
//   console.log(props) // 父级传进来的属性
//   // props.title = 'hahah'
//   let d = new Date().toLocaleString()
//   return (
//     <div>
//       <h2>{props.title}</h2>
//       <p>{d}</p>
//     </div>
//   )
// }


/*
 * 类组件：class Xxx extends React.Component/React.PureComponent
 *   当REACT-DOM.RENDER渲染的时候，如果发现虚拟DOM中TYPE是一个类组件，会创建这个类的一实例，并且把解析出来的PROPS传递给这个类：new Clock(props)
 *   =>先执行CONSTRUCTOR（此时PROPS并未挂载到实例上，基于THIS.PROPS不能获取到值，但是可以直接使用形参中的PROPS；解决方法：SUPER(PROPS)这样在CONSTRUCTOR中也可以用THIS.PROPS了）
 *   =>当CONSTRUCTOR执行完，REACT会帮我们继续处理
 *     ->把PROPS/CONTEXT...挂载到实例上（后期在其它的钩子函数中可以基于THIS.PROPS获取传递的属性值）
 * 	   ->REACT帮我们把RENDER方法执行
 */

class App extends React.Component {
  constructor(props) {
    // super();
    // console.log(props) // 可以拿到props {title: "北京时间"}
    // console.log(this.props) // undefined 不可以通过this.props拿到属性


    // 看源码可以看出SUPER执行，相当于把React.Component当做普通函数执行，让方法中的THIS是当前实例 this=>{props:xxx,context:xxx,refs:{},updater:{...}}
    super(props) // 把props传入到super中就可以通过this.props拿到了
    console.log(props) // {title: "北京时间"}
    console.log(this.props) // {title: "北京时间"}
    this.state = {  }
  }
  // 必须要有RENDER函数，它返回的内容是我们当前组件要渲染的视图
  render() {
    console.log(this.props) // {title: "北京时间"}
    return (
      <div></div>
    );
  }
}
 
export default App;
ReactDOM.render(
    <App title="北京时间"></App>,
  document.getElementById('root')
);