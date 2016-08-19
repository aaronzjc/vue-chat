<template>
  <div class="page page-current">
      <Tabar v-if="isIndex" :unread-cnt="store.unreadCnt"></Tabar>
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
      store: store
    }
  },
  events: {
    'updateUnread': function () {
      this.unreadCnt = store.unreadCnt
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
