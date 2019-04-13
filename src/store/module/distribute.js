import {
  listdistributor,
  adddistributor,
  removedistributor
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
        listdistributor(p).then((res) => {
          let data=res.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    getadddistributor ({ state, commit },p) {
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
        removedistributor(p).then((res) => {
          let data=res.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
  }
}
