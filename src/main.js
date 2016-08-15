import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import RouterConfig from './router'
import {ws} from './store/Websocket'
import App from './App'

// load vue-router
Vue.use(VueRouter)
Vue.use(VueResource)

// 路由配置
var router = new VueRouter({
  hashbang: true,
  history: false,
  saveScrollPosition: true,
  transitionOnLoad: true
})

RouterConfig(router)
// 前置的访问判断Auth是否正确
// 访问判断，长连接服务是否正常。不正常重新连接。
router.beforeEach((transition) => {
  let token = window.localStorage.getItem('token')
  if (transition.to.auth && (!token || token === null)) { // need to auth but token is not set
    transition.redirect('/login')
  }
  console.log('visiting' + transition.to.path)
  Vue.http.headers.common['Authorization'] = 'Bearer ' + token
  if (ws.ws === undefined) {
    console.log('connection to ws...')
    ws.connect()
  }
  transition.next()
})

router.start(App, '#app')
