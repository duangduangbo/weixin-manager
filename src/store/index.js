import Vue from 'vue'
import Vuex from 'vuex'

import user from './module/user'
import app from './module/app'
import userm from './module/userm'
import distribute from './module/distribute'
import order from './module/order'
import admin from './module/admin'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {
    //
  },
  modules: {
    user,
    app,
    userm,
    distribute,
    order ,
    admin
  }
})
