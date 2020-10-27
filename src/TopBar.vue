<template>
  <v-app-bar
      app
      clipped-right
      flat
      height="72"
      color="primary"
  >
    <template v-if="isAuthenticated">
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
    </template>
  </v-app-bar>
</template>
<script>
export default {
  name: 'top-bar',
  computed: {
    isAuthenticated() {
      return this.$store.getters['auth/isAuthenticated']
    }
  }
}
</script>
