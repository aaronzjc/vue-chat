<template>
<li>
  <div class="item-content">
    <div class="item-media">
      <img :src="user.image_head" style='width: 2.2rem;'>
    </div>
    <div class="item-inner">
      <div class="item-title-row">
        <div class="item-title">{{ user.name }}【{{ user.username }}】</div>
      </div>
      <div class="item-subtitle">{{ user.motto }}</div>
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
</style>
