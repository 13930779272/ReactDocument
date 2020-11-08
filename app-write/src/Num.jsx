import React from 'react'
import { connect } from './store/my-react-redux'
function Num(props) {
  console.log(props)
  return <>
    {props.num}
  </>
}
/* 
 * 状态的基础写法mapStateToProps函数，接受所有的公共状态state为参数，这个函数的返回值为当前页面需要用到的状态也可以返回所有的状态，但是必须有返回值否则拿不到状态信息，
 我们也可以直接写到参数里一个箭头函数
 */
// function mapStateToProps(state){
//   console.log(state)
//   return state.app
// }


// export default connect(mapStateToProps)(Num)

export default connect(state => state.app)(Num)