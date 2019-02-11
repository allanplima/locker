<template>
    <div>
        <header>
            <nav class="container">
                <ul class="flex main-menu">
                    <li><router-link :to="{name: 'Profile'}">Perfil</router-link></li>
                    <li><router-link :to="{name: 'Security'}">Segurança</router-link></li>
                    <li><router-link :to="{name: 'Sessions'}">Sessões</router-link></li>
                    <li><router-link to="{name: 'Sessions'}">Sistemas</router-link></li>
                    <!-- <li><router-link :to="{name: 'Settings'}">Configurações</router-link></li> -->
                </ul>
                <ul class="flex align-right">
                     <li class="flex align-middle" @click="logout">Logout &nbsp;&nbsp;&nbsp;<icon name="sign-out-alt"/>  </li>
                </ul>
            </nav>
            <hr>
        </header>

        <main class="container">
            <router-view></router-view>
        </main>
    </div>
</template>
<script>
import Auth from '@/plugins/AuthHandler/authHandler'
export default {
    methods: {
        logout () {
            return Auth.logout(this)
        }
    }
}
</script>

<style scoped lang="scss">
header {
    width: 100%;
    height: 50px;
    background: rgb(50,50,70);
    color: white;
}

nav {
    display: grid;
    grid-template-columns: 50% 50%;
    height: 100%;
}

ul, li, li a {
    height: 100%;
}

.main-menu {
    li {
        margin-right: 80px;
        
        a {
            color: white;
            display: block;
            display: flex;
            align-items: center;
        }
    }
}

.router-link-active {
    border-bottom: 2px solid white
}

header hr {
    margin: 0px
}

.right {
    align-self: flex-end
}

</style>
