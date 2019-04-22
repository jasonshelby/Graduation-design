import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home.vue'

Vue.use(Router)

// @TODO 登陆权鉴  路由守卫

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
      path: '/signin',
      name: 'signin',
      component: () => import('./views/signin.vue')
    },
    {
      path: '/doctor',
      name: 'doctor',
      component: () => import('./views/doctor.vue')
    },
    {
      path: '/patient',
      name: 'patient',
      component: () => import('./views/patient.vue')
    },
  ]
})
// console.log(router.beforeEach)

// router.beforeEach((to, from, next) => {
  

//   if(to.matched.length == 0) {
//     console.log(222)
//     next('/about')
//   }
//   // ...
// })



export default router