<template>
  <div class="home">
    <v-row v-for="message in messages" v-bind:key="message.id">
      <div>
        <!--            <div class="username">{{message.name}}</div>-->
        <v-avatar
            size="28"
            color="primary"
        ></v-avatar>
      </div>
      <div>
        <div class="content primary rounded-xl pa-2 px-4" style="max-width: 265px">
          <div v-html="message.body"></div>
        </div>
      </div>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  mounted() {
    this.$store.dispatch('socket/init')
        .then(() => {
          this.$store.dispatch('channels/init')
          this.$store.dispatch('messages/subscribeNewMessage')
        })
  },
  computed: {
    messages() {
      return this.$store.state.messages.all
    }
  }
}
</script>
