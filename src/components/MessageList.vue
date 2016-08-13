<template>
  <ul class="message-list">
    <li v-for="message in messageList">
      <div class="message-item">
        <div class="message-content {{ message.position }}">
          {{ message.content }}
        </div>
        <div class="clear"></div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['messageList'],
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
ul.message-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
ul.message-list .message-item {
  width: 100%;
  min-height: 1.8rem;
  height: auto;
  margin:15px 0px;
}
.message-content {
  max-width: 85%;
  border:1px solid #dadada;
  width: auto;
  height: auto;
  padding:0.15rem 0.25rem;
  font-size: 0.7rem;
  color:#fff;
  word-wrap: break-word;
  box-shadow: 2px 2px 3px #ccc;
}
.clear{
  clear: both;
}
.message-content.left {
  background: #0894EC;
  color:#fff;
  float: left;
  border-radius: 0px 4px 4px 0px;
  border-left-width: 0px;
}
.message-content.right {
  float: right;
  background: #00C48C;
  color:#fff;
  border-radius: 4px 0px 0px 4px;
  border-right-width: 0px;
}
</style>
