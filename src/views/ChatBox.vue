<template>
<div>
<p-header :title="chatname">
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
      <input type="search" v-model="data.message" @focus="scrollTop" @keyup.enter="sendMsg" placeholder='输入消息...'/>
    </div>
    <a @click="sendMsg" class="button button-fill button-primary col-20">发送</a>
</div>
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
      currentPage: 0,
      messageList: [],
      data: {
        message: '',
        from: '',
        to: ''
      },
      chatname: '聊天'
    }
  },
  route: {
    data: function (transition) {
      console.log(store.messageList)
      if (store.messageList === undefined) {
        this.messageList = []
      }
      if (transition.to.params) {
        this.data.to = transition.to.params.uid
        this.data.from = window.localStorage.getItem('uid')
        this.$http.post(Config.BASE_URL + Config.API.preMessages, {page: this.currentPage, uid: this.data.to}).then((response) => {
          // 保存至全局数组，这样是为了ws来消息了，同步更新这里
          store.messageList = this.messageList = response.json()
          // 更新分页
          this.currentPage = this.currentPage + 1
        })
        // 将该用户的未读消息全部设置为已读
        this.$http.post(Config.BASE_URL + Config.API.read, {uid: this.data.to}).then((response) => {
          // do nothing
        })
      }
    }
  },
  computed: {},
  ready: function () {
    $.init()
    $.refreshScroller()
    // 下拉刷新
    $(document).on('refresh', '.pull-to-refresh-content', (e) => {
      this.getMessages()
      $.pullToRefreshDone('.pull-to-refresh-content')
      $.refreshScroller()
    })
  },
  attached: function () {},
  methods: {
    scrollTop: function () {
      $('.chat-list').scrollTop(1000000)
    },
    getMessages: function () {
      this.$http.post(Config.BASE_URL + Config.API.preMessages, {page: this.currentPage, uid: this.data.to}).then((response) => {
        let messages = response.json()
        if (messages.length > 0) {
          this.messageList = messages.concat(this.messageList)
          this.currentPage = this.currentPage + 1
        }
      })
    },
    sendMsg: function () {
      $('.chat-list').scrollTop(1000000)
      if (this.data.message === '') {
        return
      }
      let data = {
        cmd: 'chat',
        data: this.data
      }
      if (ws.ws === undefined) {
        $.toast('聊天服务器连接失败')
        return
      }
      // 通过Websocket发送出去
      ws.ws.send(JSON.stringify(data))
      // 界面更新，发送消息在右边
      this.messageList.push({content: this.data.message, position: 'right'})
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
