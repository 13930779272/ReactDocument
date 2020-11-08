import React from 'react'


// 简单的Rreact.PureComponent源码
function shallowEqual(obj1, obj2) {
	if (Object.keys(obj1).length !== Object.keys(obj2).length) {
		return true;
	}
	for (let key in obj1) {
		if (obj1[key] !== obj2[key]) {
			return true;
		}
	}
	return false;
}

/*
 * SET-STATE有个缺点
 *   虽然说是改变状态并且通知组件重新渲染，但是我们不改状态值，也通知组件重新渲染了  shouldComponentUpdate => componentWillUpdate ...
 * 	 forceUpdate：=>componentWillUpdate （跳过SHOULD步骤）
 * 
 * 
 * React.PureComponent
 *    基于浅比较的方式，给每一个组件设置shouldComponentUpdate（如果自己设置了，以自己的为主），在里面把状态和属性都做对比，如果两者基于浅比较都没有发生任何的更改，则不再重新渲染组件
 * 
 * =>是基于浅比较，所以只要属性值是引用类型，但是修改后的值变了，但是地址不变，也不会重新渲染
 * 	 this.state.arr.push(30)
 *   setState({
 *       arr:this.state.arr 不会通知重新渲染
 *       arr:[...this.state.arr] 这样是会通知的（堆内存地址变了）
 *   })
 * =>PureComponent对forceUpdate无效（forceUpdate根本不走shouldComponentUpdate）
 * =>父组件是PureComponent那么子组件也具备了同样的功效（因为父组件不渲染，子组件也不会渲染）
 * =>PureComponent不用乱用，只有那些状态和属性不经常的更新的组件我们用来做优化，对于经常更新的，这样处理后反而浪费性能，因为每一次浅比较也是要消耗时间的
 */


class Num extends React.Component {
  render() { 
    return (
      <div>
        {this.props.num}
      </div>
    );
  }
}


class App2 extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      num:1,
      arr:[1,2,3,4]
    }
  }
  render() { 
    console.log('重新渲染了')
    return (
      <div>
        <h2>PureComponent</h2>
        <Num num={this.state.num}></Num>
        <button onClick={() => {
          let n = this.state.num
          this.state.arr.push(100)
          this.setState({
            num:n+1,
            arr:this.state.arr
          })
        }}>累加</button>
      </div>
    );
  }
  // shouldComponentUpdate(nextProps,nextState){
  //   return shallowEqual( this.props,nextProps) || shallowEqual( this.state,nextState)
  // }
}
/*
 * 
 */
export default App2;