import React, { Component } from 'react';
import {connect} from 'react-redux'
import *  as actions from './actions'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    console.log(this.props)
    const {num,add,asyncadd,remove,asyncremove} = this.props
    return (
      <div>
        <h1>App</h1>
        <button onClick={add}>{num}</button>
        <button onClick={asyncadd}>异步+{num}</button>
        <button onClick={remove}>{num}</button>
        <button onClick={asyncremove}>异步-{num}</button>
      </div>
    );
  }
}
export default connect(state=>state,actions)(App)
// export default App;