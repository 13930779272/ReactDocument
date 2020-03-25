import React from 'react';
export default React.createContext()

/* 
  React身上有个createContext的函数， React.createContext()调用返回值为两个对象，一个是消费者一个是供应者
  可以在组件上定义一个静态属性contetxType让这个属性等于React.createContext()，这样就可以通过this.context去取Provider中的数据了

  Provider:供应者
  <Provider value={xxx}/>
  Provider中传递数据必须要用value

  Consumer:消费者
  <Consumer>
    {
      (val) => {
        val为Provoder的value 
      }
    }
  </Consumer>

  consumerconsimerconsumerconsumer provider
*/