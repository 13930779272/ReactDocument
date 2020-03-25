import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router
} from 'react-router-dom'

import App from './App'
/* 
  BrowserRouter:代表history路由，必须放在根下且只有一个

  Route:配置项放到Router下边
    写法一：
      <Route path="/">
        <App/>
      </Route>
    写法二
      <Route path="/" component={App} />
      <Route path="/home" component={Home} />

  react路由有一个特性
    path="/"
    path="/home"
    当访问 /home是 /和/home都会出来

  Switch:
    从上往下只匹配一个组件，匹配到下面的路由就不匹配了

  如果你想/one不匹配/,那么可以使用exact

    <Route path="/" exact />
    <Route path="/one" />

  exact
    /one	/one/two	true	no
    /one	/one/two	false	yes

  当设置/one/ 访问/one能匹配，/one/也能匹配

  需要是当访问/one匹配不到 /one/

  这个时候就加上 strict

      <Route path="/one/" strict />
      <Route path="/one/two" />

  但是如果给path="/one/"加上了strict，那么当访问 /one/two，也会把/one/也匹配到
  那么如果想让/one/two不显示/one/，那么还可以加上exact


  路由中的props等同于$router + $route



  路由中的props
    只要切换路由，在当下组件中可以通过this.props去拿到跳转路由的细节信息
    history ： 跳转路由的方法（push,replace,go...）
    location ： 需要传递的信息(hash,search,pathname,state)



  to：
    <Link to="/">
      <Link to={{
          pathname:'/',
          search:'?to=about',
          hash:'#a=3',
          state:{
            id:00
          }
      }}>
*/
if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <Router>
      <App />
  </Router>
  , document.getElementById('root'));

// ReactDOM.render(
//   <Router>
//     {/* <Route path="/">
//       <App/>
//     </Route>
//     <Route path="/home">
//       <Home />
//     </Route> */}

//     {/* <Route path="/" component={App} />
//     <Route path="/home" component={Home} /> */}


//     {/* <Switch>
//       <Route path="/home" component={Home} />
//       <Route path="/" component={App} />
//     </Switch> */}

//     {/* <Route path="/" exact component={App} />
//     <Route path="/home" component={Home} /> */}


//     {/* <Route path="/" exact component={App} />
//     <Route path="/home" component={Home} />
//     <Route path="/about" component={About} exact />
//     <Route path="/about/" component={About1} strict exact  />
//     <Route path="/about/about2" component={About2} exact /> */}

    
//       <App />
  

//   </Router>
//   , document.getElementById('root'));