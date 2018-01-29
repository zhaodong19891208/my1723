import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/head/index'
import Login from '@/pages/login/login-index'
import Details from '@/pages/details/details-index'
import Classify from '@/pages/classify/classify-index'
import Register from '@/pages/Register/register-index'
import Shop from '@/pages/shop/shop-index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/details',
      name: 'details',
      component: Details
    },
    {
      path: '/classify',
      name: 'classify',
      component: Classify
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})