import React, { useState } from 'react'
/*
 * React Hooks：创建REACT组件的新方式（给函数式组件提供各种钩子函数，让其也具备类组件中的一些特点）
 *    介于函数式组件和类组件之间，即能像函数式组件一样开发和渲染快，也能像类组件一样，有自己的状态和生命周期等 
 */
function App3(props) {
  // 属性初始化默认值
  let title = props.title || '小李是一个优秀的全栈攻城狮'
  //=>想在函数式组件中拥有状态和修改状态后重新渲染组件的方法
	// let [状态STATE,修改状态的方法SET-STATE]=useState(初始状态值);
	// SET-STATE(N) 把STATE修改成为N（重新渲染视图）
  let [supNum,setSupNum] = useState(0)
  let [oppNum,setOppNum] = useState(0)
  return (
    <div>
      <h2>hook useState</h2>
      <h4>{title} <span>N:{supNum + oppNum}</span> </h4>
      <p>支持人数：{supNum}</p>
      <p>反对人数：{oppNum}</p>
      <button onClick={ev => {
        setSupNum(supNum + 1);
      }}>支持</button>
      <button onClick={ev => {
        setOppNum(oppNum + 1);
      }}>反对</button>
    </div>
  )
}
export default App3;