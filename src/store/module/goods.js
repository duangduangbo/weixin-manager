import {
  listcommodity,
  addcommodityclass,
  addcommodity,
  removecommodity,
  sendpic,
  inventoryWarning,
  classlist,
  removecommodityclass,
  commodityparticulars,
  commodityonline,
  commoditydownline,
  commodityupdate
} from '@/api/goods'
import { setToken, getToken } from '@/libs/util'

export default {
  state: {

  },
  mutations: {
   
  },
  getters: {
   },
  actions: {
   
    getlistcommodity ({ state, commit },p) {
      console.log(getToken())
      return new Promise((resolve, reject) => {
        listcommodity({
          userToken:getToken()
        }).then((res) => {
          let data=res.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    getaddcommodityclass ({ state, commit },p) {
      p=Object.assign(p,{userToken:getToken()})
      return new Promise((resolve, reject) => {
        addcommodityclass(p).then((res) => {
          let data=res.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    getaddcommodity ({ state, commit },p) {
      // p={...p,userToken:getToken()}
      return new Promise((resolve, reject) => {
        addcommodity(p).then((res) => {
          let data=res.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    getremovecommodity ({ state, commit },p) {
      return new Promise((resolve, reject) => {
        removecommodity({
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
    getsendpic ({ state, commit },p) {
      return new Promise((resolve, reject) => {
        sendpic(p).then((res) => {
          let data=res.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    getcommodityonline ({ state, commit },p) {
      p={
        string:p,
        userToken:getToken()
      }
      return new Promise((resolve, reject) => {
        commodityonline(p).then((res) => {
          let data=res.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },

    getcommoditydownline ({ state, commit },p) {
      p={
        string:p,
        userToken:getToken()
      }
      return new Promise((resolve, reject) => {
        commoditydownline(p).then((res) => {
          let data=res.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },

    getcommodityparticulars ({ state, commit },p) {
      p={ userToken:getToken() ,string:p }
      return new Promise((resolve, reject) => {
        commodityparticulars(p).then((res) => {
          let data=res.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },


    getremovecommodityclass({ state, commit },p) {
      p={ userToken:getToken() ,string:p }
      return new Promise((resolve, reject) => {
        removecommodityclass(p).then((res) => {
          let data=res.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },

    getclasslist({ state, commit },p) {
      p={userToken:getToken()}
      return new Promise((resolve, reject) => {
        classlist(p).then((res) => {
          let data=res.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },

    getinventoryWarning({ state, commit },p) {
      p={userToken:getToken()}
      return new Promise((resolve, reject) => {
        inventoryWarning(p).then((res) => {
          let data=res.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // commodityupdate
    commodityupdate({ state, commit },p) {
      // p={userToken:getToken()}
      return new Promise((resolve, reject) => {
        commodityupdate(p).then((res) => {
          let data=res.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
  }
}
