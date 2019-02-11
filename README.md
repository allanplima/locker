## App
A pasta app contém um aplicativo escrito em VueJS. Ele contém uma implementação simples de calls para o servidor e redirecionamento.
Ele também contém um plugin, ainda não terminado, de gerenciamento de autenticação e autorização baseado em Cookie + Token Bearer

Para iniciar o App, pelo terminar, entrar na pasta /app

`npm install``

depois

`npm run serve``


## Server

O server foi feito utilizando uma mescla de Prisma com NodeJS, onde podemos facilmente implementar um servidor completo utilizando docker e fazer o deploy utilizando um swarm com load balancer
O servidor foi implementado em GraphQL e já tem 

- Autenticação
- Autorização
- Gerencimento de Sessões
- Envio automático de emails
- Máquina docker pronta para deploy

Para entender como o servidor funciona e como deve ser startado, visitar https://www.prisma.io/docs
