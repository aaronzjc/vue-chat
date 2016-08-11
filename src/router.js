export default function (router) {
  router.map({
    '*': {
      component: function (resolve) {
        require(['./views/login'], resolve)
      }
    },
    '/login': {
      name: 'login',
      component: function (resolve) {
        require(['./views/Login'], resolve)
      }
    },
    '/chats': {
      name: 'chats',
      component: function (resolve) {
        require(['./views/Chats'], resolve)
      }
    },
    '/friends': {
      name: 'friends',
      component: function (resolve) {
        require(['./views/Friends'], resolve)
      }
    },
    '/addFriend': {
      name: 'addFriend',
      component: function (resolve) {
        require(['./views/addFriend'], resolve)
      }
    },
    '/settings': {
      name: 'settings',
      component: function (resolve) {
        require(['./views/Settings'], resolve)
      }
    },
    '/chatting': {
      name: 'chatting',
      component: function (resolve) {
        require(['./views/chatting'], resolve)
      }
    },
    '/tabar': {
      component: function (resolve) {
        require(['./components/tabar'], resolve)
      }
    },
    '/hello': {
      name: 'hello',
      component: function (resolve) {
        require(['./views/Test'], resolve)
      }
    }
  })
}
