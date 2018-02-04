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
<<<<<<< HEAD
    
=======
>>>>>>> 619f6360e0c57d2199f839200b3d8efecc548214
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})