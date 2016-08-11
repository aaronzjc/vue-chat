<template>
  <div class="content native-scroll">
  <div class="content-block-title">{{ title }}</div>
  <div class="list-block media-list">
    <ul>
      <Item @click="startChatting($index)" :user="user" v-for="user in chatList"></Item>
    </ul>
  </div>
  </div>
</template>

<script>
import Item from '../Item.vue'
import $ from 'zepto'

export default {
  props: ['title'],
  data: function () {
    return {
      chatList: [{name: '飘飘', subinfo: '今天天气好好哟~'}, {name: '叉叉', subinfo: '七夕快乐哈~'}]
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {
    startChatting: function (index) {
      $.toast(`开始和${this.chatList[index]['name']}聊天`)
      this.$router.go({name: 'chatting'})
    }
  },
  components: {
    Item
  }
}
</script>

<style lang="css">
</style>
