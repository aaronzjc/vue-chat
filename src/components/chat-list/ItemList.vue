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

export default {
  props: ['title', 'chatList'],
  data: function () {
    return {}
  },
  computed: {},
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
