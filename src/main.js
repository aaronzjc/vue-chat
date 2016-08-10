import Vue from 'vue'
import VueRouter from 'vue-router'
import RouterConfig from './router'
import App from './App'

// load vue-router
Vue.use(VueRouter)

var router = new VueRouter({
  hashbang: true,
  history: false,
  saveScrollPosition: true,
  transitionOnLoad: true
})

RouterConfig(router)

router.start(App, '#app')
