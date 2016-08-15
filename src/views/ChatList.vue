<template>
<p-header title='聊天'>
</p-header>
<Tabar></Tabar>
<chat-list :chat-list="chatList" title="未读消息"></chat-list>
</template>

<script>
import Tabar from '../components/Tabar'
import PHeader from '../components/PHeader'
import ChatList from '../components/chat-list/ItemList'
import Config from '../assets/js/config'
import {store} from '../store/GlobalStore'

export default {
  data: function () {
    return {
      chatList: []
    }
  },
  route: {
    data: function () {
    }
  },
  computed: {},
  created: function () {
    console.log('created')
    const _self = this
    this.$http.get(Config.BASE_URL + Config.API.chatList).then((response) => {
      _self.chatList = response.json().chatList
      // 更新全局消息未读数
      store.updateUnread(response.json().unreadCnt)
      _self.$broadcast('updateUnread')
      window.localStorage.setItem('chat-list', JSON.stringify(response.json().chatList))
    }, (response) => {
      console.log('请求聊天列表失败')
    })
  },
  ready: function () {
    console.log('ready')
    this.chatList = JSON.parse(window.localStorage.getItem('chat-list'))
  },
  attached: function () {},
  methods: {},
  components: {
    Tabar,
    PHeader,
    ChatList
  }
}
</script>

<style lang="css">
</style>
