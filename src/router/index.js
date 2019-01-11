import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/views/Welcome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: () => import('@/views/Dashboard.vue')
    },
    {
      path: '/welcome',
      name: 'Welcome',
      component: () => import('@/views/Welcome.vue')
    },
    {
      path: '/lists',
      name: 'Lists',
      component: () => import('@/views/Lists.vue')
    },
    {
      path: '/events',
      name: 'Events',
      component: () => import('@/views/Events.vue')
    },
    {
      path: '/events/:id',
      name: 'Event',
      component: () => import('@/views/Event.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('@/views/Contact.vue')
    },
    {
      path: '/sign-in',
      name: 'signin',
      component: () => import('@/views/Signin.vue')
    },
    {
      path: '/join',
      name: 'join',
      component: () => import('@/views/Join.vue')
    },
    {
      path: '/*',
      name: 'NotFound',
      component: import('@/views/NotFound.vue')
    }
  ]
})
