<template>
<p-header title='好友'>
  <button class="button button-link button-nav pull-right" @click="this.$router.go({name:'addFriend'})">
    添加
  </button>
</p-header>
<Tabar></Tabar>
<group-list></group-list>
</template>

<script>
import Tabar from '../components/Tabar'
import PHeader from '../components/PHeader'
import GroupList from '../components/contact-list/GroupList.vue'

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
    GroupList
  }
}
</script>

<style lang="css">
</style>
