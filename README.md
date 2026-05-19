# Graveyard Simulator

Jogo em formato de texto descritivo sobre um zelador de um cemitério fantasmagórico.

## Objetivo

Criado para a cadeira de Tópicos Especiais em Desenvolvimento Web.
Além disso, serve para estudo e prática da Clean Architecture, Domain-Driven Design e princípios SOLID.

## Tecnologias usadas

### /server
- PHP
- Slim Framework
- Docker
- MariaDB

### /app

- TypeScript
- React
- Axios

## Como usar

### /app
Para iniciar o app, é preciso seguir alguns passos:

- Entre na pasta do app usando o comando `cd app`.
- Copie o arquivo `.env.example` e renomeie para `.env`. Após copiar, mude as variáveis de ambiente.
- Instale as dependências básicas usando o comando `npm i` (para isso, é claro, precisa do NPM).
- Após isso, rode o comando `npm run dev`.

OBS: é preciso definir no `.env` o host e port da aplicação do server, então cuide para que sejam iguais. Recomendo que o server seja `localhost:8080`.

### /server
Para iniciar o servidor, é preciso seguir alguns passos:

- Entre na pasta do servidor usando o comando `cd server`.
- Copie o arquivo `.env.example` e renomeie para `.env`. Após copiar, mude as variáveis de ambiente.
- Instale as dependências básicas usando o comando `composer install` (para isso, é claro, precisa do composer).
- Instale a imagem do MariaDB com o Docker rodando o comando `docker compose up -d`.
- Após isso, rode o comando `php -S localhost:8080 -t public` (o host e port devem ser os mesmos definidos no `.env` do app).

OBS: talvez seja necessário alterar o arquivo `php.ini` para que ele consiga se conectar ao MySQL (MariaDB).

Se tudo deu certo, o servidor estará rodando em http://localhost:8080.
