import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Join from '../views/Join'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/join',
      name:'Join',
      component:Join
    }
  ]
})
