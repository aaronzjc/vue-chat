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
let router = new VueRouter({
  hashbang: true,
  history: false,
  saveScrollPosition: true,
  transitionOnLoad: true
})

RouterConfig(router)
// 前置的访问判断Auth是否正确
// 访问判断，长连接服务是否正常。不正常重新连接。
router.beforeEach((transition) => {
  // 控制AppBar的显示
  if (['chatbox', 'addFriend', 'login', 'editinfo'].indexOf(transition.to.name) !== -1) {
    router.app.isIndex = false
  } else {
    router.app.isIndex = true
  }
  let token = window.localStorage.getItem('token')
  if (transition.to.auth && (!token || token === null)) { // need to auth but token is not set
    transition.redirect('/login')
  }
  console.log('visiting' + transition.to.path)
  Vue.http.headers.common['Authorization'] = 'Bearer ' + token
  if (ws.ws === undefined && transition.to.auth) {
    console.log('connection to ws...')
    ws.connect()
  }
  transition.next()
})
// 异常请求处理
Vue.http.interceptors.push((request, next) => {
  next((response) => {
    if (response.status === 401) {
      console.log('invalid user')
      router.go({name: 'login'})
    }
  })
})

router.start(App, '#app')
