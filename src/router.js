import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home.vue'
import state from './store/index.js'
Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      name: 'notFound',
      component: () => import('./views/about.vue')
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/about.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login.vue')
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('./views/signin.vue')
    },
    {
      path: '/doctor/:id',
      name: 'doctor',
      component: () => import('./views/doctor.vue')
    },
    {
      path: '/patient/:id',
      name: 'patient',
      component: () => import('./views/patient.vue')
    },
  ]
})

router.beforeEach((to, from, next) => {
  let isOnline = state.isOnline || sessionStorage.isOnline === 'true'
  if ((to.name === 'patient' || to.name === 'doctor') && !isOnline) {
    console.log(22)
    alert(222)
    next('/about')
  } else {
    next()
  }
})

export default router