import {
  listuser,
  removeuser,
  adduser,
  updateuser,
  particulars,
  
} from '@/api/userm'
import { setToken, getToken } from '@/libs/util'

export default {
  state: {

  },
  mutations: {
   
  },
  getters: {
   },
  actions: {
   
    getlistuser ({ state, commit },p) {
      console.log(getToken())
      return new Promise((resolve, reject) => {
        listuser({
          userToken:getToken()
        }).then((res) => {
          let data=res.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    getremoveuser ({ state, commit },p) {
      p={string:p,userToken:getToken()}
      return new Promise((resolve, reject) => {
        removeuser(p).then((res) => {
          let data=res.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    getadduser ({ state, commit },p) {
      return new Promise((resolve, reject) => {
        adduser(p).then((res) => {
          let data=res.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    getupdateuser ({ state, commit },p) {
      p=Object.assign(p,{userToken:getToken()})
      return new Promise((resolve, reject) => {
        updateuser(p).then((res) => {
          let data=res.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    getuserparticulars ({ state, commit },p) {
      p={
        userToken:getToken(),
        string:p
      }
      return new Promise((resolve, reject) => {
        particulars(p).then((res) => {
          let data=res.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
  }
}
