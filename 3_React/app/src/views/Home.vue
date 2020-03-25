<template>
  <div class="home">
    <h1>{{$store.state.num}}</h1>
    <button @click="click">{{$store.state.num}}</button>
    <button @click="click1">异步的数据{{$store.state.num}}</button>
  </div>
</template>

<script>
import { mapState } from "../store/myvuex";
export default {
  computed: {
    
  },
  data(){
    return {
      ...mapState.call(this, ["num"])
    }
  },
  methods: {
    click(){
      this.$store.commit('add',1)
    },
    click1(){
      this.$store.dispatch('asyncadd',1)
    }
  },
};
</script>
