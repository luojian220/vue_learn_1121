<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Item page</h2>
    <div>
      <button type="button" name="" @click="goto" value="goto"> goto </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your itemPage',
      goto: function () {
        console.log('2222')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
