const ws = {
  url: 'ws://chat.xyz.laravel:9501/?uid=',
  ws: undefined,
  connect: function (uid) {
    let url = this.url + uid
    this.ws = new window.WebSocket(url)
    this.ws.onopen = (event) => {
      console.log(event)
    }
    this.ws.onmessage = (event) => {
      console.log(event)
    }
    this.ws.onclose = () => {
      // todo
    }
  }
}
export {ws}
