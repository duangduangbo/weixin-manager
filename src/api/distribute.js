import axios from '@/libs/api.request'
// 分销商列表
export const listdistributor = (p) => {
  return axios.request({
    url: 'admin/listdistributor',
    method: 'post',
    data:p
  })
}
// 添加分销商
export const adddistributor = (p) => {
  return axios.request({
    url: 'admin/adddistributor',
    method: 'post',
    data:p
  })
}
// 删除分销商
export const removedistributor = (p) => {
  return axios.request({
    url: 'admin/removedistributor',
    method: 'post',
    data:p
  })
}
// 授权
export const authorizedistributor = (p) => {
  return axios.request({
    url: 'admin/authorizedistributor',
    method: 'post',
    data:p
  })
}

// 取消授权
export const unauthorizedistributor = (p) => {
  return axios.request({
    url: 'admin/unauthorizedistributor',
    method: 'post',
    data:p
  })
}
// 分销商详情		/admin/distributor/particulars			UserTokenOne，string为分销商id		
export const distributorparticulars = (p) => {
  return axios.request({
    url: 'admin/distributor/particulars	',
    method: 'post',
    data:p
  })
}
	
export const distributorupdate = (p) => {
  return axios.request({
    url: '/admin/distributor/update',
    method: 'post',
    data:p
  })
}
// /admin/distributor/getparent		根据等级返回父级分销商	
export const distributorgetparent = (p) => {
  return axios.request({
    url: '/admin/distributor/getparent',
    method: 'post',
    data:p
  })
}
