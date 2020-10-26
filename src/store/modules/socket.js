import {Socket} from "phoenix"

const state = () => ({
    socket:  null
})

// getters
const getters = {}

// actions
const actions = {
    init({ state, rootState }) {
        state.socket = new Socket("ws://localhost:4000/socket", {
            params: { user: rootState.auth.user }
        })

        state.socket.connect()
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
