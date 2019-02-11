<template>
    <div class="wrapper flex align-center-middle">
        <form @submit.prevent="changePassword">
            <div class="text-center">
                <p class="lead">Hora de trocar sua senha</p>
                <p>Lembre-se de utilizar uma senha forte.</p> 
                <br> 
                <p class="small">Procure incluir caracteres especiais, números, letras maiúsculas e minúsculas para que pessoas mal intencionadas não 
                    consigam usar seu acesso. Por enquanto, não exigiremos, mas, em breve, será uma obrigação. Leia mais sobre as <a href="">diretrizes de segurança</a>.
                </p>
            </div>
            <div class="input-group column flex align-middle">
                <label for="password">Nova senha</label>
                <input type="password" id="password" v-model="password">
            </div>
            <div class="input-group column flex align-middle">
                <label for="password">Confirme sua senha</label>
                <input type="password" id="password" v-model="passwordConfirm">
            </div>
            <div class="input-group column flex align-middle">
                <button type="submit">Trocar senha</button>
            </div>
        </form>
    </div>
</template>
<script>
import gql from 'graphql-tag'
import jwt from 'jsonwebtoken'

export default {
    mounted: function () {
         let params = new URLSearchParams(location.search.substring(1))

        let token = params.get('token')

        localStorage.setItem('token', token)
    },
    data () {
        return {
            password: '',
            passwordConfirm: ''
        }
    },
    methods: {
        changePassword: async function () {
            let password = this.password
            let passwordConfirm = this.passwordConfirm
            
            if(password !== passwordConfirm) return

            let updated = await this.$apollo.mutate({
                mutation: gql`mutation($password: String!) {
                    setNewPasswordAtReset(password: $password) {
                        passwordUpdated
                    }
                }`,
                variables: {
                    password: password
                }
            })

            if (updated) {
                localStorage.removeItem('token')
                location.href = 'http://localhost:8080/login'
            }
            
        }
    }
}
</script>
<style lang="scss" scoped>
.wrapper {
    width: 100%;
    height: 100vh;
}

form {
    width: 40%;
    height: 40%;
    min-height: 150px;
    padding: 30px;
    margin-bottom: 150px;
    input {
        border-radius: 3px;
        border: 1px solid lightgray;
        height: 40px;
        width: 50%;
        padding: 0px 10px;
    }
    label {
        margin-bottom: 10px;
    }
}

.input-group {
    margin-top: 20px;
}

</style>
