import Vue from 'vue'
import Vuex from 'vuex'
import channels from "@/store/modules/channels";
import users from "@/store/modules/users";
import socket from "@/store/modules/socket";
import auth from "@/store/modules/auth"
import messages from "@/store/modules/messages";

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
    users,
    socket,
    auth,
    messages
  }
})
