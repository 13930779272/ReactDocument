import React,{useState} from 'react'
function Hook(){
  const [num,setNum] = useState(100)
  // add = () => {
  //   setNum(num+1)
  // }
  return (
    <div>
      <h1>hooks</h1>
      <button onClick={() => setNum(num+1)}>{num}</button>
    </div>
  )
}
export default Hook