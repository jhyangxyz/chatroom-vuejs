<template>
  <v-navigation-drawer
      v-if="isAuthenticated"
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
</template>
<script>
export default {
  name: 'side-bar',
  data:() => {
    return {
      channels: [
        {
          title: 'channelName1',
        },
      ],
    }
  },
  computed: {
    users() {
      return this.$store.state.users.all
    },
    isAuthenticated() {
      return this.$store.getters['auth/isAuthenticated']
    }
  },
}
</script>
