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
import axios from "axios"
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
      console.log('2222');
      this.doRequest()
      // this.$router.push("/");
    },
    doRequest () {

      /*axios.get('/user?ID=12345')
        .then(function (response) {
          // handle success
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });*/
      axios.post('/user',{name:"tom",age:"12"}).then(function (response) {
        console.log("then:",response);
      }).catch(function (error) {
        console.log("error:",error);
      });
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
