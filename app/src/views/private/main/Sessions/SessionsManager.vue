<template>
    <section>
        <div class="title">
            <p>Navegadores Web</p>
            <p class="small">Estes são os navegadores web que estiveram logados na sua conta. Gerencie eles com cuidado e sempre preste atenção a sessões abertas que você não reconhece.</p>
        </div>
        <!-- <hr /> -->
        <div class="session-list" >
            <div v-if="sessions">
                <div class="list-header">
                    <ul class="list-grid">
                        <li>Sistema Operacional</li>
                        <li>Browser</li>
                        <li>Data</li>
                        <li>Ações</li>
                    </ul>
                </div>

                <div class="list-body">
                    <ul>
                        <li class="list-grid" :key="session.id" v-for="session in sessions">
                            <span>
                                <icon name="brands/apple" scale="2" v-if="session.operatingSystemName.includes('mac') || session.operatingSystemName.includes('ios')"/>
                                <icon name="brands/windows" scale="2" v-if="session.operatingSystemName.includes('windows')"/>
                                <icon name="brands/ubuntu" scale="2" v-if="session.operatingSystemName.includes('ubuntu')"/>
                                <icon name="brands/linux" scale="2" v-if="session.operatingSystemName.includes('linux')"/>
                                <icon name="brands/android" scale="2" v-if="session.operatingSystemName.includes('android')"/>
                                <p>{{session.operatingSystemName}} {{session.operatingSystemVersion}}</p>
                            </span>
                            <span>
                                <icon :name="`brands/${session.browserName}`" scale="2"/>
                                <p>{{session.browserName}} {{session.browserVersion.substring(0, 4)}}</p>
                            </span>
                            <span>{{session.createdAt | normalizeDate}}</span>
                            <span>
                                <div @click="logoutThisSession(session.id)">
                                    <icon name="times" scale="1.5"/>
                                </div>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import gql from 'graphql-tag'
import moment from 'moment'
import Auth from '@/plugins/AuthHandler/authHandler'
import SessionQuery from '@/graphql/sessions.gql'
import isThisSessionValidQuery from '@/graphql/isThisSessionValidQuery.gql'
moment.locale('Pt-br')

export default {
    filters: {
        normalizeDate: function (date) {
            return moment(date).format('DD [de] MMMM [de] YYYY [às] HH:mm')
        }
    },
    apollo: {
        isThisSessionValid: gql`${isThisSessionValidQuery}`,
        sessions: gql`${SessionQuery}`
    },
    mounted: function () {
        // this.$on('refetchsession', () => alert('teste'))
    },
    methods: {
        async logoutThisSession(id) {
            let session = await this.$apollo.mutate({
                mutation: gql`mutation($sessionId: String!) {
                    logoutUser(sessionId: $sessionId) {
                        loggedOut
                        redirect
                    }
                }`,
                variables: {
                    sessionId: id
                }
            })
            .catch(err => {
                console.log('something went wrong')
            })

            
            this.$apollo.isThisSessionValid = session


            let response = await this.$apollo.queries.isThisSessionValid.refetch()


            if(!response.data.isThisSessionValid.valid) {
                return Auth.logout()
            }
            
            await this.$apollo.queries.sessions.refetch()
        }
    }
}
</script>
<style lang="scss" scoped>
section {
    margin-top: 50px;
}
.list-header {
    background: rgb(245,245,245);
    border-radius: 3px 3px 0px 0px;
    border: 1px solid rgb(240,240,240);
    color: var(--font-base);
}

.list-grid {
    display: grid;
    grid-template-columns: 30% 30% 30% 10%;
    padding: 10px 20px;
    span {
        display: flex;
        align-items: center;
        p {
            margin-left: 10px
        }
    }
}

.list-body li {
    padding: 30px 20px;
    border-width: 0px 1px 1px 1px;
    border-style: solid;
    border-color: rgb(240,240,240);
    color: var(--font-color);
    &:last-child {
        border-radius: 0px 0px 3px 3px
    }
}

.session-list {
    margin-top: 20px;
}

.title {
    width: 50%;

    p.small {
        margin-top: 10px;
    }
}

</style>
