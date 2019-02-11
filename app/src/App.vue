<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import gql from 'graphql-tag'
import authHandler from '@/plugins/AuthHandler/authHandler'

export default {
  created: function () {
    authHandler.init({
      loginUrl: 'http://localhost:8080/login',
      defaultAppPath: 'http://localhost:8080/home'
    })
  },
  apollo: {
      isThisSessionValid: gql`query {
              isThisSessionValid {
                  valid
              }
      }`
  },
  mounted: async function () {
    let isThisSessionValid = await this.$apollo.queries.isThisSessionValid.refetch()
    
    if(!isThisSessionValid.data.isThisSessionValid.valid && this.$route.meta.private) {
        return authHandler.logout()
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Graphik';
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
