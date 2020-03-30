class EventEmit {
  // 事件池
  pond = {}
  // 订阅事件
  $on(fnName,func){
    if(!this.pond.hasOwnProperty(fnName)){
      this.pond[fnName] = []
    }
    // 事件函数去重
    if(this.pond[fnName].some(item => item === func)) return
    this.pond[fnName].push(func)
  }
  $emit(fnName,...arg){
    let fnAry = this.pond[fnName] || []
    fnAry.forEach(item => {
      item(...arg)
    })
  }
}
export default new EventEmit();