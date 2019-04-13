import axios from '@/libs/api.request'
// denglu
export const adminlogin = (p) => {
  return axios.request({
    url: 'adminlogin',
    method: 'post',
    data:p
  })
}
// 注销
export const adminlogout = (p) => {
  return axios.request({
    url: 'adminlogout',
    method: 'post',
    data:p
  })
}
