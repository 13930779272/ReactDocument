import React, { Component } from 'react';
import {Link, Route,Switch,} from 'react-router-dom'
import Home from './components/home'
import About from './components/about'
import About1 from './components/about1'
import About2 from './components/about2'
import Public from './components/public'
import PublicOne from './components/publicOne'
import PublicId from './components/publicId'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div>
        <Link to="/">
          <button>首页</button>
        </Link> |  
        <Link to="/about">
          <button>关于</button>
        </Link> | 
        <Link to="/about/">
          <button>关于1</button>
        </Link> | 
        <Link to="/about/about2">
          <button>关于2</button>
        </Link> | 
        <Link to="/public">
          <button>公共页</button>
        </Link>
        <Link to="/public1">
          <button>公共页1</button>
        </Link>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} exact />
        <Route path="/about/" component={About1} strict exact  />
        <Route path="/about/about2" component={About2} exact />
        <Route path="/public" component={Public} />
        <Route path="/public1" component={PublicOne} />
        <Route path="/public/:id" component={PublicId} />
      </div>
    );
  }
}
 
export default App;