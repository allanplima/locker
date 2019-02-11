import Dates from '../services/dates'
import { rule } from 'graphql-shield'

export default {
    isAuthenticated: rule()(async (root, args, { prisma, request, currentUser }, info) => {
        if (!request.session.user) return false
        
        if (currentUser.userId !== request.session.user.userId) return false

        // Verifies expiration dates
        let expiration = new Date().getTime() + request.session.cookie.originalMaxAge

        if(!Dates.inRange(new Date(), request.session.user.createdAt, expiration)) {
            await request.session.destroy()
            throw new Error('token or cookie expired')
        }

        return true
    }),
    isAdmin: rule()(async (root, args, { currentUser }, info) => {
        if(!currentUser.roles || !currentUser.roles.includes['admin']) return false

        return true
    })
}