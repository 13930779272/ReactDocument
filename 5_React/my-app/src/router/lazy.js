import {lazy,Suspense} from 'react'
import React from 'react';
function lazyComponent(Component){
  return class extends React.Component {
    render() {
      console.log(this)
      const {props} = this
      return (
        <div>
          <Suspense fallback={<div>loda...</div>}>
            <Component {...props} />
          </Suspense>
        </div>
      );
    }
  }
}
/*
  react中自带一个懒加载的方式
    lazy，但是目前实验的结果是lazy要和Suspense一起用

  所以说我们封装一个lazy + Suspense的一个新组件，这个组件的目的就是为了进行懒加载组件

  LazyComponent(需要传入一个需要懒加载的组件（要通过lazy去引）)


  import lazy from 'xx./lazy';

  lazy(()=>import('./components/About'))
    
*/
export default function(Component){
  return lazyComponent(lazy(Component))
}