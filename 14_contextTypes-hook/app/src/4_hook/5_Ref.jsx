import React,{createRef , useEffect,useRef,useState} from "react"
let prev = null,
prev1 = null;
function App7(props){
  let inputRef = createRef()
  let inputRef1 = useRef()
  // console.log(inputRef)
  /* 
   * createRef:
   *   inputRef = {current: 存的是对应的DOM元素}
   *   初始化的时候为null
   *   渲染的时候会识别 ref={inputRef} 把对应的DOM元素赋值给current 渲染完成后通过 inputRef.current可以拿到对应的DOM元素
   *   组件每次重新渲染都会创建一个新的createRef对象
   * useRef与createRef的区别：
   *   createRef每次重新渲染的时候，都会创建一个全新的createRef对象
   *   useRef在第一次渲染的时候创建一个useRef对象，当重新渲染的时候，发现已经创建了这个对象就不再重新创建了，有利于性能优化
   */
  useEffect(() => {
    console.log(inputRef) // {current: input}
  },[])
  let [num, setNum] = useState(0)
  let [num1, setNum1] = useState(0)
  return (
    <div>
      <input type="text" ref={inputRef} value="createRef" />
      <input type="text" ref={inputRef1} value="useRef" />
      <button onClick={(ev) => {
        inputRef.current.focus()
        inputRef.current.select()
        setNum({
          num:++num
        })
        // 一直是false，因为每次都会重新创建
        console.log(prev === inputRef)
        prev = inputRef
      }}>点击聚焦createRef</button>
      <button onClick={(ev) => {
        inputRef1.current.focus()
        inputRef1.current.select()
        setNum1({
          num1:++num1
        })
        // 第一次输出false，后边都是true，因为第一次创建好了之后就不再重新创建
        console.log(prev1 === inputRef1)
        prev1 = inputRef1
      }}>点击聚焦useRef</button>
    </div>
  )
}
export default App7