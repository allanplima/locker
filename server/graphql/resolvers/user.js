import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import Authentication from './authentication'
import sendEmail from '../services/email'
import Generator from '../services/generators'
import Upload from '../services/upload'

const userResolvers = {
    Query: {
        async users(root, args, { prisma, request }, info) {

            const opArgs = {}

            if (args.query) {
                opArgs.where = {
                    id: args.query
                }
            }

            return prisma.query.users(opArgs, info)
        },
        async roles(root, args, { prisma }, info) {
            return prisma.query.users({ where: { id: args.id } }).logs()
        },
        async sessions (root, args, { prisma, currentUser }, info) {
            return prisma.query.sessions({ where: {
                user: {
                    id: currentUser.userId
                }
            }})
        },
        async userInfo(root, args, { prisma, currentUser }, info) {
            return prisma.query.user({ where: { id: currentUser.userId } })
        },
        async isThisSessionValid(root, args, { prisma, request, currentUser }, info) {
            let systemInfo = await Authentication.detectSystem(request.headers)
            
            let isValid = await Authentication.isThisSessionValid(prisma, systemInfo, currentUser)
            
            return {
                valid: isValid
            }

        }

    },
    Mutation: {
        async createUser(root, args, { prisma }, info) {
            const password = await Generator.hashPassword(args.data.password)       
            const user = await prisma.mutation.createUser({ data: {
                    ...args.data,
                    password
                }})
            
            const token = jwt.sign({ userId: user.id }, process.env.SECRETKEY, { expiresIn: '2h' })

            await Authentication.sendConfirmationEmail(user, `http://localhost:8080/email-confirmation?token=${token}`)
            
            return {
                user,
                token
            }
        },
        async deleteUser(root, args, { prisma }, info) {
            let userExists = await prisma.exists.User({ id: args.id })

            if(!userExists) {
                throw new Error("User does not exists")
            }
            return prisma.mutation.deleteUser({ where: { id: args.id } }, info)
        },
        async updateUser (root, args, { prisma, request }, info) {
            let userExists = await prisma.exists.User({ id: args.id }) 

            if (typeof args.data.password === 'string') {
                args.data.password = Generator.hashPassword(args.data.password)
            }

            if (!userExists) {
                throw new Error("This user does not exist")
            }

            let profilePicture = await args.data.profilePicture
            let file = await Upload(profilePicture)

            return prisma.mutation.updateUser({ 
                where: { id: args.id }, 
                data: { 
                    ...args.data,
                    profilePicture: file.url
                }
            }, info)
        },
        async loginUser(root, args, { prisma, request }, info) {
            if (args.password.length <= 0 || !args.email.includes("@")) {
                throw new Error("You must provide an email and a password")
            }
            const user = await prisma.query.user({ where: { email: args.email }})
            
            if (!user) {
                throw new Error("User does not exist")
            }

            const isMatch = await bcrypt.compare(args.password, user.password)
 
            if (!isMatch) {
                throw new Error("Username or email are invalid")
            }

            
            await Authentication.manageSession(prisma, request, user)
            await Authentication.emailIsVerified(user)
            let session = await Authentication.identifySession(prisma, request, user) // not the cookie

            request.session.user = {
                userId: user.id,
                createdAt: new Date(),
                sessionid: request.sessionID
            }
            
            const userPayload = {
                user: user,
                token: jwt.sign({ userId: user.id, roles: user.roles, sessionId: session.id }, process.env.SECRETKEY)
            }

            return userPayload
        },
        async logoutUser (root, args, { prisma, request, currentUser }, info) {
            if (!args.sessionId) {
                let session = await Authentication.identifySession(prisma, request, currentUser)

                if (session) {
                    await prisma.mutation.deleteSession({ where: { id: session.id } })
                        .catch(err => {
                            throw new Error("There's no session. Did you sent the correct data?")
                        })
                } 

                request.session.destroy(err => {
                    if (err) {
                        return {
                            loggedOut: false,
                            redirect: false
                        }
                    }
                })
                
            } else {
                await prisma.mutation.deleteSession({ where: { id: args.sessionId } })
            }

            return {
                loggedOut: true,
                redirect: "http://localhost:8080/login"
            }
        },
        async confirmEmail(root, args, { prisma, currentUser }, info) {
            let token = jwt.verify(args.token, process.env.SECRETKEY)

            if(!token) throw new Error("no token provided")

            let newUser = await prisma.mutation.updateUser(
                { 
                    where: { id: token.userId },
                    data: { emailVerified: true }
                }, 
                info)
                
                return newUser

        },
        async sendConfirmationEmailEmail(root, args, { prisma }, info) {
            if (!args.token || args.email) throw new Error("No token nor email provided")

            if (args.token) {
                let decoded = jwt.decode(args.token, process.env.SECRETKEY)
                var user = await prisma.query.user({ where: { id: decoded.userId } })
            }

            if (args.email) {
                var user = await prisma.query.user({ where: { email: args.email }})
            }
            
            const token = jwt.sign({ userId: user.id, email: user.email }, process.env.SECRETKEY, { expiresIn: '2h' })
            
            await Authentication.sendConfirmationEmail(user, `http://localhost:8080/email-confirmation?token=${token}`)
                .catch(err => {
                    return {
                        emailSent: false
                    }
                })

            
            return {
                emailSent: true
            }
        },
        async resetPassword(root, args, { prisma, currentUser }, info) {
            let user = prisma.query.users({ email: args.email })

            if (!user) { throw new Error("This email does not exists in our databases") }

            console.log(user)
            let token = jwt.sign({id: user.id, email: user.email}, process.env.SECRETKEY, { expiresIn: '1h' })

            await sendEmail("allanpinheirodelima@gmail.com", "allanpinheirodelima@gmail.com", "Reset seu password", `<a href="http://localhost:8080/reset-password?token=${token}">Reset password </a>`)

            return {
                redirect: "http://192.168.1.144:8080/"
            }
        },
        async setNewPasswordAtReset(root, args, { prisma, currentUser }, info) {
            let password = args.password
            let userId = currentUser.userId
            console.log(currentUser)
            const hashedPassword = await Generator.hashPassword(password)

            let user = await prisma.mutation.updateUser(
                { 
                    where: { user: { id: userId }},
                    data: {
                        password: hashedPassword
                    }
                }
            )
            
            if (!user) throw new Error('Something went wrong')

            return {
                passwordUpdated: true
            }
        }
    },
    User: {
        password () {
            return null
        }
    },
}

export { userResolvers as default }