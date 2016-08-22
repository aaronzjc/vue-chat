<template>
  <div class="page page-current">
      <Tabar v-if="isIndex" :unread-cnt="unreadCnt.cnt"></Tabar>
      <router-view transition="fade" transition-mode="out-in"></router-view>
  </div>
</template>

<script>
import Tabar from './components/Tabar'
import {store} from './store/GlobalStore'

export default {
  data () {
    return {
      isIndex: true,
      unreadCnt: store.unread
    }
  },
  components: {
    Tabar
  }
}
</script>
<style>
.fade-transition {
  transition: opacity .15s ease;
}
.fade-enter, .fade-leave {
  opacity: 0;
}
</style>
