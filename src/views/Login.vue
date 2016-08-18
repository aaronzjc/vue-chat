<template>
<div>
<p-header title="登录"></p-header>
<!-- 这里是页面内容区 -->
<div class="content native-scroll">
  <div class="text-content resigter">
    <h2>VChat</h2>
  </div>
  <div class="content-block">
      <div class="list-block">
          <ul>
              <!-- Text inputs -->
              <li>
                  <div class="item-content">
                      <div class="item-inner">
                          <div class="item-input">
                              <input type="text" name="username" placeholder="用户名" v-model="username">
                          </div>
                      </div>
                  </div>
              </li>
              <li class="align-top">
                  <div class="item-content">
                      <div class="item-inner">
                          <div class="item-input">
                              <input type="password" name="password" placeholder="密码" v-model="password">
                          </div>
                      </div>
                  </div>
              </li>
          </ul>
      </div>
  </div>
  <div class="content-block">
      <p><a v-on:click="login" class="button button-big button-fill">免注册登录</a></p>
  </div>
</div>
</div>
</template>

<script>
import PHeader from '../components/PHeader'
import Config from '../assets/js/config'
import $ from 'zepto'
import {ws} from '../store/Websocket'

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  ready () {},
  methods: {
    login () {
      if (this.username === '') {
        $.toast('用户名不能为空')
        return
      }
      if (this.password === '') {
        $.toast('密码不能为空')
        return
      }
      this.$http.post(Config.BASE_URL + Config.API.login, {
        username: this.username,
        password: this.password
      }).then((response) => {
        window.localStorage.setItem('token', response.json().token)
        window.localStorage.setItem('uid', response.json().user.id)
        window.localStorage.setItem('info', JSON.stringify(response.json().user))
        // 连接Websocket服务器
        ws.connect(response.json().uid)
        this.$router.go({name: 'chatlist'})
      }, (response) => {
        $.toast('登录失败')
      })
    },
    register () {
      this.$router.go({name: 'register'})
    }
  },
  components: {
    PHeader
  }
}
</script>

<style>
.text-content {
  width: 100%;
  margin:20px 0px;
  text-align: center;
}
</style>
