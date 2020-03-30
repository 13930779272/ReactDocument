import React from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';
/*
 * 非受控组件：不受状态管控直接操作DOM
 *  
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
    super(props)
  }
  // 必须要有RENDER函数，它返回的内容是我们当前组件要渲染的视图
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        {/* <p ref="time">{new Date().toLocaleString()}</p> */}
        <p ref={ele => {
          // ref在项目中应用最多的是函数模式，参数代表当前元素对象
          console.log(ele)
          this.time = ele // 直接把元素对象挂载到当前的实例上了
        }}>{new Date().toLocaleString()}</p>
      </div>
    );
  }
  componentDidMount(){ // 第一次渲染完成获取DOM元素

    console.log(this.refs)  // 是一个对象里边是对应的标签，如果ref函数模式就没有
    setInterval(() => { // 直接操作DOM进行数据视图的更新

      // ref获取
      // this.refs.time.innerHTML = new Date().toLocaleString()

      // 从当前的实例上获取
      this.time.innerHTML = new Date().toLocaleString()
      
    }, 1000);
  }
}
 
export default App;
ReactDOM.render(
    <App title="北京时间"></App>,
  document.getElementById('root')
);