import axios from '@/libs/api.request'
// 订单列表
export const listorder = (p) => {
  return axios.request({
    url: 'admin/listorder',
    method: 'post',
    data:p
  })
}
// 查看已处理订单
export const listdoorder = (p) => {
  return axios.request({
    url: 'admin/listdoorder',
    method: 'post',
    data:p
  })
}
// 查看未处理订单
export const listundoorder = (p) => {
  return axios.request({
    url: 'admin/listundoorder',
    method: 'post',
    data:p
  })
}
// /admin/listorder/particulars
// 订单详情
export const listpart = (p) => {
  return axios.request({
    url: 'admin/listorder/particulars',
    method: 'post',
    data:p
  })
}
// /admin/order/send
// 商品发货
export const listsend = (p) => {
  return axios.request({
    url: 'admin/order/send',
    method: 'post',
    data:p
  })
}
// 租赁订单列表		/admin/rentorder/list			UserToken	
export const rentorderlist = (p) => {
  return axios.request({
    url: 'admin/rentorder/list',
    method: 'post',
    data:p
  })
}
// 租赁订单详情 		/admin/rentorder/particulars			UserTokenOne，string为订单id		
export const rentorderparticulars = (p) => {
  return axios.request({
    url: 'admin/rentorder/particulars',
    method: 'post',
    data:p
  })
}
// 查看已处理租赁订单		/admin/rentorder/do			UserToken		
export const rentorderdo = (p) => {
  return axios.request({
    url: 'admin/rentorder/do',
    method: 'post',
    data:p
  })
}
// 查看未处理订单		/admin/rentorder/undo			UserToken		
export const rentorderundo = (p) => {
  return axios.request({
    url: 'admin/rentorder/undo	',
    method: 'post',
    data:p
  })
}
// 租赁物品发货		/admin/rentorder/send			UserTokenOne，string为订单id		
export const rentordersend = (p) => {
  return axios.request({
    url: 'admin/rentorder/send',
    method: 'post',
    data:p
  })
}