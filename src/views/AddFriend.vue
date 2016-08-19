<template>
<div>
<p-header title="添加好友">
<button class="button button-link button-nav pull-left" @click="this.$router.go({name: 'friends'})">
  <span class="icon icon-left"></span>
  返回
</button>
</p-header>
<div class="content native-scroll">
  <search-bar></search-bar>
<div class="content-block-title">检索结果</div>
<div class="list-block media-list todo-items">
    <ul>
      <Item @click="addFriend($index)" :user="user" v-for="user in userList"></Item>
    </ul>
</div>
</div>
</div>
</template>

<script>
import $ from 'zepto'
import PHeader from '../components/PHeader'
import SearchBar from '../components/SearchBar'
import Item from '../components/Item'
import Config from '../assets/js/config'

export default {
  data: function () {
    return {
      userList: []
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {
    addFriend: (index) => {
      let i = index
      $.confirm('确定添加好友？', '提示', () => {
        let user = this.userList[i]
        let uid = window.localStorage.getItem('uid')
        if (parseInt(uid) === parseInt(user['id'])) {
          $.toast('不能添加自己为好友')
          return false
        }
        this.$http.post(Config.BASE_URL + Config.API.addFriend, {friend: user['id']}).then((response) => {
          if (response.json().success) {
            $.toast('添加成功')
          } else {
            $.toast(response.json().msg)
          }
        })
      })
    }
  },
  events: {
    'doSearch': function (msg) {
      this.$http.post(Config.BASE_URL + Config.API.searchFriend, {keyword: msg.keyword}).then((response) => {
        this.userList = response.json()
      })
    }
  },
  components: {
    PHeader,
    SearchBar,
    Item
  }
}
</script>

<style lang="css">
</style>
