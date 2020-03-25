import React, { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    }
  }
  render() { 
    // console.log(getState().num)
    const {getState,dispatch} = this.props.store
    console.log(getState().num)
    return (
      <div>
        <button onClick={()=>{dispatch({type:'INCREMENT'})}}>{getState().num}</button>
      </div>
    );
  }
  
}


export default App;