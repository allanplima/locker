import dotenv from 'dotenv'
dotenv.config();
import prisma from "./prisma"
import { GraphQLServer, PubSub } from 'graphql-yoga'
import resolvers from './resolvers/resolvers'
import Authentication from './resolvers/authentication'
import session from 'express-session'
import ms from 'ms'
import { upload } from 'graphql-middleware-apollo-upload-server'
import uploadHandler from './services/upload'
import multer from 'multer'
const RedisStore = require('connect-redis')(session);
import { graphqlUploadExpress } from 'graphql-upload'
import shield from './permissions/userPermissions'



const server = new GraphQLServer({
    typeDefs: 'graphql/typeDefs/schema.graphql',
    resolvers,
    middlewares: [shield, upload({ uploadHandler })],
    context (incoming) {     
        return {
            prisma,
            PubSub,
            request: incoming.request,
            currentUser: Authentication.isAuthenticated(incoming.request)
        }
    }
})


// server.use(
//     multer({
//         storage: multer.memoryStorage()
//     })
//     .any(),
    // graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 })
// )


// DEFINES EXPRESS SESSION
server.express.use(
    session({
    name: 'sess',
    store: new RedisStore({
        host: '127.0.0.1',
        port: '6379'
    }),
    secret: 'gqGfwMn13fpQE3wVRmNk',
    resave: true,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: ms('7d')
    }
}))



// DEFINES SERVER OPTIONS
const options = {
    port: 4000,
    uploads: {
        maxFileSize: 10000000, 
        maxFiles: 10,
        maxFieldSize: 100000,
    },
    cors: {
        credentials: true,
        origin: ['http://localhost:8080']
    }
}

server.start(options, () => {
    console.log(`Server is online on http://localhost:${options.port}`)
})