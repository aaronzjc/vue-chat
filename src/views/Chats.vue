<template>
<p-header title='消息'>
</p-header>
<Tabar></Tabar>
<chat-list title="消息列表"></chat-list>
</template>

<script>
import Tabar from '../components/Tabar'
import PHeader from '../components/PHeader'
import ChatList from '../components/chat-list/ItemList'

export default {
  data: function () {
    return {
    }
  },
  computed: {},
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
