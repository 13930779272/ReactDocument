import React from 'react';
import ReactDOM from 'react-dom';

// import App from './components/App';
// import Home from './components/Home'

/*
 * JSX语法：javascript xml（html）
 * =>虚拟DOM
 * 
 * 1.每一个组件的视图只能有一个根元素节点
 * 	  ReactDOM.render([JSX],[CONTAINER],[CALLBACK])
 * 	  =>[CONTAINER]不建议是HTML或者BODY，指定一个元素容器#ROOT
 * 	  =>[CALLBACK]把虚拟DOM渲染到浏览页面中后触发的回调函数
 * 2.JSX语法中基于{}绑定动态数据值或者JS表达式
 * 	  =>null和undefined代表空元素
 *    =>在括号中不能直接使用对象或者函数（引用数据类型值不是合法JSX元素，除数组之外，数组里有引用类型也不行，把数组变为字符串）
 * 3.给JSX元素设置样式
 *    =>设置样式类使用的是className
 *    =>设置行内样式STYLE不能是字符串，必须是一个对象 style={{xxx:xxx}}
 * 4.大括号中如果是JS表达式，可以返回有效的数据值或者返回一个新的JSX元素
 */
let name = '哈哈',
    ft = {
      fontSize:"50px"
    },
    num = 1,
    data = [
      {
        id:1,
        name:'小明'
      },
      {
        id:2,
        name:'小李'
      }
    ];
ReactDOM.render(
<div className="box" style={{color:'red',...ft}}>
  {/* 这是注释 */}
  <div>{name}</div>
  {num === 0?'男':'女'}
  {num === 0?<p>我是男的</p>:null}
  <ul>
    {data.map(item => {
      return (
        /* JSX要求循环绑定的元素都要设置一个属性KEY，存储的值是当前循环中的唯一值（KEY是DOM DIFF时候的重要凭证，KEY值一般不要设置为循环的索引，而是设置为某一个具体不变的值） 
         */
        <li key={item.id}>
          <span>{item.id}</span>
          <span>{item.name}</span>
        </li>
      )
    })}
  </ul>
</div>, document.getElementById('root'));
// ReactDOM.render(<Home />,document.getElementById('root'))



/* ReactDOM.render(<div id="box">
	你好世界
</div>, document.getElementById('root'), _ => {
	console.log(document.getElementById('box'));
}); */