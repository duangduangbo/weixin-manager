import axios from '@/libs/api.request'
// 分销商列表
export const listdistributor = (p) => {
  return axios.request({
    url: 'listdistributor',
    method: 'post',
    data:p
  })
}
// 添加分销商
export const adddistributor = (p) => {
  return axios.request({
    url: 'adddistributor',
    method: 'post',
    data:p
  })
}
// 删除分销商
export const removedistributor = (p) => {
  return axios.request({
    url: 'removedistributor',
    method: 'post',
    data:p
  })
}
