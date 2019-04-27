import {
  adminlogin,
  adminlogout
} from '@/api/admin'
import { setToken, getToken } from '@/libs/util'

export default {
  state: {

  },
  mutations: {
   
  },
  getters: {
   },
  actions: {
   
    getadminlogin ({ state, commit },p) {
      return new Promise((resolve, reject) => {
        adminlogin(p).then((res) => {
          let data=res.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    getadminlogout ({ state, commit },p) {
      return new Promise((resolve, reject) => {
        adminlogout(p).then((res) => {
          let data=res.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
