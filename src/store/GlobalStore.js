const store = {
  messageList: [], // 保存当前用户的聊天消息
  chatList: [], // 这里保存用户的聊天列表，用来更新未读消息数
  unreadCnt: 0,
  updateUnread: function (cnt) {
    this.unreadCnt = cnt
    console.log('update called ' + cnt)
  }
}

export {store}
