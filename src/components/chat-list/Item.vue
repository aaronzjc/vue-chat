<template>
<li>
  <div class="item-content">
    <div class="item-media">
      <img :src="user.image_head" style='width: 2.2rem;'>
    </div>
    <div class="item-inner">
      <div class="item-title-row">
        <div class="item-title">{{ user.name }}</div>
      </div>
      <div class="item-subtitle">{{ user.subinfo }}</div>
      <span v-show="user.hasMessage" class="chat--badge">{{ user.unreadCnt }}</span>
    </div>

  </div>
</li>
</template>

<script>
export default {
  props: ['user'],
  data: function () {
    return {
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
.chat--badge {
  min-width: 1rem;
  height: 1rem;
  position: absolute;
  background: #f03;
  color:#fff;
  right:0.5rem;
  top: 50%;
  bottom: 50%;
  text-align: center;
  line-height: 1rem;
  font-size: 0.625rem;
  border-radius: 1rem 1rem 1rem 1rem;
}
</style>
