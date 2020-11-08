import React, { Component } from 'react';
import {Link,withRouter} from 'react-router-dom'
class Nav extends Component {
  render() {
    console.log('=====>',this.props)
    return (
      <header>
        <Link to='/home' >
          <button>主页</button>
        </Link>
        <Link to='/about'>
          <button>关于</button>
        </Link>
        <Link to='/custom'>
          <button>客户</button>
        </Link>
      </header>
    );
  }
}
/*
 * Nav本身不受路由管控，默认属性中没有history/location等内容
 *   想让其变为受路由管控的，或者想要这些属性，只需要基于react-router-dom中的withRouter高阶组件代理一下即可
 * 用withRouter代理的组件必须在HashRouter或者BrowserRouter中
 */
export default withRouter(Nav);