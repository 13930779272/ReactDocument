import React, { Component } from 'react';
import {HashRouter,Route,Switch,NavLink,Link,Redirect} from 'react-router-dom'
import Add from './custom/Add'
import List from './custom/List'
import './Custom.css'
class Custom extends Component {
  render() { 
    return (
      <div className="NavBox">
        {/*
          * 不论是Link还是NavLink都是为了实现路由的跳转（最后都渲染为A标签）
          *    NavLink:会根据浏览器地址栏中的地址和NavLink指定的to中的地址进行匹配，如果可以匹配上，则会给A设置一个class='active'
          */}
        <NavLink to='/custom/add'>
          <button>新增客户</button>
        </NavLink>
        <NavLink to='/custom/list'>
          <button>客户列表</button>
        </NavLink>
        <Switch>
          <Redirect from="/custom" exact to="/custom/add" />
          <Route path='/custom/add' component={() => {
            // 可以理解为路由守卫：可以做权限校验      
            let power = localStorage.getItem('power')
            if(power){
              return <Add/>
            }
            alert('无权限');
            return ''
          }}/>
          <Route path='/custom/list' component={List}/>
        </Switch>
      </div>
    );
  }
}
export default Custom;