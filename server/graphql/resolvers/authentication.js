import jwt from 'jsonwebtoken'
import Sniffr from 'sniffr'
import sendEmail from '../services/email'
import emailTemplate from '../templates/email/login'
import confirmEmailTemplate from '../templates/email/confirmEmail'

const authentication = {
    isAuthenticated (request) {
        const authHeader = request.headers.authorization

        if (authHeader) {
            const token = authHeader.replace('Bearer ', "")
            const decoded = jwt.verify(token, process.env.SECRETKEY)
            return { userId: decoded.userId, roles: decoded.roles }
        }

        return { 
            endpointType: 'public',
            user: 'guest'
        }
    },
    async manageSession (prisma, request, user) {
        const systemInfo = await this.detectSystem(request.headers)
        
        let isThisSessionValid = await this.isThisSessionValid(prisma, systemInfo, user)
        if (!isThisSessionValid) {
            // SE A SESSÃO NÃO FOR RECONHECIDA
            let code = Math.random(100) * 10

            await sendEmail("support@mpscloud.com.br", "allanpinheirodelima@gmail.com", "Novo login detectado", emailTemplate.template(code))

            await prisma.mutation.createSession({
                data: {
                    operatingSystemName: systemInfo.operatingSystemName,
                    operatingSystemVersion: systemInfo.operatingSystemVersion,
                    browserName: systemInfo.browserName,
                    browserVersion: systemInfo.browserVersion,
                    user: {
                        connect: {
                            id: user.id
                        }
                    }
                }
            })

        } else {
            // SE A SESSÃO FOR VÁLIDA
            return 
        }
    },
    async isThisSessionValid (prisma, systemInfo, user) {
        let comparator = []
        
        let savedSessions = await prisma.query.sessions({ where: { user: { id: user.id } } })

        if (savedSessions) {
            comparator = savedSessions.map(session => {
                var arr = []
                for(var el in session) {
                    switch (systemInfo[el] === session[el]) {
                        case true:
                            arr.push(true)
                            break;
                        case false: 
                            break;
                    }
                }
                return arr
            })
        }
        
        let likeliness = comparator.some(arr => {
            let percentage = (arr.length / Object.keys(systemInfo).length) * 100
            if (percentage <= 70) { return false }
            else { return true }
        })

        return likeliness
    },
    async identifySession (prisma, request, user) { 
        const systemInfo = await this.detectSystem(request.headers)       
        
        let savedSession = await prisma.query.sessions({ 
            where: {
                operatingSystemName: systemInfo.operatingSystemName,
                operatingSystemVersion: systemInfo.operatingSystemVersion,
                browserName: systemInfo.browserName,
                browserVersion: systemInfo.browserVersion,
                user: { 
                    id: user.userId 
                } 
            } 
        })
        
        return savedSession[0]
    },
    async detectSystem (headers) {
        var sniffr = new Sniffr();
        sniffr.sniff(headers['user-agent']);
        
        return {
            operatingSystemName: sniffr.os.name,
            operatingSystemVersion: sniffr.os.version[0].toString(),
            browserName: sniffr.browser.name,
            browserVersion: sniffr.browser.versionString
        }
    },
    async emailIsVerified (user) {
        if (user.emailVerified) return

        throw new Error("Email is not verified") 
    },
    async sendConfirmationEmail(user, url) {
        // CORRIGIR COM O TOKEN
        await sendEmail("support@gmail.com", user.email, "Este é seu email de confirmação", confirmEmailTemplate.template(`${user.firstName} ${user.lastName}`, url))
    }
}

export { authentication as default } 
