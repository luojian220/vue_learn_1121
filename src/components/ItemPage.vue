<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Item page</h2>
    <div>
      <button type="button" name="" @click="goto" value="goto"> goto </button>
    </div>

    <ul>
      <li v-for="item in dataList">{{item.name +" - "+ item.value}}</li>
    </ul>
    <component-a v-bind:dataMsg="msg"></component-a>
  </div>
</template>

<script>
import componentA from "./pagetool/componentA"

export default {
  name: 'ItemPage',
  components:{
    componentA
  },
  data () {
    return {
      msg: 'Welcome to Your itemPage component',
      dataList :[
        {
          name : "apple",
          value: 1
        },
        {
          name : "banner",
          value: 2
        },
        {
          name : "orange",
          value: 3
        }
      ]
    }
  },
  methods:{
    goto: function () {
      console.log('2222')
      this.$router.push("/");
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
  /*display: inline-block;*/
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
