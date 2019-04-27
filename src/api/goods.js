import axios from '@/libs/api.request'
import { getToken } from '../libs/util';
// 商品列表
export const listcommodity = (p) => {
  return axios.request({
    url: 'admin/listcommodity',
    method: 'post',
    data:p
  })
}
//// admin/inventoryWarning
// 库存
export const inventoryWarning = (p) => {
  return axios.request({
    url: 'admin/inventoryWarning',
    method: 'post',
    data:p
  })
}

// 添加商品分类
export const addcommodityclass = (p) => {
  return axios.request({
    url: 'admin/addcommodityclass',
    method: 'post',
    data:p
  })
}
// 查询分类

export const classlist = (p) => {

  return axios.request({
    url: 'admin/selectcommodityclass',
    method: 'post',
    data:p
  })
}
//删除分类
// /admin/removecommodityclass
// string ---id
export const removecommodityclass = (p) => {

  return axios.request({
    url: 'admin/removecommodityclass',
    method: 'post',
    data:p
  })
}
// admin/commodity/particulars
// 商品详情
export const commodityparticulars = (p) => {

  return axios.request({
    url: 'admin/commodity/particulars',
    method: 'post',
    data:p
  })
}
// 添加商品
export const addcommodity = (p) => {
 
  return axios.request({
    url: 'admin/addcommodity',
    method: 'post',
    data:p,
    headers:{
      // 'Content-Type':'application/octet-stream'//'multipart/form-data'
      'Content-Type':'multipart/form-data'
    }
  })
}
// s商品删除
// admin/removecommodity
export const removecommodity = (p) => {
  return axios.request({
    url: 'admin/removecommodity',
    method: 'post',
    data:p
  })
}
// s商品上架
// admin/removecommodity
export const commodityonline = (p) => {
  return axios.request({
    url: 'admin/commodity/online',
    method: 'post',
    data:p
  })
}
// s商品下架
// admin/removecommodity
export const commoditydownline = (p) => {
  return axios.request({
    url: 'admin/commodity/downline',
    method: 'post',
    data:p
  })
}
// 图片上传
export const sendpic = (p) => {
  return axios.request({
    url: 'admin/commodity/sendpic',
    method: 'post',
    data:p,
    responseType: 'blob',
    headers:{
      // 'Content-Type':'application/octet-stream'//'multipart/form-data'
      'Content-Type':'multipart/form-data'
    }
  })
}
// /admin/commodity/update
export const commodityupdate = (p) => {
  return axios.request({
    url: 'admin/commodity/update',
    method: 'post',
    data:p,
    headers:{
      'Content-Type':'multipart/form-data'
    }
  })
}