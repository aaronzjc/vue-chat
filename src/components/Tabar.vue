<template>
<!-- 工具栏 -->
<nav class="bar bar-tab">
  <a class="tab-item external active" v-link="{path: '/chatlist', activeClass: 'active'}">
      <span class="icon icon-message"></span>
      <span class="tab-label">消息</span>
      <span v-show="unreadCnt > 0" class="badge">{{ unreadCnt }}</span>
  </a>
  <a class="tab-item external" v-link="{path: '/friends', activeClass: 'active'}">
      <span class="icon icon-friends"></span>
      <span class="tab-label">好友</span>
  </a>
  <a class="tab-item external" v-link="{path: '/settings', activeClass: 'active'}">
      <span class="icon icon-settings"></span>
      <span class="tab-label">发现</span>
  </a>
</nav>
</template>

<script>
export default {
  props: ['unreadCnt'],
  data: function () {
    return {}
  },
  computed: {}
}
</script>

<style lang="css">
</style>
