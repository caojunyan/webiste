import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Join from '../views/Join'

Vue.use(Router)

export default new Router({
  mode:"history",
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
    },

  ],
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      if (savedPosition) {
        return savedPosition
      } else {
        if (to.hash) {
          return {selector: to.hash}
        }
      }
    }
    return { x: 0, y: 0 }
  },


})
