import {Socket} from "phoenix"

const state = () => ({
    socket:  null,
    connected: false
})

// getters
const getters = {}

// actions
const actions = {
    init({ state, rootState }) {
        if (!state.connected) {
            state.connected = true
            state.socket = new Socket("ws://localhost:4000/socket", {
                params: {
                    token: rootState.auth.user.phoenix_token
                }
            })

            state.socket.connect()
        }
    },
}

// mutations
const mutations = {}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
