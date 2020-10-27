<template>
  <v-app>
    <side-bar/>

    <top-bar/>


    <v-main>
      <v-container fluid>
        <router-view></router-view>


      </v-container>
    </v-main>

    <v-footer
        v-if="isAuthenticated"
        app
        color="transparent"
        height="72"
        inset
    >
      <v-text-field
          v-model="messageBody"
          v-on:keyup.enter="sendMessage"
          @click:append="sendMessage"
          background-color="grey lighten-1"
          dense
          flat
          hide-details
          rounded
          solo
          append-icon="send"
      ></v-text-field>
    </v-footer>
  </v-app>
</template>

<script>

import SideBar from "@/SideBar";
import TopBar from "@/TopBar";

export default {
  name: 'App',

  components: {
    TopBar,
    SideBar
  },

  data: () => ({
    messageBody: ''
  }),

  computed: {
    isAuthenticated() {
      return this.$store.getters['auth/isAuthenticated']
    }
  },

  methods: {
    sendMessage() {
      this.$store.dispatch('messages/sendMessage', {username: this.$store.state.auth.user.name, body: this.messageBody})
      this.messageBody = ''
    }
  }
};
</script>
