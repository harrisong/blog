import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import About from '@/components/About'
import Blog from '@/components/Blog'
import Post from '@/components/Post'

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
      path: '/blog/:id',
      component: Post
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    }
  ]
})
