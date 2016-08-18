<template>
<div>
<p-header title='发现'>
</p-header>
<Tabar></Tabar>
<div class="content">
  <div class="content-block-title">个人信息</div>
  <div class="list-block media-list">
    <ul>
      <li>
        <a v-link="{name: 'editinfo'}" class="item-link item-content">
          <div class="item-media"><img :src="info.image_head" style='width: 4rem;'></div>
          <div class="item-inner">
            <div class="item-title-row">
              <div class="item-title">{{ info.nickname }}</div>
            </div>
            <div class="item-subtitle">用户名: {{ info.username }}</div>
            <div class="item-text">{{ info.motto }}</div>
          </div>
        </a>
      </li>
    </ul>
  </div>
  <div class="content-block-title">其他功能</div>
  <div class="list-block">
    <ul>
      <li class="item-content item-link">
        <div class="item-media"><i class="icon icon-f7"></i></div>
        <div class="item-inner">
          <div class="item-title">朋友圈</div>
        </div>
      </li>
      <li class="item-content item-link">
        <div class="item-media"><i class="icon icon-f7"></i></div>
        <div class="item-inner">
          <div class="item-title">摇一摇</div>
        </div>
      </li>
      <li class="item-content item-link" @click="this.$router.go({name: 'about'})">
        <div class="item-media"><i class="icon icon-f7"></i></div>
        <div class="item-inner">
          <div class="item-title">关于</div>
        </div>
      </li>
    </ul>
  </div>
  <div class="content-block">
    <a class="button button-big button-fill button-danger" @click="logout">退出登录</a>
  </div>
</div>
</div>
</template>

<script>
import Tabar from '../components/Tabar'
import PHeader from '../components/PHeader'
import Config from '../assets/js/config'

export default {
  data: function () {
    return {
      info: {}
    }
  },
  route: {
    data: function () {
      let info = window.localStorage.getItem('info')
      if (info) {
        this.info = JSON.parse(info)
      } else {
        const _self = this
        this.$http.get(Config.BASE_URL + Config.API.info).then((response) => {
          console.log(response.json())
          window.localStorage.setItem('info', JSON.stringify(response.json()))
          _self.info = response.json()
        })
      }
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {
    logout: function () {
      // 清除缓存和登录的数据
      window.localStorage.clear()
      this.$router.go({name: 'login'})
    }
  },
  components: {
    Tabar,
    PHeader
  }
}
</script>

<style lang="css">
.item-content .item-subtitle {
  height: 30px;
  line-height: 30px;
}
</style>
