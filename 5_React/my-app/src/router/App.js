import React from 'react'
import '../components/1.css'
import list from './index'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div>{list}</div>
    );
  }
}
 
export default App;