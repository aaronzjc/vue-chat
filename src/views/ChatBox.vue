<template>
<p-header title='聊天'>
  <button class="button button-link button-nav pull-left" @click="this.$router.go({'name': 'chatlist'})">
  <span class="icon icon-left"></span>
  返回
</button>
</p-header>
<div class="content native-scroll chat-list">
    <ul class="message-list">
      <li>
        <div class="message-item">
          <div class="message-content left">
            今天天气真好好~~~
          </div>
          <div class="clear"></div>
        </div>
      </li>
      <li>
        <div class="message-item">
          <div class="message-content left">
            使用swoole提供的open_eof_check/open_length_check/open_http_protocol，可以保证数据包的完整性
          </div>
          <div class="clear"></div>
        </div>
      </li>
      <li>
        <div class="message-item">
          <div class="message-content right">
            这是右边的消息
          </div>
          <div class="clear"></div>
        </div>
      </li>
      <li>
        <div class="message-item">
          <div class="message-content left">
            今天天气真好好~~~
          </div>
          <div class="clear"></div>
        </div>
      </li>
      <li>
        <div class="message-item">
          <div class="message-content left">
            今天天气真好好~~~
          </div>
          <div class="clear"></div>
        </div>
      </li>
      <li>
        <div class="message-item">
          <div class="message-content right">
            使用swoole提供的open_eof_check/open_length_check/open_http_protocol，可以保证数据包的完整性
          </div>
          <div class="clear"></div>
        </div>
      </li>
      <li>
        <div class="message-item">
          <div class="message-content right">
            这是右边的消息
          </div>
          <div class="clear"></div>
        </div>
      </li>
      <li>
        <div class="message-item">
          <div class="message-content left">
            今天天气真好好~~~
          </div>
          <div class="clear"></div>
        </div>
      </li>
      <li>
        <div class="message-item">
          <div class="message-content left">
            今天天气真好好~~~
          </div>
          <div class="clear"></div>
        </div>
      </li>
      <li>
        <div class="message-item">
          <div class="message-content left">
            使用swoole提供的open_eof_check/open_length_check/open_http_protocol，可以保证数据包的完整性
          </div>
          <div class="clear"></div>
        </div>
      </li>
      <li>
        <div class="message-item">
          <div class="message-content right">
            这是右边的消息
          </div>
          <div class="clear"></div>
        </div>
      </li>
      <li>
        <div class="message-item">
          <div class="message-content left">
            今天天气真好好~~~
          </div>
          <div class="clear"></div>
        </div>
      </li>
    </ul>
</div>
<div class="bar chat-input-box row">
    <div class="search-input col-80">
      <input type="search" placeholder='输入消息...'/>
    </div>
    <a class="button button-fill button-primary col-20">发送</a>
</div>
</template>

<script>
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
    PHeader
  }
}
</script>

<style lang="css">
.bar.chat-input-box {
  bottom: 0;
  background: #e7e7e7;
}
.bar.chat-input-box input {
  border-color: #fff;
}
.chat-list {
  margin-bottom: 2rem;
  background: #eee;
}
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
