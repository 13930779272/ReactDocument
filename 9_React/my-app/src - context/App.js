import React, { Component } from 'react';
import MyContext from './context'
const {Consumer} = MyContext
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  // 定义一个contextType等与React.createContext()的返回值，然后在组件中通过this.context.xxx拿到数据
  // 无论有几层都能通过这种方式拿到数据
  static contextType = MyContext
  render() { 
    console.log(this.context)
    return (
      <div>
        <h1>App</h1>
        <h1>{this.context.num}</h1>
        <hr/>
        <ApA/>
      </div>
    );
  }
}


class ApA extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  // 
  static contextType = MyContext
  render() { 
    // console.log(this.context)
    return (
      <div>
        <h1>ApA</h1>
        {/* 通过Consumer拿到数据，val为穿的整个数据，用的较少 */}
        <Consumer>
          {
            (val) => {
              console.log(val)
              return (
                <p>{val.num}</p>
              )
            }
          }
        </Consumer>
      </div>
    );
  }
}
 
export default App;