import React ,{useState,useEffect}from 'react';
/* 
 * 所有受路由规则管控的组件，在this.props中都有三个属性
 *  HASH路由自己模拟了一套History Api的机制（历史记录池），每一次的路由切换和跳转都会向池子中追加一条记录
 *   history:{
 *       length:记录历史记录池中的数量
 *       go(n):跳转到指定的记录  go(-1) => goBack() /  go(1) => goForward() 
 *       push:跳转到指定的路由地址，也是向池子中追加一条新的记录 
 * 			this.props.history.push(xxx)
 *       replace:把当前记录替换成谁
 *   }
 *   location:{
 *       pathname:'' 跳转的路劲地址
 *       search:'' 问号传参的信息,只能是字符串
 *       hash:'' 哈希值
 *       state:'' 传递进来的信息，和vue中的隐性传参是相同的意思
 *   }
 *   match:{} 存储一些路由解析地址后的规则和结果
 */
function Error(props){
  console.log(props)
  let [num,setNum] = useState(5)
  useEffect(() => {
    let timer = setInterval(() => {
      setNum(num--)
      if(num <= 0){
        props.history.push({
          pathname:'/home', // 路由信息
          search:'hahaha=haha', // 问号传参
          hash:'哈哈哈', // hash值
          state:{ // 隐性传参：传递后，页面刷新，隐性传参的信息则没有了
            lx:100
          }
        })
        clearInterval(timer)
      }
    }, 1000);
  },[])
  return (
    <>
      <h2>页面找不到了</h2>
      {num} 秒后跳转到主页
    </>
  )
} 
export default Error