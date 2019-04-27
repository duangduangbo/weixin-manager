import axios from '@/libs/api.request'

export const login = ({ username, password,ip=1 }) => {
  const data = {
    username,
    password,
    ip
  }
  return axios.request({
    url: 'admin/login',
    data,
    method: 'post'
  })
}

// export const getUserInfo = (token) => {
//   return axios.request({
//     url: 'get_info',
//     params: {
//       token
//     },
//     method: 'get'
//   })
// }

export const logout = (token) => {
  return axios.request({
    url: 'admin/logout',
    method: 'post',
    data:{userToken:token}
  })
}
export const home = (p) => {
  return axios.request({
    url: 'admin/home',
    method: 'post',
    data:p
  })
}
// export const getUnreadCount = () => {
//   return axios.request({
//     url: 'message/count',
//     method: 'get'
//   })
// }

// export const getMessage = () => {
//   return axios.request({
//     url: 'message/init',
//     method: 'get'
//   })
// }

// export const getContentByMsgId = msg_id => {
//   return axios.request({
//     url: 'message/content',
//     method: 'get',
//     params: {
//       msg_id
//     }
//   })
// }

// export const hasRead = msg_id => {
//   return axios.request({
//     url: 'message/has_read',
//     method: 'post',
//     data: {
//       msg_id
//     }
//   })
// }

// export const removeReaded = msg_id => {
//   return axios.request({
//     url: 'message/remove_readed',
//     method: 'post',
//     data: {
//       msg_id
//     }
//   })
// }

// export const restoreTrash = msg_id => {
//   return axios.request({
//     url: 'message/restore',
//     method: 'post',
//     data: {
//       msg_id
//     }
//   })
// }
