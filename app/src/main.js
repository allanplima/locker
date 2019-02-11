import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import './registerServiceWorker'
import Moment from '@/plugins/moment/moment'
// import ApolloClient from 'apollo-boost'
// import { InMemoryCache } from 'apollo-cache-inmemory'
import VeeValidate from 'vee-validate'
import '@/assets/css/normalize.css'
import '@/assets/css/index.css'
import 'vue-awesome/icons'
// import 'vue-awesome/icons/brands'
import Icon from 'vue-awesome/components/Icon'
import AuthHandler from './plugins/AuthHandler/authHandler'

Vue.component('icon', Icon)

// APOLLO
import VueApollo from 'vue-apollo'
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { withClientState } from 'apollo-link-state';
import { ApolloLink, Observable } from 'apollo-link';
const { createUploadLink } = require('apollo-upload-client')

const request = async (operation) => {
  let token = localStorage.getItem('token')

  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : ""
    }
  })
}

const requestLink = new ApolloLink((operation, forward) =>
  new Observable(observer => {
    let handle;
    Promise.resolve(operation)
      .then(oper => request(oper))
      .then(() => {
        handle = forward(operation).subscribe({
          next: observer.next.bind(observer),
          error: observer.error.bind(observer),
          complete: observer.complete.bind(observer),
        });
      })
      .catch(observer.error.bind(observer));

    return () => {
      if (handle) handle.unsubscribe();
    };
  })
);

const apolloClient = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
        
      if(graphQLErrors[0].message === 'Not Authorised!') AuthHandler.logout()
    }),
    requestLink,
    new createUploadLink({
      uri: 'http://192.168.1.144:4000',
      credentials: 'include',
    })
  ]),
  cache: new InMemoryCache()
})


// const apolloClient = new ApolloClient({
//   uri: 'http://192.168.1.144:4000',
//   cache: new InMemoryCache(),
//   credentials: 'include',
//   request: (operation) => {
//     let token = localStorage.getItem('token')

//     operation.setContext({
//       headers: {
//         authorization: token ? `Bearer ${token}` : ""
//       }
//     })
//   },
//   onError: err => {
//     err.graphQLErrors.forEach(error => {
//       if(error.message === 'token or cookie expired' || error.message === 'Not Authorised!') {
//         AuthHandler.logout()
//       }

//     })
//   }
// })

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

Vue.config.productionTip = false

Vue.use(VueApollo)
Vue.use(VeeValidate)
Vue.use(Moment)

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
