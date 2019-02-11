<template>
     <div class="wrapper">
         <div class="flex column space-between login-wrapper">
             <!-- <div>
                 <p class="logo"><img src="@/assets/images/1x/logoblue.png" alt="" width="50px"></p>
             </div> -->
             <div>
                 
                 <div class="title">
                     <h4>Faça o login na sua conta</h4>
                     <p>Sua conta é pessoal e intransferível. Seu login garante seu acesso e identidade no sistema. Conheça nossas <a href="">diretrizes de segurança</a></p>
                 </div>
                 <form @submit.prevent="loginUser">
                     <div class="input-group email">
                        <label for="email">Email</label>
                        <br />
                        <input v-model="email" type="email" name="email">
                     </div>
                     <div class="input-group password">
                         <label for="password">Senha</label>
                         <br />
                        <input v-model="password" type="password" autocomplete="off" name="password">
                     </div>
                     <div class="submit-options flex space-between align-middle">
                         <button :disabled="loading" class="btn" type="submit">{{loading ? 'Carregando' : 'Login'}}</button>
                         <router-link :to="{name: 'AccountRecuperation'}">Esqueci minha senha</router-link>
                     </div>
                 </form>
             </div>
             <div><a href="">Ainda não tem login?</a></div>
         </div>
         <div class="flex align-center-middle login-greeting">
             <img src="@/assets/images/login-image.png" alt="" >
         </div>
     </div>
</template>
<script>
import gql from 'graphql-tag'

export default {
    data () {
        return {
            email: '',
            password: '',
            loading: false
        }
    },
    methods: {
        loginUser: async function () {
            let email = this.email
            let password = this.password

            this.loading = true
            let response = await this.$apollo.mutate({
                mutation: gql`mutation($email: String!, $password: String!) {
                    loginUser(email: $email, password: $password) {
                        token
                        user {
                            id
                            email
                            firstName
                            lastName
                        }
                    }
                }`,
                variables: {
                    email: email,
                    password: password
                }
            })
            .catch(err => { this.loading = false })
            
            if (response) {
                localStorage.setItem('token', response.data.loginUser.token)
                location.href = this.$route.query.redirect || 'http://localhost:8080/manager'
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.wrapper {
    position: fixed;
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-columns:   40% auto;
    @media(max-width: 1366px) {
        grid-template-columns: auto 50% ;
    }
    @media(max-width: 768px) {
        grid-template-columns: 100%;
    }
}

.logo {
    font-weight: 600;
    font-size: 1em;
}

.login-wrapper {
    padding: 65px 20%;
    @media(max-width: 768px) {
        padding: 30px 10%
    }
}

.title {
    h4 {
        font-size: 1.5em;
    }
    p {
        margin-bottom: 50px;
    }
}

form {
    margin-bottom: 40px;
    @media(max-width: 768px) {
        margin-bottom: 0px;
    }
    label {
        font-size: 12px;
        z-index: 2;
        position: absolute;
        top: 10px;
        left: 25px;
    }
    .input-group {
        border: 1px solid rgb(200,200,200);
        position: relative;
        min-height: 60px;
        overflow: hidden;
        
    }
    .email {
        border-radius: 3px 3px 0px 0px;
    }
    .password {
        border-radius: 0px 0px 3px 3px;
        font-size: 30px;
    }
    input {
        z-index: 1;
        border: none;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        background: transparent;
        padding: 20px 25px 0px
    }
    .submit-options {
        margin-top: 40px;
    }
    button {
        color: white;
        background: #2986E2;
        min-width: 40%;
        &:disabled {
            background: var(--neutral-color);
        }
    }
}

.login-greeting {
    
    @media(max-width: 768px) {
        display: none;
    }
    @media(max-width: 1366px) {
        img { 
            width: 80%
        }
    }
    @media(min-width: 1367px) {
       img {
           width: 50%
       }
    }
}

.error-input {
    border: 1px solid red
}

</style>
