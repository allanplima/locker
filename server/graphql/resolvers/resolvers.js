import userResolvers from './user'

let specificResolvers = extractPersonalizedFieldResolver(userResolvers)

const resolvers = {
    ...specificResolvers,
    Query: {
        ...userResolvers.Query
    },
    Mutation: {
        ...userResolvers.Mutation
    }
}

function extractPersonalizedFieldResolver (obj) {
    for (let key in obj) {
        if (key !== "Query" && key !== "Mutation" && key !== "Subscription") {
            return { [key]:obj[key] }
        }
    }
}


export { resolvers as default }