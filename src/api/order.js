import axios from '@/libs/api.request'
// 订单列表
export const listorder = (p) => {
  return axios.request({
    url: 'listorder',
    method: 'post',
    data:p
  })
}
// 查看已处理订单
export const listdoorder = (p) => {
  return axios.request({
    url: 'listdoorder',
    method: 'post',
    data:p
  })
}
// 查看未处理订单
export const listundoorder = (p) => {
  return axios.request({
    url: 'listundoorder',
    method: 'post',
    data:p
  })
}

