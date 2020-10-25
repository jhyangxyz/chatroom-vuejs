const state = () => ({
    all: []
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

