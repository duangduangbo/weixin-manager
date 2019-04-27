import {
  login,
  logout,
  home,
  // getUserInfo,
  // getMessage,
  // getContentByMsgId,
  // hasRead,
  // removeReaded,
  // restoreTrash,
  // getUnreadCount
} from '@/api/admin'
import { setToken, getToken } from '@/libs/util'

export default {
  state: {
    username: '',
    thisLoginIP:'',
    thisLoginTime:'',
    lastLoginIP:'',
    lastLoginTime:'',
    addTime:'',
    userId: '',
    avatarImgPath: 'https://file.iviewui.com/dist/a0e88e83800f138b94d2414621bd9704.png',
    userToken: getToken(),
    access: ['admin', 'distributor'],
    userType:[],//用户权限（判断用户可用什么界面）
    authority:0,//授权情况（是否拉黑
    isAdmin:1,
    unreadCount: 0,
    grade:0,//用户等级
    messageUnreadList: [],
    messageReadedList: [],
    messageTrashList: [],
    messageContentStore: {}
  },
  mutations: {
    setUserId (state, id) {
      state.userId = id
    },
    setusername (state, name) {
      state.username = name
    },
    setAccess (state, access) {
      state.access = access
    },
    setUserType (state, type) {
      state.userType = type
    },
    setToken (state, userToken) {
      state.userToken = userToken
      console.log(userToken)
      setToken(userToken)
    },
    setAuthority(state,data){
      state.authority=data
    },
    setGrade(state,data){
      state.grade=data
    },
    setIsAdmin(state,data){
      state.isAdmin=data
    },
    // setMessageCount (state, count) {
    //   state.unreadCount = count
    // },
    // setMessageUnreadList (state, list) {
    //   state.messageUnreadList = list
    // },
    // setMessageReadedList (state, list) {
    //   state.messageReadedList = list
    // },
    // setMessageTrashList (state, list) {
    //   state.messageTrashList = list
    // },
    // updateMessageContentStore (state, { msg_id, content }) {
    //   state.messageContentStore[msg_id] = content
    // },
    // moveMsg (state, { from, to, msg_id }) {
    //   const index = state[from].findIndex(_ => _.msg_id === msg_id)
    //   const msgItem = state[from].splice(index, 1)[0]
    //   msgItem.loading = false
    //   state[to].unshift(msgItem)
    // }
  },
  getters: {
    // messageUnreadCount: state => state.messageUnreadList.length,
    // messageReadedCount: state => state.messageReadedList.length,
    // messageTrashCount: state => state.messageTrashList.length
    getIsAdmin(state){
      console.log(state.isAdmin)
      return state.isAdmin
    }
  },
  actions: {
    // 登录
    handleLogin ({ commit }, { username, password,ip=1 }) {
      let Test={name:1,age:1}
      return new Promise((resolve, reject) => {
        login({
          username,
          password,
          ip
        }).then(res => {
          const data = res.data.data
          commit('setToken', data.userToken)
          commit('setusername', data.username)
          commit('setUserId', data.id)
          commit('setAuthority', data.authority)
          commit('setGrade', data.grade)
          let type=[],isAdmin=1
          if(data.id<100){
            type=['admin','distributor']
            isAdmin=1
          }else{
            type=['admin']
            isAdmin=0
          }
          commit('setUserType', type)
          commit('setIsAdmin', isAdmin)
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    },
    // 退出登录
    handleLogOut ({ state, commit }) {
      return new Promise((resolve, reject) => {
        logout(state.userToken).then(() => {
          commit('setToken', '')
          commit('setAccess', [])
          resolve()
        }).catch(err => {
          reject(err)
        })
        // 如果你的退出登录无需请求接口，则可以直接使用下面三行代码而无需使用logout调用接口
        // commit('setToken', '')
        // commit('setAccess', [])
        // resolve()
      })
    },
    getHome ({ state, commit },p) {
      return new Promise((resolve, reject) => {
        home({
          userToken:getToken()
        }).then((res) => {
          let data=res.data
          resolve(data)
        }).catch(err => {
          reject(err)
        })
      })
    },
    // 获取用户相关信息
    // getUserInfo ({ state, commit }) {
    //   let access={access:state.access}
    //   return access
    // },
    // // 此方法用来获取未读消息条数，接口只返回数值，不返回消息列表
    // getUnreadMessageCount ({ state, commit }) {
    //   getUnreadCount().then(res => {
    //     const { data } = res
    //     commit('setMessageCount', data)
    //   })
    // },
    // // 获取消息列表，其中包含未读、已读、回收站三个列表
    // getMessageList ({ state, commit }) {
    //   return new Promise((resolve, reject) => {
    //     getMessage().then(res => {
    //       const { unread, readed, trash } = res.data
    //       commit('setMessageUnreadList', unread.sort((a, b) => new Date(b.create_time) - new Date(a.create_time)))
    //       commit('setMessageReadedList', readed.map(_ => {
    //         _.loading = false
    //         return _
    //       }).sort((a, b) => new Date(b.create_time) - new Date(a.create_time)))
    //       commit('setMessageTrashList', trash.map(_ => {
    //         _.loading = false
    //         return _
    //       }).sort((a, b) => new Date(b.create_time) - new Date(a.create_time)))
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },
    // // 根据当前点击的消息的id获取内容
    // getContentByMsgId ({ state, commit }, { msg_id }) {
    //   return new Promise((resolve, reject) => {
    //     let contentItem = state.messageContentStore[msg_id]
    //     if (contentItem) {
    //       resolve(contentItem)
    //     } else {
    //       getContentByMsgId(msg_id).then(res => {
    //         const content = res.data
    //         commit('updateMessageContentStore', { msg_id, content })
    //         resolve(content)
    //       })
    //     }
    //   })
    // },
    // // 把一个未读消息标记为已读
    // hasRead ({ state, commit }, { msg_id }) {
    //   return new Promise((resolve, reject) => {
    //     hasRead(msg_id).then(() => {
    //       commit('moveMsg', {
    //         from: 'messageUnreadList',
    //         to: 'messageReadedList',
    //         msg_id
    //       })
    //       commit('setMessageCount', state.unreadCount - 1)
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },
    // // 删除一个已读消息到回收站
    // removeReaded ({ commit }, { msg_id }) {
    //   return new Promise((resolve, reject) => {
    //     removeReaded(msg_id).then(() => {
    //       commit('moveMsg', {
    //         from: 'messageReadedList',
    //         to: 'messageTrashList',
    //         msg_id
    //       })
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },
    // // 还原一个已删除消息到已读消息
    // restoreTrash ({ commit }, { msg_id }) {
    //   return new Promise((resolve, reject) => {
    //     restoreTrash(msg_id).then(() => {
    //       commit('moveMsg', {
    //         from: 'messageTrashList',
    //         to: 'messageReadedList',
    //         msg_id
    //       })
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // }
  }
}
