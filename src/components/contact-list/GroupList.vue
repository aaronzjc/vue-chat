<template>
  <div class="content native-scroll">
    <div class="list-block contacts-block">
      <div class="list-group">
        <ul>
          <group :group="group" v-for="group in groups"></group>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Group from './Group.vue'

export default {
  props: ['groups'],
  data: function () {
    return {
      // groups: [{title: 'A', list: [{title: '阿武'}, {title: '吖'}, {title: '安格格'}]}, {title: 'C', list: [{title: '曹操'}]}]
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {
    Group
  }
}
</script>

<style lang="css">
</style>
