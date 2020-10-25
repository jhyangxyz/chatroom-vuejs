import Vue from 'vue'
import Vuex from 'vuex'
import channels from "@/store/modules/channels";
import users from "@/store/modules/users";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    channels,
    users
  }
})
