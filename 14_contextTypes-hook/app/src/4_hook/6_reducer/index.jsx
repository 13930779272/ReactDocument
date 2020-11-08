import React, { createRef, useEffect, useRef, useState, useReducer } from "react"
// 导入reducer
import {initailState,reducer} from './Reducer'
console.log()
function App8(props) {
  let [state, dispatch] = useReducer(reducer, initailState)
  // debugger
  console.log(state)
  let { n, m } = state,
    total = parseFloat(n) + parseFloat(m);
  total = isNaN(total) ? 0 : total

  return (
    <div>
      <input type="text" value={n} onChange={ev => {
        dispatch({
          type: 'CHANGE-N',
          payload: ev.target.value
        })
      }} />+
      <input type="text" value={m} onChange={ev => {
        dispatch({
          type: 'CHANGE-M',
          payload: ev.target.value
        })
      }} />=
      <span>{total}</span>
    </div>
  )
}
export default App8

