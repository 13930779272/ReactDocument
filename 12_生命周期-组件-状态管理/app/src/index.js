import React from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';
/*
 * 
 *  
 *  
 */

class App extends React.Component {
  //=>2.处理状态
  constructor(props) {
    super(props)
    // 在这可以拿到默认的数据说明constructor之前就执行了属性的校验和处理
    console.log(props,'=====>constructor')
    this.state = {
      num:1
    }
  }
  //=>3.第一次渲染组件之前
  componentWillMount(){
    //=>此时已经有实例了，通常在这从服务区获取数据，把获取的数据重新赋值给状态或者存放到REDUX中
    console.log('=====>componentWillMount')
  }
  //=>4.视图渲染的第一次或者重新渲染
  render() {
    console.log('=====>render')
    return (
      <div>
        <h2>{this.props.title}</h2>
        <div onClick={() => {
          // 执行setState必然会触发shouleComponentUpdate这个钩子，根据return的是true或者false决定是否重新渲染组件,无论返回啥状态都会被修改只不过是视图没有重新渲染
          // this.setState({
          //   num: ++this.state.num
          // })

          // let n = this.state.num
          // console.log(n) // 状态值被修改了
          // this.setState({num:++n})

          /* 
           * this.forceUpdate()强制更新，不会触发shouldComponentUpdate这个钩子函数，视图总会更新
           */
          this.state.num = ++ this.state.num
          this.forceUpdate()

        }}>{this.state.num}</div>
        {this.props.flag}
      </div>
    );
  }
  //=>5. 第一次渲染完成，只要组件不销毁5（包括5）之前的只执行一次
  componentDidMount(){
    console.log('=====>componentDidMount')
  }
  //=>状态更新后触发的生命周期
  //=>1.是否应该更新组件
  shouldComponentUpdate(nextProps,nextState){
    console.log('=====>shouldComponentUpdate',this.props,this.state,nextProps,nextState)
    console.log(this.state.num === nextState.num)
    return true
    // return false // 不允许视图更新
  }
  componentWillUpdate(){ // 数据更新之前
    console.log('=====>componentWillUpdate')
  }
  // 数据更新之前跟之后之间还会调用render
  componentDidUpdate(){ // 数据更新之后
    console.log('=====>componentUpdate')
  }
  // 当父组件重新渲染，子组件也会重新渲染，子组件的生命周期首先回执行此钩子然后走正常的数据更新生命周期钩子顺序
  componentWillReceiveProps(nextProps){ // 也可以进行性能优化但是不常用，一般都在shouldComponentUpdate中进行优化
    console.log('=====>componentWillReceiveProps',nextProps)
  }
}


// 组件
class Text extends React.Component {
  state = { // 组件中要用到状态时必须要初始化状态
    n:100
  }
  render() { 
    return (
      <div>
        {/* 
          * 当第一次渲染Text视图时，会新创建一个App（执行完整的App的生命周期）
          * 当Text重新渲染的时候，App必然会重新渲染（但不是重新创建），把最新的属性传递给App，但是App的生命周期钩子不会从CONSTRUCTOR重新执行（Vue也是这样）
          */}
        <App title="北京时间" flag={this.state.n}/>
        <button onClick={_ => {
          let x = this.state.n
          this.setState({n:++x})
        }}>点击</button>
      </div>
    );
  }
}

ReactDOM.render(
    <Text title="北京时间"></Text>,
  document.getElementById('root')
);