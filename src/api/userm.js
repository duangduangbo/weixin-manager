import axios from '@/libs/api.request'
// 用户列表
export const listuser = (p) => {
  return axios.request({
    url: 'admin/listuser',
    method: 'post',
    data:p
  })
}
// 删除用户
export const removeuser = (p) => {
  return axios.request({
    url: 'admin/removeuser',
    method: 'post',
    data:p
  })
}
// 添加用户
export const adduser = (p) => {
  return axios.request({
    url: 'admin/adduser',
    method: 'post',
    data:p
  })
}
// 更新用户
export const updateuser = (p) => {
  return axios.request({
    url: 'admin/updateuser',
    method: 'post',
    data:p
  })
}
// admin/user/particulars
// 用户详情
export const particulars = (p) => {
  return axios.request({
    url: 'admin/user/particulars',
    method: 'post',
    data:p
  })
}
