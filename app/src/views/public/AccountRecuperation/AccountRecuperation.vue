<template>
    <div class="wrapper">
        <header class="menu">
            <ul class="flex">
                <li><router-link :to="{name: 'Login'}">Voltar</router-link></li>
                <li class="self-center"><img src="@/assets/images/1x/logo-typo-blue.png" alt="" width="50px"></li>
            </ul>
        </header>
        <section class="account-recuperation flex align-middle column">
            <div>
                <img src="" alt="">
            </div>
            <div>
                <h4>Não se preocupe</h4>
                <p class="subtitle">Perder a senha é uma situação comum e nós entendemos isso. </p> 
                <p>Preencha o campo abaixo com seu email 
                e logo depois dê uma olhada na sua caixa de entrada. Nós lhe enviaremos um email especial para recuperar sua senha
                </p>
            </div>
            <form @submit.prevent="resetPassword">
                <div class="input-group">
                    <input type="email" required v-model="email">
                </div>
                <div class="submit-group">
                    <button type="submit" >Enviar meu email de recuperação</button>
                </div>
            </form>
        </section>
    </div>    
</template>
<script>
import gql from 'graphql-tag'
export default {
    data () {
        return {
            email: ''
        }
    },
    methods: {
        async resetPassword () {
            let email = this.email

            if(!email) return 'wrong'

            let response = await this.$apollo.mutate({
                mutation: gql`mutation ($email: String!) {
                    resetPassword (email: $email) {
                        redirect
                    }
                }`,
                variables: {
                    email: email
                }
            })

            console.log(response)
        }
    }
}
</script>
<style lang="scss" scoped>
.wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 20% auto 20%;
}

.account-recuperation {
    width: 40%;
    text-align: center;
    justify-self: center
}

form {
    width: 100%;
    input {
        border-radius: 3px;
        border: 1px solid var(--neutral-color);
        min-height: 40px;
        width: 70%;
        margin-top: 30px;
        padding: 0px 20px;
    }
    button {
        background: var(--info-color);
        color: white;
        margin-top: 20px;
    }
}

h4 {
    margin: 0px;
    font-size: 2em;
    font-weight: 400;
    margin-bottom: 10px;
}

.subtitle {
    font-weight: 400;
    font-size: 1.5em;
    margin-bottom: 30px;
}

header ul {
    display: grid;
    grid-template-columns: 33% 33% 33%;
    li {
        padding: 20px 0px;
        &:first-child {
            padding: 20px 20px;
        }
    }
    .self-center {
        justify-self: center
    } 
}

</style>
