import { Presence} from "phoenix";

const formatTimestamp = (Ts) => {
    const date = new Date(parseInt(Ts))
    return date.toLocaleString()
}

const listBy = (user, {metas: metas}) => {
    console.log(user)
    console.log(metas)
    return {
        user: user,
        onlineAt: formatTimestamp(metas[0].online_at),
    }
}

// initial state
// shape: [{ id, quantity }]
const state = () => ({
    channel: null
})

// getters
const getters = {}

let presences = {}

// actions
const actions = {
    init({ state, dispatch }, socket) {

        state.channel = socket.channel('chat_room:lobby', {})

        state.channel.join()
            .receive("ok", () => {console.log("Joined successfully")})
            .receive("error", resp => { console.log("Unable to join", resp) })

        dispatch('listenForChats')
    },

    listenForChats({ state, rootState }) {
        state.channel.on("presence_state", presence_state => {
            presences = Presence.syncState(presences, presence_state)
            rootState.users.all = Presence.list(presences, listBy);
        })

        state.channel.on("presence_diff", presence_diff => {
            presences = Presence.syncDiff(presences, presence_diff)
            rootState.users.all = Presence.list(presences, listBy);
        })

        state.channel.on('message:new', payload => {
            console.log('message:new')
            console.log(payload)
        })
    }
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
