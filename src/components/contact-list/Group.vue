<template>
<li class="list-group-title">{{ group.title }}</li>
<li v-for="item in group.list">
  <div class="item-content">
    <div class="item-inner">
      <div @click="chat(item)" class="item-title">{{ item.nickname }}</div>
    </div>
  </div>
</li>
</template>

<script>
import $ from 'zepto'

export default {
  props: ['group'],
  data: function () {
    return {
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {
    chat: function (item) {
      $.toast('开始聊天')
      this.$router.go({name: 'chatbox', params: {uid: item.id}})
    }
  },
  components: {}
}
</script>

<style lang="css">
</style>
