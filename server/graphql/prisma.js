import { Prisma } from 'prisma-binding'
var typeDefs = require("../generated/prisma-client/prisma-schema").typeDefs;

const prisma = new Prisma({
    typeDefs,
    endpoint: 'http://localhost:4466',
    secret: "zyoenwmrzpylxltqobyx"
})

export { prisma as default }