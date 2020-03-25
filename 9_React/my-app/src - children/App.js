import React,{Component} from 'react'
/* 
  如果子组件用的是双标签，可以在标签内传递数据，子组件通过this.props.children拿到双标签内的数据
*/
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
        <ApA>
          <div>11111111</div>
        </ApA>
      </div>
    );
  }
}

class ApA extends Component{
  constructor(props){
    super(props)
    this.state = {}
  }
  render(){
    console.log(this.props.children)
    let html = (
      <div>请输入内容</div>
    )
    if(this.props.children){
      html = this.props.children
    }
    return (
      <div>
        <h1>ApA</h1>
        {html}
      </div>
    )
  }
}
export default App;