import React from 'react'
import {Redirect} from 'react-router-dom'
import lazy from './lazy'
import Home from '../components/Home'
const About = lazy(() => import('../components/About'))
const AboutChild = lazy(() => import('../components/AboutChild'))
const Login = lazy(() => import('../components/login'))
const NotRouter = lazy(() => import('../components/NoRouter'))

const routers = [
  {
    path:'/',
    render:(props) => {
      let islogin = sessionStorage.getItem('islogin') ? JSON.parse(sessionStorage.getItem('islogin')) : false
      if(!islogin){
        return <Redirect to="login" />
      }
      return <Home {...props}/>
    }
  },
  {
    path:'/about',
    component:About
  },
  {
    path:"/about/:id",
    component:AboutChild
  },
  {
    path:"/login",
    component:Login,
    children:[
      {
        path:'/login/a',
        component:NotRouter
      }
    ]
  }
]
export default routers