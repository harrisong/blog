import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import About from '@/components/About'
import Blog from '@/components/Blog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    }
  ]
})
