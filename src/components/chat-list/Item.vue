<template>
<li>
  <div class="item-content">
    <div class="item-media"><img src="http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg" style='width: 2.2rem;'></div>
    <div class="item-inner">
      <div class="item-title-row">
        <div class="item-title">{{ user.name }}</div>
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
