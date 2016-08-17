<template>
<p-header title="聊天">
  <button class="button button-link button-nav pull-left" @click="this.$router.go({'name': 'chatlist'})">
  <span class="icon icon-left"></span>
  返回
</button>
</p-header>
<div class="content pull-to-refresh-content chat-list" data-ptr-distance="55">
  <div class="pull-to-refresh-layer">
      <div class="preloader"></div>
      <div class="pull-to-refresh-arrow"></div>
  </div>
<message-list :message-list="messageList"></message-list>
</div>
<div class="bar chat-input-box row">
    <div class="search-input col-80">
      <input type="search" v-model="data.message" placeholder='输入消息...'/>
    </div>
    <a @click="sendMsg" class="button button-fill button-primary col-20">发送</a>
</div>
</template>

<script>
import PHeader from '../components/PHeader'
import MessageList from '../components/MessageList'
import Config from '../assets/js/config'
import {store} from '../store/GlobalStore'
import {ws} from '../store/Websocket'
import $ from 'zepto'

export default {
  data: function () {
    return {
      messageList: [],
      data: {
        message: '',
        from: '',
        to: ''
      }
    }
  },
  route: {
    data: function (transition) {
      const _self = this
      if (transition.to.params) {
        this.data.to = transition.to.params.uid
        this.data.from = window.localStorage.getItem('uid')
        // 初始化聊天记录
        this.$http.get(Config.BASE_URL + Config.API.preMessages + '/' + this.data.to).then((response) => {
          console.log(response.json())
          // 消息获取成功才可以
          _self.messageList = response.json()
          store.messageList = _self.messageList
        }, (response) => {
          if (response.status === 401) {
            this.$router.go({name: 'login'})
          }
        })
        // 将该用户的未读消息全部设置为已读
        this.$http.post(Config.BASE_URL + Config.API.read, {uid: this.data.to}).then((response) => {
          console.log(response)
        })
      }
    }
  },
  computed: {},
  int: function () {
    $(document).on('refresh', '.pull-to-refresh-content', function (e) {
      $.toast('下拉刷新')
    })
  },
  ready: function () {},
  attached: function () {},
  methods: {
    sendMsg: function () {
      if (this.data.message === '') {
        return false
      }
      let data = {
        cmd: 'chat',
        data: this.data
      }
      if (ws.ws === undefined) {
        $.toast('聊天服务器连接失败')
        return false
      }
      // 通过Websocket发送出去
      ws.ws.send(JSON.stringify(data))
      // 界面更新，发送消息在右边
      this.messageList.push({content: this.data.message, position: 'right'})
      console.log(store)
      // 清空输入框
      this.data.message = ''
    }
  },
  components: {
    PHeader,
    MessageList
  }
}
</script>

<style lang="css">
.bar.chat-input-box {
  bottom: 0;
  background: #e7e7e7;
}
.bar.chat-input-box input {
  border-color: #fff;
}
.chat-list {
  margin-bottom: 2rem;
  background: #eee;
}
</style>
