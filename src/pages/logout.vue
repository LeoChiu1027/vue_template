<template>
  <div>
    <v-container grid-list-lg fluid>
      <v-layout row wrap>
        <v-flex xs11 sm5 lg3 >
            logout successful, you can
            <router-link to="/login">login</router-link>
            here
         </v-flex>  
      </v-layout>

      <v-layout row wrap>
        <v-flex xs12 sm12 lg12>
        </v-flex>        
      </v-layout>
    </v-container>
  </div>
</template>

<script>

export default {
    components: {
    },
  data: () => ({
  }),
  methods:{
  }
};
</script>

<style scoped>
</style>
