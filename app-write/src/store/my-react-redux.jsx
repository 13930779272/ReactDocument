import React from 'react'
import PropTypes from 'prop-types';
/*  
 * Provider:本身是一个组件，把我们组件进行包裹，但渲染的是他包裹的子组件
 *   接收传递的属性store
 *   把store注册到上下文当中
 *   渲染的是子组件
 */
let ThemeContext = React.createContext();
export class Provider extends React.Component {
  // 设置属性store的传递规则，是一个对象并且必须传这个对象
  static propTypes = {
    store: PropTypes.object.isRequired
  };
  render() {
    console.log(this.props)
    // 渲染的是所包裹的组件，他包裹的组件在props.children中拿到
    return <ThemeContext.Provider value={{ store: this.props.store }}>
      {this.props.children}
    </ThemeContext.Provider>
  }
}

/* 
 * connect：高阶组件
 *   把mapStateToProps和mapDispatchToProps 两个方法执行返回的结果挂载到connectHOC接受的组价上（我们真实要渲染的组件的属性上）
 *   向redux容器中增加一个方法（当我们的公共状态改变，通知事件池中的方法执行，重新渲染组件）
 *   如果mapDispatchToProps传进来的是一个对象我们需要把这个对象转换成dispatch派发的模式
 */
export function connect(mapStateToProps, mapDispatchToProps) {
  // 把传进来的mapDispatchToProps对象变成dispatch派发的形式
  if (mapDispatchToProps && typeof mapDispatchToProps !== 'function') {
    // 先把传进来的对象存一下
    let actions = mapDispatchToProps
    // 改写成传统的mapDispatchToProps
    mapDispatchToProps = function (dispatch) {
      let result = {}
      for (let attr in actions) {
        if (!actions.hasOwnProperty(attr)) break;
        // 把对象里的每个小函数改写成dispatch派发对象的函数模式并且函数名不能变
        result[attr] = function (...args) {
          return dispatch(actions[attr](...args))
        }
      }
      return result
    }
  }
  return function connectHOC(Component) {
    // 返回一个代理组件
    return class Proxy extends React.Component {
      static contextType = ThemeContext
      render() {
        let handleProps = this.handle()
        return <ThemeContext.Consumer>
          {
            context => {
              return <Component {...handleProps} />
            }
          }
        </ThemeContext.Consumer>
      }
      componentDidMount() {
        this.context.store.subscribe(() => {
          this.forceUpdate()
        })
      }
      handle() {
        let state = mapStateToProps && mapStateToProps(this.context.store.getState())
        let funcs = mapDispatchToProps && mapDispatchToProps(this.context.store.dispatch)
        return {
          ...state,
          ...funcs
        }
      }
    }
  }
}


/* // 正常写法
connect(null,function (dispatch){
  return {
    changeN(){
      return dispatch({
        type:'xxx'
      })
    }
  }
})()

// action写法
connect(null,{ // action 为一个对象
  changeN(){
    return {
      type:'xxx'
    }
  }
})() */