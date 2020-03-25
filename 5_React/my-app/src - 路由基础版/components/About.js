import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ary:[
        {
          id:1,
          name:'难念的经'
        },
        {
          id:2,
          name:'太想爱你'
        }
      ]
    }
  }
  render() {
    const {ary} = this.state
    // 生成一堆列表，并且把id带到link上，其实也就是说把要传的数据绑到了link上，当点击link的时候就把数据带到了相关联的页面中
    let list = ary.map(item => <Link {...{
      key:item.id,
      to:{
        pathname:'/about/'+ item.id
      }
    }}><li>{item.name}</li></Link>)
    return (
      <div>
        <h1>About</h1>
        <hr/>
        <Link to="/"><button>首页</button></Link>
        <ul>{list}</ul>
      </div>
    );
  }
}
 
export default About;