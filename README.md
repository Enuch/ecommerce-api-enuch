<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) Projeto feito com Nest, Typescript, Prisma e PostgreSQL

## Installation
  Rode o comando abaixo após baixar o projeto para instalar todas as dependencias necessárias.

```bash
$ npm install
```
  Agora será necessário criar o arquivo .env e colocar
  SECRET_KEY=
  DATABASE_URL=
  Pode colocar qualquer valor em String para a SECREt_KEY e colocar a URL do seu banco de dados (PostgreSQL) na DATABASE_URL

  Também será necessário rodar os comandos:

  comando para iniciar a dependencia prisma no projeto (Se a pasta prisma já existe no projeto, não será necessário rodar este comando)

```bash
$ npx prisma init
```
  comando para criar as tabelas no seu banco de dados

```bash
$ npx prisma migrate dev --name init
```
## Running the app

  Agora rode o comando abaixo para iniciar a API

```bash
$ npm run start:dev OU npm run start
```

  Agora algumas explicações sobre o projeto:
  * O usuário só consegue realizar operações com uso de token para alguns casos de usos
  * 1 - Cadastre um usuário na roda de cadastro de user
  * 2 - Vá para a rota de login e envie um body com o Email e Senha do usuário, a API retornar o token de acesso
  * 3 - Agora com o token é possível acessar os casos de uso (rotas) feitas para o usuário
  * 4 - São as seguintes rotas que estão na pasta user cases no arquivo do insominia: (As seguintes rotas precisa de token)
     * adionar compras ao carrinho - POST
     * finalizar compra - PUT: id compra
     * editar compra - PUT: id compra
     * cancelar compra - PUT: id compra
     * listar produtos por categorias - GET: 
     * carrinho de compras do usuario - GET: id user (apenas compras ativas)
     * historico de compras do usuario - GET: id user (compras ativas, canceladas e realizadas)
  * 5 - Também é necessário cadastrar um Produto para fazer as operações acima, nas rotas estão os CRUDS de todas as tabelas para fazer
  vários testes
  * 6 - Não estou deletando nem um dado, apenas usando soft delete
  * 7 - Abaixo estará os modelos de JSON para os cadastros

  USER:
{
	"name": "Enuch",
  "cpf": "70166812311",
	"email": "enuch@gmail.com",
	"password": "12345",
  "birthday": "1990-01-01T00:00:02.020Z"
}

  PRODUCTS:
{
  "price": 1080.00,
  "description": "Monitor",
  "category": "Periférico"
}

  PURCHASE: ()
{
	"product": {
		"id": "d2d845aa-e766-4e21-b6db-7e0abc99327b"
	},
	"user": {
		"id": "9e26bc9c-c77b-47ef-89de-f5be1082b971"
	}
}

  LOGIN:
{
	"email": "enuch@gmail.com",
	"password": "12345"
}




