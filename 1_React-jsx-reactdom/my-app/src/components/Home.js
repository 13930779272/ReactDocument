import React, { Component } from 'react'

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      num:1,
      str:'React真心比Vue难一点',
      ary:[1,2,3,4]
    }
  }
  render() {
    let {num,str,ary} = this.state
    return (
      <div>
        <div>{num}</div>
        <div>{str}</div>
        <div>{ary}</div>
      </div>
    )
  }
}
