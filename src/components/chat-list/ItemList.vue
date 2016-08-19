<template>
  <div class="content native-scroll">
  <div class="content-block-title">{{ title }}</div>
  <div class="list-block media-list">
    <ul>
      <Item @click="chat(user.id)" :user="user" v-for="user in chatList"></Item>
    </ul>
  </div>
  </div>
</template>

<script>
import Item from './Item.vue'
import Config from '../../assets/js/config'
import {store} from '../../store/GlobalStore'

export default {
  props: ['title'],
  data: function () {
    return {
      chatList: []
    }
  },
  computed: {},
  created: function () {
    this.$http.get(Config.BASE_URL + Config.API.chatList).then((response) => {
      console.log(this.chatList)
      // 更新聊天列表--绑定数据到全局变量
      store.chatList = this.chatList = response.json().chatList
      // 更新全局消息未读数--绑定数据到全局变量
      store.unread.cnt = response.json().unreadCnt
    }, (response) => {
      if (response.status === 401) {
        // this.$router.go({naem: 'login'})
      }
      console.log('请求聊天列表失败')
    })
  },
  ready: function () {},
  attached: function () {},
  methods: {
    chat: function (uid) {
      this.$router.go({name: 'chatbox', params: {uid: uid}})
    }
  },
  components: {
    Item
  }
}
</script>

<style lang="css">
</style>
