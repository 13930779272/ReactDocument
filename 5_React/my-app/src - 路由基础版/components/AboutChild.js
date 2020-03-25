import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class AboutChild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:''
    }
  }
  componentDidMount(){
    const {match:{params}} = this.props
    let obj = {
      1:'难念的经.mp3',
      2:'太想爱你.mp3'
    }
    setTimeout(() => {
      this.setState({txt:obj[params.id]})
    },1000)
    
  }
  render() {
    const {match:{params}} = this.props
    return (
      <div>
        <h1>歌曲{params.id}</h1>
        <Link to="/"><button>首页</button></Link>
        <Link to="/about"><button>关于</button></Link>
        <hr/>
        {this.state.txt}加载完成
      </div>
    );
  }
}
 
export default AboutChild;