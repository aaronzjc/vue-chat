<template>
<div class="chat-list">
<p-header title='消息'>
</p-header>
<chat-list title="未读消息"></chat-list>
</div>
</template>

<script>
import Tabar from '../components/Tabar'
import PHeader from '../components/PHeader'
import ChatList from '../components/chat-list/ItemList'

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
  created: function () {},
  ready: function () {},
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
