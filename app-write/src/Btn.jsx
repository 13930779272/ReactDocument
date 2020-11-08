import React from 'react'
import {connect} from './store/my-react-redux'
import actions from './store/actions'
console.log(actions)
class Btn extends React.Component {
  render() { 
    console.log('组件Btn重新渲染了')
    console.log(this.props)
    return (
      <>
        <button onClick={this.props.changeN}>+</button>
      </>
    );
  }
}
/* 
 * 基础写法用mapDispatchToProps函数进行行为派发，这个函数接受dispatch为参数return的值为一个对象，对象里是派发响应行为的函数用dispatch进行派发然后就在相应的组件里的属性props里拿到这个函数
 再执行然后触发相应的行为，但是react-redux给我们
 */
// function mapDispatchToProps(dispatch){
//   return {
//     changeN(){
//       return dispatch(actions.appAction.changeN())
//     }
//   }
// }

// 用不到公共状态可以传一个null，reducer用到哪些传哪些
export default connect(null,actions.appAction)(Btn);