<template>
<p-header title='编辑信息'>
  <button class="button button-link button-nav pull-left" @click="this.$router.go({'name': 'settings'})">
  <span class="icon icon-left"></span>
  返回
</button>
</p-header>
<div class="content">
  <div class="content-block-title">我的资料</div>
  <div class="list-block">
    <ul>
      <!-- Text inputs -->
      <li>
        <div class="item-content">
          <div class="item-media"><i class="icon icon-form-name"></i></div>
          <div class="item-inner">
            <div class="item-title label">姓名</div>
            <div class="item-input">
              <input type="text" placeholder="Your name" v-model="info.nickname">
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="item-content">
          <div class="item-media"><i class="icon icon-form-name"></i></div>
          <div class="item-inner">
            <div class="item-title label">用户名</div>
            <div class="item-input">
              <input type="text" placeholder="Your name" readonly="" v-model="info.username">
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="item-content">
          <div class="item-media"><i class="icon icon-form-name"></i></div>
          <div class="item-inner">
            <div class="item-title label">手机号</div>
            <div class="item-input">
              <input type="text" placeholder="Your name" v-model="info.mobile">
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="item-content">
          <div class="item-media"><i class="icon icon-form-gender"></i></div>
          <div class="item-inner">
            <div class="item-title label">性别</div>
            <div class="item-input">
              <select v-model="info.gender">
                <option value="1" :selected="info.gender === 1">男</option>
                <option value="0" :selected="info.gender === 0">女</option>
              </select>
            </div>
          </div>
        </div>
      </li>
      <li class="align-top">
        <div class="item-content">
          <div class="item-media"><i class="icon icon-form-comment"></i></div>
          <div class="item-inner">
            <div class="item-title label">签名</div>
            <div class="item-input">
              <textarea v-model="info.motto"></textarea>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div class="content-block">
    <a class="button button-big button-fill button-success" @click="saveInfo">保存信息</a>
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
</style>
