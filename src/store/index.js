import { createStore } from 'vuex'
import {healthHub} from "./health_hub";
import {auth} from "./auth";

export default createStore({
  state: {
    spinner: false
  },
  mutations: {
    setSpinner(state, status){
      state.spinner = status
    }
  },
  getters: {
    spinner: state => state.spinner
  },
  actions: {
    openSpinner({commit}){
      commit('setSpinner', true)
    },
    closeSpinner({commit}){
      commit('setSpinner', false)
    }
  },
  modules: {
    health_hub: {
      ...healthHub
    },
    auth: {
      ...auth
    }
  }
})
