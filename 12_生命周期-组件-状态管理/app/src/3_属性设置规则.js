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
    // 初始化状态要求后期需要在组件中使用的状态都要在这里初始化一下
    this.state = {
      time:new Date().toLocaleString()
    }
  }
  // 必须要有RENDER函数，它返回的内容是我们当前组件要渲染的视图
  render() {
    console.log(this.props) // {title: "北京时间"}
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>{this.state.time}</p>
      </div>
    );
  }
}
 
export default App;
ReactDOM.render(
    <App title="北京时间"></App>,
  document.getElementById('root')
);