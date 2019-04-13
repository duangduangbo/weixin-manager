import axios from '@/libs/api.request'
// 用户列表
export const listuser = (p) => {
  return axios.request({
    url: '/listuser',
    method: 'post',
    data:p
  })
}
// 删除用户
export const removeuser = (p) => {
  return axios.request({
    url: 'removeuser',
    method: 'post',
    data:p
  })
}
// 添加用户
export const adduser = (p) => {
  return axios.request({
    url: 'adduser',
    method: 'post',
    data:p
  })
}
// 更新用户
export const updateuser = (p) => {
  return axios.request({
    url: 'updateuser',
    method: 'post',
    data:p
  })
}
