<template>
<li class="list-group-title">{{ group.title }}</li>
<li v-for="item in group.list">
  <div class="item-content">
    <div class="item-inner">
      <div class="item-title">{{ item.title }}</div>
    </div>
  </div>
</li>
</template>

<script>
export default {
  props: ['group'],
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
