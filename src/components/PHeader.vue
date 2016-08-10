<template>
<header class="bar bar-nav">
  <slot></slot>
  <h1 class="title">{{ title }}</h1>
</header>
</template>

<script>
export default {
  props: ['title'],
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
