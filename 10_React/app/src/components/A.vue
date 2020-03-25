<template>
  <div>
    <button @click="add">{{num}}</button>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        num:1,
      }
    },
    methods: {
      add(){
        this.num ++
      }
    },
    // created(){
    //   this.$on('change',(val)=> {
    //     console.log(val)
    //     this.changenum = val
    //   })
    // }
  }
</script>

<style lang="scss" scoped>

</style>