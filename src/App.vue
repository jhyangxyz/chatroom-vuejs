<template>
  <v-app>
    <v-navigation-drawer
        floating
        app
        permanent
        color="primary"
    >
      <v-card color="primary">
        <v-card-title>
          <v-avatar
              color="secondary"
              size="40"
          >
            <v-img src="https://picsum.photos/200"></v-img>
          </v-avatar>
          <span class="ml-3">Jeong-Heon</span>
        </v-card-title>
      </v-card>
      <v-card color="primary">
        <v-list
            dense
            nav
            rounded
            subheader
        >
          <v-subheader># Channels</v-subheader>

          <v-list-item
              v-for="channel in channels"
              :key="channel.title"
              link
          >
            <v-list-item-icon>
              <v-icon>#</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ channel.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list
            dense
            nav
            subheader
            rounded
        >
          <v-subheader># User</v-subheader>

          <v-list-item
              v-for="user in users"
              :key="user.user"
              link
          >
            <v-list-item-avatar>
              <v-img src="https://picsum.photos/150"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ user.user }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-navigation-drawer>

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
        app
        color="transparent"
        height="72"
        inset
    >
      <v-text-field
          background-color="grey lighten-1"
          dense
          flat
          hide-details
          rounded
          solo
          append-icon="md-send"
          @click:append="sendMessage"
      ></v-text-field>
    </v-footer>
  </v-app>
</template>

<script>
import socket from "@/plugins/socket";

export default {
  name: 'App',

  components: {
    // HelloWorld,
  },

  mounted() {
    this.$store.dispatch('channels/init', socket)
  },

  data: () => ({
    channels: [
      {
        title: 'channelName1',
      },
    ]
  }),

  computed: {
    users() {
      return this.$store.state.users.all
    }
  },

  methods: {
    sendMessage() {
      console.log('clicked')
    }
  }
};
</script>
