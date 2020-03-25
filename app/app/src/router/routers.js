import React from 'react'
import {
  Redirect,
  Route,
  withRouter
} from 'react-router-dom'
import lazy from './lazy'
import {isLoginAPI} from '../api/api';
import Login from '../components/login/index'
const Home = lazy(() => import('../components/home/index'))
const About = lazy(() => import('../components/about/about'))
const routes = [{
    path: '/',
    component: Login
  },
  {
    path: '/home/:id',
    render: () => {
      const PrivateRoute = withHocPrivateRoute(Home);
      return <PrivateRoute />
    }
  },
  {
    path:'/about',
    render:(props) => {
      return <About {...props}/>
    }
  }
]

{/* 高阶路由守卫 */}
function withHocPrivateRoute(WrappedComponent) {
  if (!WrappedComponent) {
    throw new Error("缺少组件参数");
    return false;
  }
  //withRouter 也是一个高阶组件 传递 history
  return withRouter(
    class extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          isAuthenticated: false
        }
      }
      componentWillMount() {
        //权限验证
        const token = sessionStorage.getItem('token');
        const {
          history
        } = this.props;
        if (!token) {
          history.replace("/");
        } else {
          //后端校验
          isLoginAPI().then(d => {
            if (d) {
              this.setState({
                isAuthenticated: true
              });
            } else {
              history.replace("/");
            }
          });
        }
      }
      render() {
        return this.state.isAuthenticated ? ( 
          < WrappedComponent {...this.props}/>
        ) : <p></p>;
      }
    }
  )
}

function routerList(routes) {
  let list = [];
  //这个函数如果遇到了children可能会递归
  let renderRoutes = (routes) => {
      if (Array.isArray(routes)) {
        routes.forEach((route) => {
            const {
              path,
              component,
              children,
              redirect,
              render
            } = route;
            if (render) {
              list.push( < Route {
                  ...{
                    key: path,
                    exact: true,
                    path,
                    render
                  }
                }
                />)
              }
              //如果有重定向属性
              if (redirect) {
                list.push( < Redirect {
                    ...{
                      to: redirect,
                      key: redirect
                    }
                  }
                  />)
                }
                //带component
                if (component) {
                  list.push( < Route {
                      ...{
                        key: path,
                        exact: true,
                        path,
                        component
                      }
                    }
                    />)
                  }
                  //如果有children并且不是空数组就递归
                  if (children && children.length > 0) {
                    renderRoutes(children);
                  }
                });
            }
          }
          renderRoutes(routes);
          return list;
        }

        export default routes
        export {
          routerList
        }