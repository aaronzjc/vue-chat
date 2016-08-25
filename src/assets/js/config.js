export default {
  // BASE_URL: 'http://chat.xyz.laravel/api',
  BASE_URL: 'http://chat.memosa.cn/api',
  API: {
    // 登录
    login: '/auth/login',
    // 用户信息
    info: '/info',
    // 保存信息
    saveInfo: '/info',
    // 好友列表
    friend: '/friend',
    // 未读消息列表
    chatList: '/chat',
    // 聊天记录
    preMessages: '/messages',
    // 设置消息为已读
    read: '/read',
    // 检索好友
    searchFriend: '/friend/search',
    // 添加好友
    addFriend: '/friend/add'
  }
}
