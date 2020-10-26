<template>
  <v-app>
    <side-bar/>

    <v-app-bar
        app
        clipped-right
        flat
        height="72"
        color="primary"
    >
      <v-spacer></v-spacer>

      <v-responsive max-width="156">
        <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
            prepend-inner-icon="mdi-magnify"
        ></v-text-field>
      </v-responsive>
    </v-app-bar>


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

export default {
  name: 'App',

  components: {
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
      this.$store.dispatch('messages/sendMessage', {username: this.$store.state.auth.user, body: this.messageBody})
      this.messageBody = ''
    }
  }
};
</script>
