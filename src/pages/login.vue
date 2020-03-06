<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Login"
                    name="username"
                    prepend-icon="person"
                    type="text"
                    v-model="model.username"
                  />

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                    v-model="model.password"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                 <v-btn color="primary" @click="login" :loading="loading">Login</v-btn>
                <!-- <v-btn color="primary" @click="callLogin" :loading="loading">Login</v-btn> -->
                {{formError}}
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import routes from '@/router/routes'

export default {
  data: () => ({
    loading: false,
    model: {
      username: "",
      password: "",
      stats: ""
    },
    formError: ''
  }),
  methods: {
    async login () {
      try {
        const data = await this.$store.dispatch('login', {
          username: this.model.username,
          password: this.model.password
        })
        
        if(this.$store.state.authUser){
          console.log('login success push home', this.$store.state.authUser);
          //this.$router.push({ path: '/home' }).catch(err => {});
          window.location.href = '/home'
        }
      } catch (e) {
        this.formError = e.message
      }
    },
    async logout () {
      try {
        await this.$store.dispatch('/logout')
      } catch (e) {
        this.formError = e.message
      }
    }
  }
};
</script>

<style scoped>
</style>
