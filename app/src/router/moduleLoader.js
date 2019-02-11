const files = require.context('../../', true, /routes\.js/)
const modules = []
import Auth from './routeGuard'

files.keys().forEach(key => {
  if (!files(key).default) {
    throw new Error('Routes must have a route configuration defined on their creation')
  }

  if (files(key).default.meta?.private) {
    files(key).default.beforeEnter = Auth.isAuthenticated
  } 
  else if (files(key).default.meta?.admin) {
    files(key).default.beforeEnter = Auth.isAdmin
  } else {
    files(key).default.beforeEnter = ''
  }
  
  modules.push(files(key).default)

  // key.replace(/[A-z]+(?:\/routes\.js$)/, function (matched) {
  //   if (matched.match(/main/gi)) {
  //     modules[matched.replace(/\/routes\.js$/gi, '')] = files(key).default
  //   } else {
  //     modules.main.children.push(files(key).default)
  //   }
  // })
})

export default modules