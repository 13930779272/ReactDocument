import React from 'react'
import {Route,Router,Switch,Redirect} from 'react-router-dom'
import routers from './router'

function routerlist(routers) {
  let list = []
  let router = (routers) => {
    if(Array.isArray(routers)){
      routers.forEach(item => {
        // console.log(router)
        const {render,path,component,redirect,children} = item
        if(render){
          list.push(<Route {...{
              key:path,
              exact:true,
              path,
              render
          }}/>)
        }
        //如果有重定向属性
        if(redirect){
            list.push(<Redirect {...{
                to:redirect,
                key:redirect
            }}/>)
        }
        //带component
        if(component){
            list.push(<Route {...{
                key:path,
                exact:true,
                path,
                component
            }}/>)
        }
        //如果有children并且不是空数组就递归
        if(children && children.length > 0){
          router(children);
        }
      })
    }
  }
  router(routers)
  return list
}

export default (<Switch>{routerlist(routers)}</Switch>)