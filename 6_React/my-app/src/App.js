import React, { Component } from 'react';
import ChildC from './components/childComponent'
import {actionCreators} from './store/index'
// react的redux redux和react-redux都得引入
import {connect} from 'react-redux'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    console.log(this.props)
    const {num,add,remove} = this.props
    return (
      <div>
        <h1>app</h1>
        <button onClick={remove}>-</button>
        {num}
        <button onClick={add}>+</button>
        <hr/>
        <ChildC/>
      </div>
    );
  }
}
// mapDispatchToProps和mapStateToProps返回的对象会在this.props中显示，connect都会在this.props中显示
// mapStateToProps返回的对象会在this.props中显示
const mapStateToProps = (state) => {
  // return {num:state.r.num}
  // 必须返回一个对象
  return state
}
// 优化dispatch的方法，我们引了自己的actionCreators所以直接放actionCreators就行
// const mapDispatchToProps = () => {
//   return actionCreators
// }
// connect的导出方式后面放的是相应的组件
export default connect(mapStateToProps,actionCreators)(App)
// export default App;