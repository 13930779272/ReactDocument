import React from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';
/*
 * React的生命周期
 *  1.处理属性（获取默认值，校验属性传递类型）
 *  // 第一步与第二部之间还有处理上下文这一步
 *  2.处理constructor获取初始的状态信息
 *  3.componentWillMount
 *  4.render
 *  5.componentDidMount
 *  第一次渲染执行到5结束
 *  数据更新之后触发的顺序为
 *  shouleComponentUpdate
 *  componentWillUpdate
 *  render
 *  componentDidUpdate
 *  componentWillUnmount 组件卸载之前，没有组件卸载之后这个生命周期，卸载指的是状态数据等不再改变
 *  
 *  
 */

class App extends React.Component {
  //=> 1.处理属性（获取默认值，校验属性传递类型）
  // 设置属性的默认值
  static defaultProps = { 
    title:'北京时间'
  }
  // 设置一些其他规则
  static propTypes = {
    title:propTypes.string
  }
  //=>2.处理状态
  constructor(props) {
    super(props)
    // 在这可以拿到默认的数据说明constructor之前就执行了属性的校验和处理
    console.log(props,'=====>constructor')
    this.state = {
      num:1
    }
  }
  //=>3.第一次渲染组件之前
  componentWillMount(){
    //=>此时已经有实例了，通常在这从服务区获取数据，把获取的数据重新赋值给状态或者存放到REDUX中
    console.log('=====>componentWillMount')
  }
  //=>4.视图渲染的第一次或者重新渲染
  render() {
    console.log('=====>render')
    return (
      <div>
        <h2>{this.props.title}</h2>
        <div onClick={() => {
          this.setState({
            num: ++this.state.num
          })
        }}>{this.state.num}</div>
      </div>
    );
  }
  //=>5. 第一次渲染完成，只要组件不销毁5（包括5）之前的(react)只执行一次
  componentDidMount(){
    console.log('=====>componentDidMount')
  }
  //=>状态更新后触发的生命周期
  //=>1.是否应该更新组件
  shouldComponentUpdate(nextProps,nextState){
    /* 
     * 当我们执行setState等操作，首先执行的是当前的钩子函数
     * this.state是当前的状态，nextState是修改后的状态
     */
    console.log('=====>shouldComponentUpdate',this.props,this.state,nextProps,nextState)
    console.log(this.state.num === nextState.num)
    return true
  }
  componentWillUpdate(){ // 数据更新之前
    console.log('=====>componentWillUpdate')
  }
  // 数据更新之前跟之后之间还会调用render
  componentDidUpdate(){ // 数据更新之后
    console.log('=====>componentUpdate')
  }
}
 
export default App;
ReactDOM.render(
    <App></App>,
  document.getElementById('root')
);