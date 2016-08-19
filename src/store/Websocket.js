import {store} from './GlobalStore'

const ws = {
  url: 'ws://chat.xyz.laravel:9501/?uid=',
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
      store.messageList.push({
        content: response.message,
        position: 'left'
      })
      store.unreadCnt = store.unreadCnt + 1
      console.log(store)
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
