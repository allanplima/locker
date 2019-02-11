<template>
    <div class="wrapper">
        <div class="logo text-center">mpscloud</div>
        <div class="message-wrapper text-center">
            <div class="image">
                <img v-if="!message.confirmed && !message.error" src="@/assets/images/confirmation.png" alt="">
                <img v-if="message.confirmed" class="confirmed" src="@/assets/images/confirmed.png" alt="">
                <img v-if="message.error" src="@/assets/images/not-confirmed.png" alt="">
            </div>

            <div class="paragraph">
                <p>A confirmação de email é uma etapa importante e indispensável na criação do seu perfil. Ele permite recuperar sua senha quando esquecer ela ou validar acesso à sua conta. </p>
                <p :class="message.error ? 'error-message': ''" class="confirmation-message">{{message.message}}</p>
                <button @click="$router.push({'name': 'Login'})" v-if="message.confirmed">Entrar no sistema</button>
                <button @click="resendConfirmationEmail($route.query.token)" v-if="message.error">Reenviar email de confirmação</button>
            </div>
        </div>
        <footer class="text-center">
            <a href="">Por quê devo confirmar meu email</a>
        </footer>
    </div>    
</template>
<script>
import jwt from 'jsonwebtoken'
import gql from 'graphql-tag'

export default {
    data () {
       return {
           decoded: "",
           resentConfirmationEmail: false,
           message: {
               error: false,
               confirmed: false,
               message: "Estamos confirmando seu email"
           }
       }
    },
    beforeRouteEnter: (to, from, next) => {
        if (to.query.token) {
            return next()
        }

        return next({ path: "/" })
    },
    mounted: async function () {
        let token = this.$route.query.token

        this.decoded = await this.verifyEmail(token)
            .catch(err => {
                this.message.error = true
                this.message.message = "Nós não conseguimos confirmar o seu email corretamente"
            })
        
        if (this.decoded) {
            this.message.confirmed = true
            this.message.message = "Confirmado! Agora é só usar o sistema"
        }
        
    },
    methods: {
        async verifyEmail (token) {
            let result = await this.$apollo.mutate({

                mutation: gql`mutation ($token: String!) {
                    confirmEmail(token: $token) {
                        id
                        email
                        firstName
                        lastName
                        emailVerified
                    }
                }`,
                variables: {
                    token: token
                }

            })

            return result
        },
        async resendConfirmationEmail (token) {
            let emailSent = await this.$apollo.mutate({
                mutation: gql`mutation ($token: String!) {
                    sendConfirmationEmailEmail(token: $token) {
                        emailSent
                    }
                }`,
                variables: {
                    token: token
                }
            })

            this.message.confirmed = false
            this.message.error = false
            this.message.message = "Verifique sua caixa de email e siga os procedimentos"
        }
    }
}
</script>
<style lang="scss" scoped>
.wrapper {
    position: fixed;
    width: 100%;
    height: 100%;
    display: grid;
    padding: 30px 10px;
    grid-template-rows: 20% auto 10%;
}

.logo {
    font-weight: 600;
}

.confirmation-message {
    font-size: 2em;
    color: #86d4ea;
    margin: 30px 0px;
}

.error-message {
    color: var(--error-color)
}

.paragraph {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 50px;
    p {
        max-width: 500px;
    }
}

img.confirmed {
    margin-left: 40px
}

button {
    background: var(--info-color);
    color: white;
    &:active {
        background: darken(#86d4ea, 10%)
    }
}
</style>
