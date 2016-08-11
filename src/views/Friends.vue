<template>
<p-header title='好友'>
  <button class="button button-link button-nav pull-right" @click="this.$router.go({name:'addFriend'})">
    添加
  </button>
</p-header>
<Tabar></Tabar>
<user-list></user-list>
</template>

<script>
import Tabar from '../components/Tabar'
import PHeader from '../components/PHeader'
import UserList from '../components/UserList'

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
    UserList
  }
}
</script>

<style lang="css">
</style>
