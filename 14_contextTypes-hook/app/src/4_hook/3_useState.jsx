import React, { useState } from 'react'
/*
 * React Hooks：创建REACT组件的新方式（给函数式组件提供各种钩子函数，让其也具备类组件中的一些特点）
 *    介于函数式组件和类组件之间，即能像函数式组件一样开发和渲染快，也能像类组件一样，有自己的状态和生命周期等 
 */


/* let state;
function useState(initialState) {
	!state ? state = initialState : null;
	function dispatchAction(new_state) {
		state = new_state;
		//=>render
	}
	return [state, dispatchAction];
} */


function App5(props) {
  // 属性初始化默认值
  let title = props.title || '小李是一个优秀的全栈攻城狮'
  // 在一次 useState() 调用中传入一个包含了所有 state 的对象,initialState设置成为函数，可以保证每一次组件重新渲染的时候，无需在重新初始化状态了 =>惰性初始化
  let [state,setState] = useState(function(){
    return {
      supNum:0,
      oppNum:0
    }
  })
  let {supNum,oppNum} = state
  return (
    <div>
      <h2>hook useState</h2>
      <h4>{title} <span>N:{supNum + oppNum}</span> </h4>
      <p>支持人数：{supNum}</p>
      <p>反对人数：{oppNum}</p>
      <button onClick={ev => {
        setState({
          // 展开 「...state」 以确保我们没有 「丢失」 这个对象的其他数据
          ...state,
          supNum:supNum + 1
        });
      }}>支持</button>
      <button onClick={ev => {
        setState({
          ...state,
          oppNum:oppNum + 1
        });
      }}>反对</button>
    </div>
  )
}
export default App5;