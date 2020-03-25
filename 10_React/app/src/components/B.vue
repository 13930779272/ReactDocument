<template>
  <div>
    <button @click="add">{{num}}</button>
  </div>
</template>

<script>
import {bus} from '../bus/bus'
// import { bus } from '../../../../20200110/app/src/bus'
  export default {
    data(){
      return {
        num:100
      }
    },
    methods: {
      add(){
        this.num += 2
        bus.$emit('change',this.num)
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>