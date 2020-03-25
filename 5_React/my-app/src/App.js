import React, { Component } from 'react';
import {Link,Route,Redirect,NavLink,Switch} from 'react-router-dom'


import Home from './components/Home'

// import About from './components/About'
// import AboutChild from './components/AboutChild'
// import Login from './components/login'
// import NotPage from './components/404'


import lazy from './router/lazy'
import './components/1.css'


const About = lazy(() => import('./components/About.js'))
const AboutChild = lazy(() => import('./components/AboutChild'))
const Login = lazy(() => import('./components/login'))
const NotPage = lazy(() => import('./components/NoRouter'))

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() { 
    return (
      <div>
        <Route path="/link" children={() => {
          return (
            <div>
              <NavLink to="/" exact activeClassName="active"><button>首页</button></NavLink>
              <NavLink to="/about" activeClassName="active"><button>关于</button></NavLink>
            </div>
          )
        }} />
        <Switch>
        {/* <Route path="/" exact component={Home} /> */}
        <Route path="/" exact render={(props) => {
          let islogin = sessionStorage.getItem('islogin') ? JSON.parse(sessionStorage.getItem('islogin')) : false
          if(!islogin){
            return <Redirect to="login" />
          }
          return <Home {...props}/>
        }}/>
          <Route path="/about" exact component={About} />
          <Route path="/about/:id" component={AboutChild} />
          <Route path="/login" component={Login} />
          <Route component={NotPage} />
        </Switch>
      </div>
    );
  }
}
 
export default App;