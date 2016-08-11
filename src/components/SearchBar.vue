<template>
<div class="content-padded">
<div class="searchbar row">
<div class="search-input col-80">
  <label class="icon icon-search" for="search"></label>
  <input type="search" id="search" v-model="keyword" placeholder="输入关键字...">
</div>
<a class="button button-fill button-primary col-20" id="searchbtn" @click="search">搜索</a>
</div>

</div>
</template>

<script>
export default {
  data: function () {
    return {
      keyword: ''
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {
    search: function () {
      if (this.keyword !== '') {
        this.$dispatch('doSearch', {keyword: this.keyword})
      }
    }
  },
  components: {}
}
</script>

<style lang="css">
</style>
