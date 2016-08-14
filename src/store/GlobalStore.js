const store = {
  messageList: [],
  unreadCnt: 0,
  updateUnread: function (cnt) {
    this.unreadCnt = cnt
    console.log('update called ' + cnt)
  }
}

export {store}
