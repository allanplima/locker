import shieldRules from '../resolvers/shieldRules'
import { shield, and } from 'graphql-shield'

const permissions = shield({
    Query: {
        users: shieldRules.isAuthenticated,
        sessions: shieldRules.isAuthenticated
    }
})

export { permissions as default }