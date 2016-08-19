<template>
<!-- 工具栏 -->
<nav class="bar bar-tab">
  <a class="tab-item external active" v-link="{path: '/chatlist', activeClass: 'active'}">
      <span class="icon icon-message"></span>
      <span class="tab-label">消息</span>
      <span v-show="hasMessage" class="badge">{{ unreadCnt }}</span>
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
import {store} from '../store/GlobalStore'

export default {
  data: function () {
    return {
      unreadCnt: store.unreadCnt
    }
  },
  computed: {
    hasMessage: function () {
      return store.unreadCnt > 0
    }
  }
}
</script>

<style lang="css">
</style>
