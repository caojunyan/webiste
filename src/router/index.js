import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Serve from '../views/Serve'
import About from '../views/About'
import Contact from '../views/Contact'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/serve',
      name:'Serve',
      component:Serve
    },
    {
      path:'/about',
      name:'About',
      component:About
    },
    {
      path:'/contact',
      name:'Contact',
      component:Contact
    }
  ]
})