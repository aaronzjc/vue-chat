export default function (router) {
  router.map({
    '*': {
      name: 'index',
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
    '/chatlist': {
      name: 'chatlist',
      auth: true,
      component: function (resolve) {
        require(['./views/ChatList'], resolve)
      }
    },
    '/friends': {
      name: 'friends',
      auth: true,
      component: function (resolve) {
        require(['./views/Friends'], resolve)
      }
    },
    '/addFriend': {
      name: 'addFriend',
      auth: true,
      component: function (resolve) {
        require(['./views/AddFriend'], resolve)
      }
    },
    '/settings': {
      name: 'settings',
      auth: true,
      component: function (resolve) {
        require(['./views/Settings'], resolve)
      }
    },
    '/editinfo': {
      name: 'editinfo',
      auth: true,
      component: function (resolve) {
        require(['./views/EditInfo'], resolve)
      }
    },
    '/about': {
      name: 'about',
      auth: true,
      component: function (resolve) {
        require(['./views/About'], resolve)
      }
    },
    '/chatbox/:uid': {
      name: 'chatbox',
      auth: true,
      component: function (resolve) {
        require(['./views/ChatBox'], resolve)
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
