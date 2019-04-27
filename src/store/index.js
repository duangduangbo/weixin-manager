import Vue from 'vue'
import Vuex from 'vuex'

import app from './module/app'
import userm from './module/userm'
import distribute from './module/distribute'
import order from './module/order'
import admin from './module/admin'
import goods from './module/goods'

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
    app,
    userm,
    distribute,
    order ,
    admin,
    goods
  }
})
