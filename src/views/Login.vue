<template>
  <div class="login">
    <v-layout justify-center>
      <v-flex xs5>
        <v-toolbar color="primary">
          <v-toolbar-title>
            Sign In using credentials
          </v-toolbar-title>
        </v-toolbar>
        <v-card>
          <v-form ref="form" lazy-validation   @submit.prevent="login" @keyup.native.enter="login">
            <v-container>
              <v-alert outlined color="error" icon="warning" v-if="error">{{ error }}</v-alert>
              <v-layout column>
                <v-text-field
                    label="Email"
                    required
                    v-model="credentials.email"
                    :error-messages="errors.email"
                ></v-text-field>
                <v-text-field
                    label="Password"
                    type="password"
                    required
                    v-model="credentials.password"
                    :error-messages="errors.password"
                ></v-text-field>
                <v-checkbox label="Remember Me"
                ></v-checkbox>
              </v-layout>
            </v-container>
          </v-form>
          <v-card-actions>
            <v-flex offset-xs2 mb-2>
              <v-btn text href="/vuetify/register">Register New User</v-btn>
              <v-btn color="primary" @click="login">Sign In</v-btn>
            </v-flex>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "Login.vue",
  data() {
    return {
      test: "user[email]=test@example.com&user[password]=secret1234&user[password_confirmation]=secret1234",
      credentials: {
        email: '',
        password: ''
      },
      error: '',
      errors: Object.assign({}, this.credentials)
    }
  },
  methods: {
    login() {
      console.log('Logging in')
      this._validateLoginForm()
      // eslint-disable-next-line no-unused-vars
      const credentials = {
        email: this.credentials.email,
        password: this.credentials.password
      }
      if(this.credentials.email && this.credentials.password){
        this.$store.dispatch('auth/login', this.credentials)
            .catch(error => {
              this.error = error.response.data.error.message
            })
        this.errors = { email: "", password: "" }
      }
    },
    _validateLoginForm() {
      this.error = ""
      if(!this.credentials.email && !this.credentials.password){
        this.errors = {
          email: "can't be blank",
          password: "can't be blank",
        }
        return
      }
      if(!this.credentials.email){
        this.errors = {
          email: "can't be blank",
          password: ""
        }
        return
      }
      if(!this.credentials.password){
        this.errors = {
          email: "",
          password: "can't be blank"
        }
        return
      }
    }
  }
}
</script>

<style scoped>

</style>
