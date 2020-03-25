<template>
  <div class="home">
    <button @click="change">切换</button>
    {{ud}}
    <button @click="udd">点击跟新</button>
    <hr/>
    <keep-alive>
      <A v-if="onOff"></A>
      <B v-else></B>
    </keep-alive>
    <hr />
    <Propa :num="onOff"></Propa>
    <hr />
    {{change1}}
    <!-- <div v-show="b">哈哈哈</div> -->
  </div>
</template>

<script>
import A from '../components/A'
import B from '../components/B'
import Propa from '../components/propa'
import {bus} from '../bus/bus'
export default {
  name: 'Home',
  components: {
    A,
    B,
    Propa
  },
  data(){
    return {
      onOff:true,
      b:false,
      name:'heeh',
      change1:1,
      ud:"hahah"
    }
  },
  methods: {
    change(){
      this.onOff = !this.onOff
    },
    udd(){
      this.ud = 'hehee'
      console.log('dom还没有跟新')
      this.$nextTick(() => {
        console.log('DOM跟新了')
      })
    }
  },
  created() {
    // 拿到子组件实例
    console.log(this.$children)
    bus.$on('change',(val) => {
      console.log(val)
      this.change1 = val
    })
  },
  
}
</script>
