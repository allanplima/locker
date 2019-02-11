import gql from 'graphql-tag'
import jwt from 'jsonwebtoken'
import router from '@/router'

var config = {
  loginUrl: 'http://localhost:8080/login',
  defaultAppPath: 'http://localhost:8080/home'
}

  export default {
    init: function (config) {
        if(!config) throw new Error('Please provide an init configuration')

        let token = localStorage.getItem('token')
                
        if(!token && router.history.current.matched.meta?.private) {
            
            if (location.href.includes('login')) return
            
            location.href = `${config.loginUrl}?redirect=${location.origin}${location.pathname}`
            return
        }

        if(location.href.includes('login') && token) {
            let params = new URLSearchParams(location.search.substring(1))

            let redirect = params.get('redirect')

            if(!redirect) {
                location.href = config.defaultAppPath
                return
            }

            location.href = redirect
        }
    },
    logout: async function (vm, sessionId) {
        let token = localStorage.getItem('token')
        let decoded = jwt.decode(token)
        
        await localStorage.removeItem('token')

        if (vm) {
            await vm.$apollo.mutate({
                mutation: gql`mutation ($sessionId: String!) {
                    logoutUser(sessionId: $sessionId) {
                        loggedOut
                        redirect
                    }
                }`,
                variables: {
                    sessionId: decoded.sessionId
                }
            })
        }

        if (location.pathname.includes('login')) return
            
        location.href = `${config.loginUrl}?redirect=${location.origin}${location.pathname}`
        return
    }
}



