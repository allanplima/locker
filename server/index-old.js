const { prisma } = require('./generated/prisma-client')

async function main () {
    // const newUser = await prisma.createUser({
    //     firstName: "Allan",
    //     lastName: "Lima",
    //     email: "allanpinheirodelima@gmail.com",
    //     emailVerified: false,
    //     logs: {
    //         create: [{
    //             resource: "prisma",
    //             operation: "delete"
    //         }]
    //     }
    // })
    // console.log(`Create new user ${newUser.name} (ID: ${newUser.id})`)

    // const allUsers = await prisma.users()

    // console.log(allUsers)

    const logsByUser = await prisma.users()

    console.log('those are all logs', logsByUser)
}

main().catch(e => console.log(e))