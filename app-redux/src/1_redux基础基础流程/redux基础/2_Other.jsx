import React,{useEffect,useState} from 'react';


// 函数hook组件
// export default function Other(props){
//   /* 
//    * 如果直接拿数据当状态改变时，组件内不会改变
//    * 当状态改变时，组件不会再重新渲染了
//    */

//   console.log('渲染了')
  
//   let store = props.store,
//   {supNum,oppNum} = store.getState();





//   // 初始化数据，
//   // let [num,setNum] = useState(supNum)
  
//   /* 
//    * 此时改变num会找上级的supNum,上级的supNum还是开始的num所以不会再重新渲染，拿不到最新的状态
//    */
//   // useEffect(() => {
//   //   store.subscribe(() => {
//   //     setNum(supNum)
//   //     // console.log('useEffect执行了')
//   //   })
//   // },[])



//   // let [num,setNum] = useState(supNum)
//   /* 
//    * 此时可以拿到最新的状态，因为是引用类型
//    */
//   // useEffect(() => {
//   //   store.subscribe(() => {
//   //     setNum(store.getState().supNum)
//   //     // console.log('useEffect执行了')
//   //   })
//   // },[])


//   let [state,setState] = useState(function(){
//     return {
//       ...store.getState()
//     }
//   })
//   useEffect(() => {
//     store.subscribe(() => {
//       // 控制组件重新渲染
//       setState({
//         // 重新获得最新的状态，最新状态替换私有状态，如果不一样当前组装重新渲染
//         ...store.getState()
//       })
//     })
//   },[])
//   return (
//     <div>
//       {supNum } 和 {oppNum}
//     </div>
//   )
// }


// 类组件
export default class Other extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      ...props.store.getState()
    }
  }
  // 也可以更新数据
  componentDidMount(){
    this.props.store.subscribe(() => {
      this.setState({
        ...this.props.store.getState()
      })
    })
  }
  render(){
    return (
      <div>
        {this.state.supNum } 和 {this.state.oppNum}
      </div>
    )
  }
}