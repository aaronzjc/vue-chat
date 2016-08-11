<template>
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

</template>

<script>
import $ from 'zepto'
import PHeader from '../components/PHeader'
import SearchBar from '../components/SearchBar'
import Item from '../components/Item'

export default {
  data: function () {
    return {
      userList: [{name: 'Peter', subinfo: '我爱世界'}]
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {
    addFriend: function (index) {
      $.toast(this.userList[index]['name'] + '添加成功!')
    }
  },
  events: {
    'doSearch': function (msg) {
      $.toast(msg.keyword)
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
