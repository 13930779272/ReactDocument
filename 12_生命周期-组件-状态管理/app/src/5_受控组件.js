import React from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';
/*
 * 我们把基于状态（或者属性）的更新来驱动视图渲染：“受控组件（受状态管控的组件）” 
 * 不管是vue和react的传进来的属性都是不能改的那么属性是什么时候能改的呢
 *  设置默认值、让父组件重新调取子组件传递不同的属性、把获取的属性赋值给组件的状态直接修改状态就可以
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
    // console.log('B')
    // console.log(this.props) // {title: "北京时间"}
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>{this.state.time}</p>
      </div>
    );
  }
  componentDidMount(){ // 第一次渲染完成时触发
    setInterval(_ => {
      this.setState({
        time: new Date().toLocaleString(),
      })
    },1000)
  }
}
 
export default App;
ReactDOM.render(
    <App title="北京时间"></App>,
  document.getElementById('root')
);