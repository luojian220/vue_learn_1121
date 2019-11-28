<template>
  <div>
    <p> {{msg}} </p>
    <p> {{dataMsg}}</p>
  </div>
</template>

<script>
  export default {
    name: 'componentA',
    data () {
      return{
        msg: " i am componentA"
      }
    },
    props:['dataMsg']/*父组件传入的值*/
  }
</script>

<style scoped>

</style>
