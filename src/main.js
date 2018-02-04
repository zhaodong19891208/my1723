// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import 'assets/css/reset.css'
import 'assets/iconfont/iconfont.css';
import 'assets/icon/iconfont.css';

import 'assets/css/swiper.min.css'
import 'assets/iconfont/iconfont.css'


import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Swipe, SwipeItem } from 'mint-ui'


Vue.config.productionTip = false
FastClick.attach(document.body)
Vue.use(MintUI)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
