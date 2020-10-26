const state = () => ({
   all: []
})

// getters
const getters = {}

// actions
const actions = {

    sendMessage({ dispatch }, {username, body}) {
        dispatch('channels/pushToChannel', {
            topic: 'message:new',
            payload: {name: username, body: body}
        }, {root: true})
    },

    subscribeNewMessage({ dispatch, commit }) {
        dispatch('channels/subscribeTopic', {
            topic: "message:new",
            callback: payload => {
                console.log(payload)
                commit('addMessage', payload)
            }
        }, {root: true})
    }

}

// mutations
const mutations = {
    addMessage (state, message) {
        state.all.push(message)
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

