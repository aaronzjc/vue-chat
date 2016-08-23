import {store} from './GlobalStore'

const ws = {
  // url: 'ws://chat.xyz.laravel:9501/?uid=',
  url: 'ws://chat.memosa.cn:9501/?uid=',
  ws: undefined,
  connect: function () {
    const _self = this
    let uid = window.localStorage.getItem('uid')
    let url = _self.url + uid
    _self.ws = new window.WebSocket(url)
    _self.ws.onopen = (event) => {
      console.log(event)
    }
    _self.ws.onmessage = (event) => {
      let response = JSON.parse(event.data)
      // 聊天界面更新消息
      store.messageList.push({
        content: response.message,
        position: 'left'
      })
      store.unread.cnt = store.unread.cnt + 1
      // 更新聊天的列表
      let flag = false
      for (let i in store.chatList) {
        if (store.chatList[i]['id'] === response.id) {
          flag = true
          store.chatList[i]['unreadCnt'] = store.chatList[i]['unreadCnt'] + response.unreadCnt
        }
      }
      if (flag === false) {
        store.chatList.push(response)
      }
    }
    _self.ws.onclose = () => {
      // todo
      console.log('连接被关闭了')
      // _self.connect()
      _self.ws = undefined
    }
  }
}
export {ws}
