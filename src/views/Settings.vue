<template>
<p-header title='设置'>
</p-header>
<Tabar></Tabar>
<div class="content">
  <div class="content-block-title">个人信息</div>
  <div class="list-block media-list">
    <ul>
      <li>
        <a href="#" class="item-link item-content">
          <div class="item-media"><img src="http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg" style='width: 4rem;'></div>
          <div class="item-inner">
            <div class="item-title-row">
              <div class="item-title">标题</div>
            </div>
            <div class="item-subtitle">标题</div>
            <div class="item-text">此处是文本内容...</div>
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
    </ul>
  </div>
</div>
</template>

<script>
import Tabar from '../components/Tabar'
import PHeader from '../components/PHeader'

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
    PHeader
  }
}
</script>

<style lang="css">
</style>
