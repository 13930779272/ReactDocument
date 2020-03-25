import React, { Component } from 'react';
import ApA from './components/ApA'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div>
        <h1>App</h1>
        <hr/>
        <ApA/>
      </div>
    );
  }
}
 
export default App;