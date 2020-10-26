const state = () => ({
    status: {
        loggedIn: true
    },
    user: Math.random().toString(36).substring(7)
})

// getters
const getters = {}

// actions
const actions = {}

// mutations
const mutations = {
    addUser (state, { user }) {
        state.all.push(user)
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

