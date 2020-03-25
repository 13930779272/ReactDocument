import React,{lazy,Suspense} from 'react'
function lazyComponent(Component){
  return class extends React.Component{
    render (){
      const {props} = this
      return (
        <Suspense fallback={<div>lodaing...</div>}>
          <Component {...props} />
        </Suspense>
      )
    }
  }
}
export default function (Component){
  return lazyComponent(lazy(Component))
}