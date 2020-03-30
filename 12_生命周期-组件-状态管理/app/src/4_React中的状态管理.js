import React from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';
/*
 * 对于一个类组件：
 *   1.数据管控（MODEL）
 * 	   属性 PROPS
 *     状态 STATE（私有状态，REDUX公共状态管理） 
 * 
 * 基于第三方插件prop-types设置属性的规则：默认值和其它规则
 * 	 $ yarn add prop-types
 * 设置默认值
 * 	 static defaultProps={
 * 		xxx:xxx
 *   }
 * 设置一些其它规则
 * 	 https://github.com/facebook/prop-types
 *   static propTypes = {
 *		title: PropTypes.string.isRequired
 *	 }
 *   PropTypes.isRequired 必须传递
 *   PropTypes.string/bool/number/func/object/symbol/node（元素对象）/element（JSX元素）/instanceOf(Xxx)必须是某个类的实例/oneOf(['News', 'Photos'])多个中的一个/
 *   oneOfType([PropTypes.string,PropTypes.number,PropTypes.instanceOf(Message)])多个类型中的一个
 *   customArrayProp:自定义某些规则
 * 和VUE一样， title={10} 此时传的是一个数字10虽然不符合规则会报错但是不会影响渲染
 */

class App extends React.Component {
  // 设置属性的默认值
  static defaultProps = { 
    title:'北京时间'
  }
  // 设置一些其他规则
  static propTypes = {
    title:propTypes.string
  }
  constructor(props) {
    super(props) // 把props传入到super中就可以通过this.props拿到了
    console.log(props) // {title: "北京时间"}
    console.log(this.props) // {title: "北京时间"}
    this.state = {
      time: new Date().toLocaleString(),
      num:100
    }
  }
  // 必须要有RENDER函数，它返回的内容是我们当前组件要渲染的视图
  render() {
    console.log('B')
    console.log(this.props) // {title: "北京时间"}
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>{this.state.time}</p>
      </div>
    );
  }
  componentDidMount(){ // 第一次渲染完成时触发
    // this.state.time = '哈哈' // 这样确实可以修改状态信息，但是不会通知组件重新渲染视图不会改变
    // console.log(this.state) // {time: "哈哈"}

    /* 
     * 每一次修改状态应该基于：setState方法（相对于this.state.xxx=xxx来说，不仅更改了状态，还会通知视图重新渲染）
     * setState参数：
     *  1.partialState：部分状态（对象），我们初始化的状态有很多，想修改谁，这块只写谁即可（REACT内部是把之前的状态和传递的partialState进行合并替换的）
     *  Object.assign(this.state,partialState)
     *  2.callback：setState在某些情况下是异步操作，此回调函数代表，通知视图重新渲染完成后执行的回调
     */
    
    setTimeout(() => { // 可以看到先显示时间，再显示'haha'
      this.setState({
        time:'haha'
      },_ => { // 视图渲染完成后的回调函数
        console.log("C")
      })
    }, 1000)
    console.log('A') // 通过打印可以看出setState是异步的输出顺序为 B(第一次渲染执行的render) A B


    /* 
     * forceUpdate强制更新
     */
    this.state.time = '哈哈'
    this.forceUpdate() // 视图也会更新，所以说setState做了两件事更新状态的同时，通知视图更新，这个方法并不常用
  }
}
 
export default App;
ReactDOM.render(
    <App title="北京时间"></App>,
  document.getElementById('root')
);