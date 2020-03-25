<template>
  <div>
    <div>数据传递</div>
    {{$parent.name}}
    {{num}}
  </div>
</template>

<script>
  export default {
    created() {
      console.log(this.$parent)
    },
    props:['num']
  }
</script>

<style lang="scss" scoped>

</style>