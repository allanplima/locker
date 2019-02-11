<template>
    <section>
        <div class="container-section">
            <div>
                <p>Senha</p>
                <p class="small">Redefina sua senha para garantir mais segurança. Para saber como criar uma senha forte, veja nosso <a href="">guia de segurança para senhas</a></p>
            </div>
            <div class="flex align-right align-middle">
                <button>Iniciar processo</button>
            </div>
        </div>
        <hr>
        <div class="container-section">
            <div>
                <p>Autenticação em dois fatores</p>
                <p class="small">Usando celular, OTP ou email, garanta mais segurança ao seu perfil. Entenda melhor como funciona a <a href="">autenticação em dois fatores</a></p>
            </div>
            <div class="flex align-right align-middle">
                <button>Começar agora</button>
            </div>
        </div>
        <hr>
    </section>
</template>
<script>
export default {
    
}
</script>
<style scoped lang="scss">
.container-section {
    display: grid;
    grid-template-columns: 40% 60%;
    padding: 30px 0px;
}

.small {
    margin-top: 10px;
    color: rgb(100,100,100)
}

button {
    border: 1px solid gray;
    &:hover {
        border: 1px solid var(--info-color);
        color: var(--info-color)
    }
}
</style>
