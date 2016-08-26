<template>
<li class="list-group-title">{{ group.title }}</li>
<li v-for="item in group.list">
  <div class="item-content">
    <div class="item-inner">
      <div @click="chat(item)" class="item-title contact-name">{{ item.nickname }}</div>
      <div class="item-motto">
        <i>🕓 </i>今天天气真好呀~
      </div>
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
  methods: {
    chat: function (item) {
      this.$router.go({name: 'chatbox', params: {uid: item.id}})
    }
  },
  components: {}
}
</script>

<style lang="css">
.item-title.contact-name {
  font-weight: 500;
  color:#315d94;
}
.item-content .item-motto {
  width: 60%;
  height: 1rem;
  text-overflow:ellipsis;
  white-space: nowrap;
  overflow: hidden;
  float: right;
  font-size: 0.8rem;
  font-family: consolas, sans-serif, monospace;
  font-weight: 400;
  color:#9ea2b5;
}
.item-content .item-motto i {
  font-style: normal;
  color:#8c85f3;

}
</style>
