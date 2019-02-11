import jwt from 'jsonwebtoken'
import AuthHandler from '../plugins/AuthHandler/authHandler'

export default {
    isAuthenticated: (to, from, next) => {
        const token = localStorage.getItem('token')
        
        if (!token) {
            return AuthHandler.logout()
        }

        return next()
    },
    isAdmin: (to, from, next) => {
        let token = localStorage.getItem('token')
        let decoded = jwt.decode(token)
        
        if(decoded.roles && decoded.roles.includes['admin']) {
            return next()
        }

        AuthHandler.logout()
    }
}