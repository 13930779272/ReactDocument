import React, { useState ,useEffect} from 'react'


// useEffectu原理：
/* let prev = [];
function useEffect(callback, dependencyList) {
	let flag = (dependencyList && dependencyList.length > 0) ? dependencyList.some((item, index) => {
		return item !== prev[index];
	}) : (prev.length === 0 ? true : false);

	if (!dependencyList || flag) {
		callback();
		prev = dependencyList.length === 0 ? ["@@@"] : dependencyList;
	}
} */

function App6(props) {
  // 属性初始化默认值
  let title = props.title || '小李是一个优秀的全栈攻城狮'
  // 在一次 useState() 调用中传入一个包含了所有 state 的对象,initialState设置成为函数，可以保证每一次组件重新渲染的时候，无需在重新初始化状态了 =>惰性初始化(重新渲染不再进行初始化)
  let [state,setState] = useState(function(){
    return {
      supNum:0,
      oppNum:0
    }
  })
  let {supNum,oppNum} = state

  // 当没传第二个参数时，每一次渲染完（不管第一次或者重新渲染）都会触发执行 <=> componentDidMount/componentDidUpdate
  // useEffect(() => {
  //   console.log('useEffect执行了')
  // })

  // 当传了第二个参数，并且配置了依赖项，第一次渲染会触发依赖项的状态改变时也会触发，当配置多个依赖项只要有一项变化也会触发
  // useEffect(() => {
  //   console.log('supNum改变的useEffect')
  // },[supNum])


  // 如果传递的是空数组，则只有第一次渲染完成后执行 =>componentDidMount
  useEffect(() => {
    console.log('没有依赖项触发useEffect')
  },[])

  return (
    <div>
      <h2>hook useEffect</h2>
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
export default App6;