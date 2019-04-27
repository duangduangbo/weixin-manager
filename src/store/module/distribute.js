import {
  listdistributor,
  adddistributor,
  removedistributor,
  authorizedistributor,
  unauthorizedistributor,
  distributorparticulars,
  distributorupdate,
  distributorgetparent
} from '@/api/distribute'
import { setToken, getToken } from '@/libs/util'

export default {
  state: {

  },
  mutations: {
   
  },
  getters: {
   },
  actions: {
   
    getlistdistributor ({ state, commit },p) {
      return new Promise((resolve, reject) => {
        listdistributor({
          userToken:getToken()
        }).then((res) => {
          let data=res.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    getadddistributor ({ state, commit },p) {
      p={distributor:p,userToken:getToken()}
      return new Promise((resolve, reject) => {
        adddistributor(p).then((res) => {
          let data=res.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    getremovedistributor ({ state, commit },p) {

      return new Promise((resolve, reject) => {
        removedistributor({
          string:p,
          userToken:getToken()
        }).then((res) => {
          let data=res.data
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    },
    getauthorize ({ state, commit },p) {

      return new Promise((resolve, reject) => {
        authorizedistributor({
          string:p,
          userToken:getToken()
        }).then((res) => {
          let data=res.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    removeauthorize ({ state, commit },p) {

      return new Promise((resolve, reject) => {
        unauthorizedistributor({
          string:p,
          userToken:getToken()
        }).then((res) => {
          let data=res.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    distriparticulars ({ state, commit },p) {
      return new Promise((resolve, reject) => {
        distributorparticulars({
          string:p,
          userToken:getToken()
        }).then((res) => {
          let data=res.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    distributorupdate ({ state, commit },p) {
      p=Object.assign({distributor:p},{userToken:getToken()})
      return new Promise((resolve, reject) => {
        distributorupdate(p).then((res) => {
          let data=res.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // distributorgetparent
    distributorgetparent ({ state, commit },p) {
      p=Object.assign(p,{userToken:getToken()})
      return new Promise((resolve, reject) => {
        distributorgetparent(p).then((res) => {
          let data=res.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
  }
}
