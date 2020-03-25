import React, { Component } from 'react';
import routerList from './index'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    return (
      <div>
        {routerList}
      </div>
    );
  }
}
 
export default App;