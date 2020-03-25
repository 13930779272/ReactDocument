import React,{Component} from 'react'
// 把MyContext引过来
import MyContext from './context'
import {bindActionCreators} from 'redux'
class Provider extends Component{
  render(){
    console.log(this.props)
    // 可以通过this.props拿到根下的Provider的元素和属性
    const {children,store} = this.props
    return (
      // 可以这样用
      <MyContext.Provider value={store}>
        {children}
      </MyContext.Provider>
    )
  }
}
export default Provider
/* 
  return的是一个新的组件所以相当于此处的匿名类就是每个组件所以数据传递可以通过MyContext拿到
*/
// 高阶组件，传进一个组件return一个组件
function connect(mapstate,mapdispatch){
  return function(Components){
    return class extends Component{ // 匿名类
      static contextType = MyContext
      constructor(props,context){
        super(props)
        // 初始化数据
        this.state = mapstate(context.getState())
        // console.log(context.getState())
        /* 
          如果直接访问this.context为undefined
          直接读this又可以显示this.context
          所以使用constructor传入context
          context.getState()可以拿到所有的数据，又因为mapstate传进来是一个函数，函数return的不一定是所有的数据，所以初始化数据要调用一下
        */
      }
      // 在DOM加载完成后只要数据变化就进行监听更新数据
      componentDidMount(){
        this.unsub = this.context.subscribe(() => {
          this.setState(this.context.getState())
        })
      }
      // 组件销毁之后取消监听
      componentWillUnmount(){ 
        this.unsub()
      }
      dispatchFn = () => {
        let toS = Object.prototype.toString
        if(toS.call(mapdispatch) === '[object Module]'){
          return bindActionCreators(mapdispatch,this.context.dispatch)
        }
        return this.context
      }
      // 新的组件
      render(){
        return (
          // 新的组价
          <Components {...this.state} {...this.dispatchFn()} />
        )
      }
    }
  }
}
export {connect}