const axios = require('axios');

const { SCHEME, HOSTNAME } =
    process.env.NODE_ENV === 'production'
        ? {SCHEME: 'https', HOSTNAME: window.location.hostname}
        : {SCHEME: 'http', HOSTNAME: 'localhost:4000'}

const API_URL = `${SCHEME}://${HOSTNAME}/api/v1`
// const REGISTRATION_URL = `${API_URL}/registrations/`
const SESSION_URL = `${API_URL}/session`
// const CURRENT_USER_URL = `${API_URL}/current_user/`

export default {
    login (context, creds, ) {
        return axios.post(SESSION_URL, creds)
    },

    // currentUser (context) {
    //     axios.get(CURRENT_USER_URL, {headers: this.getAuthHeader()})
    //         .then(resp => {
    //             context.user = resp.body.user
    //         }, () => {
    //             window.localStorage.removeItem('id_token')
    //             this.user.authenticated = false
    //             router.push({
    //                 path: '/login',
    //                 query: {redirect: context.$route.fullPath}
    //             })
    //         })
    // },
    //
    // signup (context, creds, redirect) {
    //     axios.post(REGISTRATION_URL, creds)
    //         .then(resp => {
    //             window.localStorage.setItem('id_token', resp.body.jwt)
    //             this.user.authenticated = true
    //
    //             if (redirect) {
    //                 context.$router.push({path: redirect})
    //             }
    //         }, resp => {
    //             console.log(resp.body.errors)
    //             context.errors = resp.body.errors
    //         })
    // },
    //
    // logout (context, options) {
    //     axios.delete(SESSION_URL, options)
    //         // eslint-disable-next-line no-unused-vars
    //         .then(data => {
    //             window.localStorage.removeItem('id_token')
    //             this.user.authenticated = false
    //             context.$router.push({path: '/login'})
    //         }, error => {
    //             console.log(error.message)
    //         })
    // },
    //
    // checkAuth () {
    //     const jwt = window.localStorage.getItem('id_token')
    //     this.user.authenticated = !!jwt
    // },
    //
    // getAuthHeader () {
    //     return {
    //         'Authorization': window.localStorage.getItem('id_token')
    //     }
    // }
}
