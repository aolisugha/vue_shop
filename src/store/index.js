import Vue from 'vue'
import Vuex from 'vuex'
import vuexPersist from "vuex-persist"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginData:''
  },
  mutations: {
    initLoginData(state,data){
      state.loginData = data
    }
  },
  actions: {
  },
  modules: {
  },
  plugins:[
  new vuexPersist({
  Storage: window.localStorage
  }).plugin
  ]
})
