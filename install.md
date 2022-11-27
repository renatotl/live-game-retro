npm i -g @nestjs/cli:Instalando o NestJS CLI
.Se tivesse usado o npm nest não precisaria instalalr.

nest new live-game-retro


cd "nome do projeto"


para rodar o projeto: npm run start:dev

yarn add class-validaor  
ou para npm
 npm i --save class-validator class-transformer

 yarn add @nestjs/swagger


//marcos
 npm install prisma --save-dev: intalando o PRISMA

 npm install class-transformer

//leo
yarn add prisma -D:devDependence
//leo
yarn add @prisma/client

// leo 
npx prisma init: criou o arquivo .env e a pasta prisma
=========
npx prisma generate

depois de fazer o banco no railway:acabei usando o Render
npx prisma migrate dev: crias as tabelas

npx prisma db push: enpurrando para o banco
=======
no packag.jso p prisma cliente usado na produção ue faz a conexao
==========

# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings


# ANTES
# DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"


# DEPOIS
DATABASE_URL="postgres://database_6u5q_user:wJrFVlgtSqiTw2ZKPgk6MJOJf8KJAyT3@dpg-ce00hjirrk09es988di0-a.oregon-postgres.render.com/database_6u5q"



#Johndoe é o nosso fulano nos eua

# agente selecionol do "?schema=public" para trás 