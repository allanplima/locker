<template>
    <section class="wrapper" v-if="userInfo">
        <form @submit.prevent="updateUser" enctype="multipart/form-data">
        <button type="submit">SUBMIT</button>
            <div class="flex align-middle space-between">
                <div class="flex align-middle">
                    <div>
                        <input type="file" hidden id="profilePicture" @change="handleFileUpload($event)" accept="image/*">
                        <label for="profilePicture" v-if="userInfo">
                            <div v-if="!userInfo.profilePicture" class="circle flex align-center-middle">
                                {{userInfo.firstName.substring(0, 1)}}
                                {{userInfo.lastName.substring(0, 1)}}
                            </div>
                            <div v-else class="circle flex align-center-middle">
                                <img :src="userInfo.profilePicture">
                            </div>
                        </label>
                    </div>
                    <div>
                        <p class="user-name">{{userInfo.firstName}} {{userInfo.lastName}}</p>
                        <p class="small">Usuário desde {{$moment.formatDate(userInfo.createdAt, 'DD [de] MMMM [de] YYYY')}}</p>
                    </div>
                </div>
                <div class="flex  align-right">
                    <button @click="editMode = !editMode" class="edit-profile-button">Editar perfil</button>
                </div>
            </div>
            <div class="info">
                <header>
                    <p class="small">Informações básicas</p>
                </header>
                <section class="flex align-middle space-between">
                    <div>
                        <p>Nascimento</p>
                        <p class="small">{{userInfo.birthday || 'não informado'}}</p>
                    </div>
                </section>
                <hr>
                <section class="flex align-middle space-between">
                    <div>
                        <p>Usuário Habilitado</p>
                        <p class="small">{{userInfo.enabled || 'não informado'}}</p>
                    </div>
                </section>
                <hr>
                <section>
                    <p>Autenticação em dois fatores</p>
                    <p class="small">{{userInfo.totp || 'não informado'}}</p>
                </section>
                <hr>
                <section>
                    <p>Email verificado</p>
                    <p class="small">{{userInfo.emailVerified || 'não informado'}}</p>
                </section>
                <hr>
                <section>
                    <p>Email</p>
                    <p class="small">{{userInfo.email || 'não informado'}}</p>
                </section>
                <hr>
                <section>
                    <p>CRM</p>
                    <p class="small">{{userInfo.crm || 'não se aplica'}}</p>
                </section>
                <hr>
                <section>
                    <p>Assinatura</p>
                    <p class="small">{{userInfo.signature || 'não se aplica'}}</p>
                </section>
                <hr>
            </div>
        </form>
    </section>
</template>
<script>
import UserQuery from '@/graphql/userInfo.gql'
import gql from 'graphql-tag'

export default {
    apollo: {
        userInfo: gql`${UserQuery}`
    },
    data () {
        return {
            editMode: false,
            id: '',
            firstName: '',
            lastName: '',
            enabled: '',
            totp: '',
            password: '',
            emailVerified: '',
            email: '',
            profilePicture: '',
            birthday: '',
            expertises: '',
            crm: '',
            eCrm: '',
            signaturePath: ''
        }
    },
    methods: {
        handleFileUpload: async function (e) {
            this.file = await new File([e.target.files[0]], e.target.files[0].name, { type: e.target.files[0].type })
        },
        updateUser: async function () {
            await this.$apollo.mutate({
                mutation: gql`
                    mutation ($id: ID!, $data: UpdateUserInput!) {
                        updateUser(id: $id, data: $data) {
                            id
                            profilePicture
                            firstName
                            lastName
                        }
                    }
                `,
                variables: {
                    data: {
                        profilePicture: this.file
                    },
                    id: this.userInfo.id,
                }
            })

            await this.$apollo.queries.userInfo.refetch()
        }
    }
}
</script>
<style lang="scss" scoped>
section.wrapper {
    margin-top: 50px;
}

.circle {
    width: 60px;
    height: 60px;
    border-radius: 100%;
    background: crimson;
    color: white;
    overflow: hidden;
    margin-right: 20px;
    img {
        height: 60px;
    }
}

.user-name {
    font-size: 2em;
}

.small {
    color: rgb(100,100,100)
}

.edit-profile-button {
    background: var(--info-color);
    color: white;
}

.info section {
    padding: 20px 10px;
}

.info header {
    background: rgb(240,240,240);
    padding: 10px;
    border-radius: 3px;
    margin-top: 20px;
}

.info button {
    border: 1px solid gray;
    min-width: 150px;
    transition: background-color ease-in-out .2s;
    &:hover {
        border-color: var(--info-color);
        color: var(--info-color);
    }
    &:active {
        background: var(--info-color);
        color: white;
        
    }
}
</style>
