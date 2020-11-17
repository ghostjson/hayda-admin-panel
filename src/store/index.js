import { createStore } from 'vuex'
import {healthHub} from "./health_hub";

export default createStore({
  state: {
    spinner: false
  },
  mutations: {
    setSpinner(state, status){
      state.spinner = status
    }
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
    }
  }
})