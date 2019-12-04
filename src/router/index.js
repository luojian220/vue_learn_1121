import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ItemPage from '@/components/ItemPage'

Vue.use(Router)

const routesConst = [
  {
    path: '/',
    //name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/itemPage',
    //name: 'ItemPage',
    component: ItemPage
  }
]

export default new Router({
  routes: routesConst,
  mode :"history"
})
