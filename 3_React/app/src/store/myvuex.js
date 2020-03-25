export default (function () {
  let _Vue;
  class Store {
    constructor(opt) {
      // console.log(_Vue)
      this.vm = new _Vue({
        data: {
          state: opt.state || {}
        }
      });
      
      // this.state = opt.state || {};
      let state = this.vm.state
      // this.mutations的初始化
      this.mutations = {};
      // 接受传进来的mutations
      let mutations = opt.mutations
      // 把mutations下的方法重新改写，挂到this.mutations下(保证this和参数传递是没有错误的)
      let Each = (obj,cb) => {
        Object.keys(obj).forEach(fnName => {
          return cb(fnName,obj[fnName])
        })
      }
      // 调用mutations每个函数改写this，并且放到this.mutations下
      Each(mutations,(fnName,mutationsFn) => {
        this.mutations[fnName] = (...arg) => {
          mutationsFn.call(this,state,...arg)
        }
      })

      this.actions = {};
      let actions = opt.actions
      Each(actions,(fnName,actionsFn) => {
        this.actions[fnName] = (...arg) => {
          actionsFn.call(this,this.commit,...arg)
        }
      })


      let commit = this.commit
      this.commit = (type,...payload) => {
        commit.call(this,type,...payload)
      }

      let dispatch = this.dispatch
      this.dispatch = (type,...payload) => {
        dispatch.call(this,type,...payload)
      }
    }

    get state(){
      return this.vm.state;
    }

    commit(type, ...payload) {
      // console.log(this.state)
      this.mutations[type](...payload)
    }
    
    dispatch(type,...payload){
      // console.log(this)
      this.actions[type](...payload)
    }
  }
  //VueRouter.install
  //只要使用了use，那么就会调用对象的下的install方法
  function install(Vue) {
    _Vue = Vue
    Vue.mixin({
      beforeCreate() {
        // console.log(1)
        // console.log(this.$options)
        if (this.$options && this.$options.store) { // 根组件
          this.$store = this.$options.store
        } else { // 不是根组件
          // console.log(this)
          this.$store = this.$parent && this.$parent.$store
        }
        // Object.defineProperty(this, '$store', {
        //   get() {
        //     // console.log(this._store)
        //     return this._store
        //   }
        // })

      }

    })
  }
  return {
    Store,
    install
  }
})()

export function mapState(ary) {
  let obj = {};
  ary.forEach(item => {
    // console.log(this._store)
    obj[item] = this.$store.state[item]
  })
  return obj
}