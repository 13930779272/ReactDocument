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
// 一、解析
// render(
//   <div>
//     哈哈哈哈
//   </div>,
//   document.getElementById('root'))
/* 
  React.createElement("div", null, "\u54C8\u54C8\u54C8\u54C8");
*/

// render(
//   <div className="box" index="1" id="1">
//     哈哈哈哈
//   </div>,
//   document.getElementById('root'))
/* 
  React.createElement("div", {
    className: "box",
    index: "1",
    id: "1"
  }, "\u54C8\u54C8\u54C8\u54C8");

*/

render(
  <div>
    <div className="box" index="1">
      哈哈哈
      <span>
        <i>hah</i>
        啊哈哈哈
      </span>
    </div>
    <div>
      哈哈
    </div>
  </div>,
  document.getElementById('root'))

/* 
  React.createElement(
    "div", 
    null, 
    React.createElement(
      "div", 
      {
        className: "box"
      }, 
      "\u54C8\u54C8\u54C8", 
      React.createElement(
        "span", 
        null, 
        React.createElement(
          "i", 
          null, 
          "hah"
        ), 
        "\u554A\u54C8\u54C8\u54C8"
      )
    ), 
    React.createElement(
      "div", 
      null, 
      "\u54C8\u54C8"
    )
  ); 
*/
// 二、执行React.createElement()
console.log(React.createElement("div", null, "\u54C8\u54C8\u54C8\u54C8")) // 返回值是一个对象
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
console.log( React.createElement(
  "div", 
  {
    className: "box",
    index:1
  }, 
  "\u54C8\u54C8\u54C8", 
  React.createElement(
    "span", 
    null, 
    // React.createElement(
    //   "i", 
    //   null, 
    //   "hah"
    // ), 
    "\u554A\u54C8\u54C8\u54C8"
  )
), )