import React, { Component } from 'react';
// import ReactDOM from 'react-dom' // 引入DOM是要用render函数，
import ReactDOM,{render} from 'react-dom' // 我们可以直接结构出来

console.log(render) // 是一个函数
console.log(React) // 是一个对象
/* 
 * 虚拟DOM（jsx）到真实DOM的渲染过程：
 *  1.基于BABEL-PRESET-REACT-APP(https://www.babeljs.cn/repl)语法解析包解析为CREATE-ELEMENT格式
 *    =>每当遇见一个元素标签都会进行 React.createElement() 处理
 *    =>React.createElement([标签名],[props|null],...) 从第三个参数开始就是子节点的处理 文本节点直接转化为UNIcode格式，元素节点继续createElement()处理
 * 
 *  2.执行createElement()（执行顺序肯定是先把最里层的CREATE-ELEMENT执行，执行完依次执行外层的CREATE-ELEMENT...）
 *    =>返回一个对象{
 * 		 key:null,
 * 		 ref:null,
 * 		 type:标签名/组件，
 * 		 props:{
 * 			 xxx:xxx, //=>给元素标签上设置的属性（REF/KEY除外）
 * 			 //=>没有子节点则没有children选项，有子节点才有children，只有一个字节点它的值是单个值，如果有多个子节点，它的值是一个数组
 * 			 children:单个值(字符串/对象) 或者 数组
 * 		 }
 *   }
 *
 *  3.基于REACT-DOM.RENDER把生成的对象变为真实的DOM，最后渲染到浏览器页面的指定容器中
 */
// 一、jsx语法解析基于babel-preset-react-app语法包解析为createElement格式
// render(
//   <div>
//     哈哈哈哈
//   </div>,
//   document.getElementById('root'))

// 二、执行createELement返回一个对象
// React.createElement("div", null, "\u54C8\u54C8\u54C8\u54C8");
// console.log(React.createElement("div", null, "\u54C8\u54C8\u54C8\u54C8"))
/* 
  $$typeof: Symbol(react.element)
  type: "div"
  key: null
  ref: null
  props: {children: "哈哈哈哈"}
  _owner: null
  _store: {validated: false}
  _self: null
  _source: null
  __proto__: Object
*/
// 三、执行render渲染为真实的DOM
// render( <div>
//    哈哈哈哈
//    </div>,
//   document.getElementById('root'))





// render(
//   <div className="box" index="1" id="1" key={1} >
//     哈哈哈哈
//   </div>,
//   document.getElementById('root'))
/* 
  React.createElement("div", {
    className: "box",
    index: "1",
    id: "1",
    key: 1
  }, "\u54C8\u54C8\u54C8\u54C8");
*/
// console.log(React.createElement("div", {
//   className: "box",
//   index: "1",
//   id: "1",
//   key: 1
// }, "\u54C8\u54C8\u54C8\u54C8"))
/* 
  $$typeof: Symbol(react.element)
  type: "div"
  key: "1"
  ref: null
  props: {className: "box", index: "1", id: "1", children: "哈哈哈哈"}
  _owner: null
  _store: {validated: false}
  _self: null
  _source: null
  __proto__: Object
*/



render(
    <div className="box" index="1">
      <span>标签</span>
    </div>,
  document.getElementById('root'))

console.log(React.createElement("div", {
  className: "box",
  index: "1"
}, /*#__PURE__*/React.createElement("span", null, "\u6807\u7B7E")))




// 二、执行React.createElement()
// console.log(React.createElement("div", null, "\u54C8\u54C8\u54C8\u54C8")) // 返回值是一个对象
/* 
  {
    $$typeof: Symbol(react.element)
    type: "div"
    key: null
    ref: null
    props: {children: "哈哈哈哈"}
    _owner: null
    _store: {validated: false}
    _self: null
    _source: null
    __proto__: Object
  }
*/
// console.log( React.createElement(
//   "div", 
//   {
//     className: "box",
//     index:1
//   }, 
//   "\u54C8\u54C8\u54C8", 
//   React.createElement(
//     "span", 
//     null, 
//     // React.createElement(
//     //   "i", 
//     //   null, 
//     //   "hah"
//     // ), 
//     "\u554A\u54C8\u54C8\u54C8"
//   )
// ), )

