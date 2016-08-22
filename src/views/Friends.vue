<template>
<div>
<p-header title='好友'>
  <button class="button button-link button-nav pull-right" @click="this.$router.go({name:'addFriend'})">
    添加
  </button>
</p-header>
<group-list :groups="groups"></group-list>
</div>
</template>

<script>
import PHeader from '../components/PHeader'
import GroupList from '../components/contact-list/GroupList.vue'
import Config from '../assets/js/config'

export default {
  data: function () {
    return {
      groups: []
    }
  },
  computed: {},
  route: {
    data: function () {
      this.$http.get(Config.BASE_URL + Config.API.friend).then((response) => {
        this.groups = response.data
        window.localStorage.setItem('contact-list', JSON.stringify(response.data))
      }, (response) => {
        if (response.status === 401) {
          this.$router.go({name: 'login'})
        }
      })
    }
  },
  ready: function () {
    let contactList = window.localStorage.getItem('contact-list')
    this.groups = JSON.parse(contactList)
  },
  attached: function () {},
  methods: {},
  components: {
    PHeader,
    GroupList
  }
}
</script>

<style lang="css">
</style>
