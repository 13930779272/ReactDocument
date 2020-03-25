export function add(){
  return {type:'INCREMENT'}
}
export function asyncadd(){
  return function(dispatch,getState){
    console.log(getState())
    setTimeout(()=> {
      dispatch(add())
    },1000)
  } 
}
export function  remove(){
  return {type:"DECREMENT"}
}
export function asyncremove(){
  return function(dispatch,getState){
    console.log(getState())
    setTimeout(()=> {
      // console.log(dispatch)
      dispatch(remove())
    },1000)
  } 
}