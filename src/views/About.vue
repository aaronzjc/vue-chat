<template>
<div>
<p-header title='关于'>
  <button class="button button-link button-nav pull-left" @click="this.$router.go({'name': 'settings'})">
  <span class="icon icon-left"></span>
  返回
</button>
</p-header>
<div class="content content-padded">
  <div class="main">
    <h3>Vue-Chat</h3>
    <p>个人学习项目<br/>@memosa</p>
  </div>
</div>
</div>
</template>

<script>
import PHeader from '../components/PHeader'
import Config from '../assets/js/config'
import $ from 'zepto'

export default {
  data: function () {
    return {
      info: {}
    }
  },
  computed: {},
  ready: function () {
    let info = JSON.parse(window.localStorage.getItem('info'))
    this.info = info
  },
  attached: function () {},
  methods: {
    saveInfo: function () {
      this.$http.post(Config.BASE_URL + Config.API.info, {info: this.info}).then((response) => {
        $.toast('保存成功')
        window.localStorage.setItem('info', JSON.stringify(response.json().user))
        this.info = response.json().user
      })
    }
  },
  components: {
    PHeader
  }
}
</script>

<style lang="css">
.main {
  text-align: center;
}
</style>
