import {
  listorder,
  listdoorder,
  listundoorder,
  listpart,
  listsend,
  rentorderlist,
  rentorderparticulars,
  rentorderdo,
  rentorderundo,
  rentordersend
} from '@/api/order'
import { setToken, getToken } from '@/libs/util'

export default {
  state: {

  },
  mutations: {
   
  },
  getters: {
   },
  actions: {
   
    getlistorder ({ state, commit },p) {
      return new Promise((resolve, reject) => {
        listorder({
          userToken:getToken()
        }).then((res) => {
          let data=res.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    getlistdoorder ({ state, commit },p) {
      return new Promise((resolve, reject) => {
        listdoorder({
          userToken:getToken()
        }).then((res) => {
          let data=res.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    getlistundoorder ({ state, commit },p) {
      return new Promise((resolve, reject) => {
        listundoorder({
          userToken:getToken()
        }).then((res) => {
          let data=res.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    getlistpart ({ state, commit },p) {
      return new Promise((resolve, reject) => {
        listpart({
          userToken:getToken(),
          string:p
        }).then((res) => {
          let data=res.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    getlistsend ({ state, commit },p) {
      return new Promise((resolve, reject) => {
        listsend({
          userToken:getToken(),
          string:p
        }).then((res) => {
          let data=res.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    getrentorderlist ({ state, commit },p) {
      return new Promise((resolve, reject) => {
        rentorderlist({
          userToken:getToken()
        }).then((res) => {
          let data=res.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    getrentorderparticulars ({ state, commit },p) {
      return new Promise((resolve, reject) => {
        rentorderparticulars({
          userToken:getToken(),
          string:p
        }).then((res) => {
          let data=res.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    getrentorderdo ({ state, commit },p) {
      return new Promise((resolve, reject) => {
        rentorderdo({
          userToken:getToken()
        }).then((res) => {
          let data=res.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    getrentorderundo ({ state, commit },p) {
      return new Promise((resolve, reject) => {
        rentorderundo({
          userToken:getToken()
        }).then((res) => {
          let data=res.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    getrentordersend ({ state, commit },p) {
      return new Promise((resolve, reject) => {
        rentordersend({
          userToken:getToken(),
          string:p
        }).then((res) => {
          let data=res.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
  }
}
