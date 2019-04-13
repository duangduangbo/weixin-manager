import {
  listorder,
  listdoorder,
  listundoorder
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
        listorder(p).then((res) => {
          let data=res.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    getlistdoorder ({ state, commit },p) {
      return new Promise((resolve, reject) => {
        listdoorder(p).then((res) => {
          let data=res.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    getlistundoorder ({ state, commit },p) {
      return new Promise((resolve, reject) => {
        listundoorder(p).then((res) => {
          let data=res.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
  }
}
