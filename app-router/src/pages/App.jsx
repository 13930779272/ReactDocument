import React, { Component } from 'react';
import {HashRouter,BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Error from './404'
import Nav from './Nav'
import Custom from './Custom'
class App extends Component {
  render() { 
    return (
      <>
          {/* 
            * HashRouter:hash路由容器 
            * Router用来设置路由规则的 
            * 路由特点：
            *   不管当前路由规则是否匹配，依然会向下匹配查找，但是我们期望的是有一条匹配后不再向下查找（像vue一样）
            *   默认路由匹配的规则是不精准也不严格的，我们可以给规则上设置 exact（精准匹配） strict（严格匹配）
            * Redirect：实现路由重定向
            */}
          <HashRouter>
            <Nav/>
            <Switch>
              {/* <Route  path='/' exact component={Home} /> */}
              <Redirect from='/' exact to='/home' />
              <Route path='/home'  component={Home} />
              <Route path='/about' exact component={About} />
              <Route path='/custom' component={Custom}/>
              {/* 以上规则都不符合就去/ */}
              {/* <Redirect to='/' /> */}
              {/* 404页面 */}
              <Route path="*" component={Error}/>
            </Switch>
          </HashRouter>
        
      </>
    );
  }
}
 
export default App;