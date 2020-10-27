import auth from "@/api/auth";
import router from "@/router";

const state = () => ({
    user: {
        authenticated: false,
        name: Math.random().toString(36).substring(7),
        jwt_token: '',
        phoenix_token: ''
    },
})

// getters
const getters = {
    isAuthenticated(state) {
        return state.user.authenticated
    }
}

// actions
const actions = {
    login({state}, credentials) {
        return auth.login(this, {user: credentials}, '/')
            .then(resp => {
                state.user.jwt_token = resp.data.data
                state.user.phoenix_token = resp.data.phoenix_token
                state.user.authenticated = true

                router.push({path: '/'})
            })
    }
}

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

