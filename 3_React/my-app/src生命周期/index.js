import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';

class Papp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pnum:1,
      val:'改变VAL',
      hasChild:true
    }
  }
  render() {
    const {hasChild} = this.state
    return (
      <div>
        <h1>父级{this.state.pnum}</h1>
        <button onClick={this.add}>{this.state.pnum}</button>
        <button onClick={this.re}>{this.state.val}</button>
        <button onClick={this.move}>销毁子组件</button>
        <hr/>
        {hasChild?<App pnum={this.state.pnum} /> :null}
      </div>
    );
  }
  add= () => {
    this.setState({pnum: ++ this.state.pnum})
  }
  re = () => {
    this.setState({val:'VAL已变'})
  }
  move= () =>  {
    this.setState({hasChild:false})
  }
}
 

ReactDOM.render(<Papp />, document.getElementById('root'));