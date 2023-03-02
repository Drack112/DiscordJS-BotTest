:warning: **Esse bot tem apenas a função de ser teste para comandos do discord, pacotes node e mais** :warning:

## 🔺 Lista de comandos

- Utilidades ☕

  - `about` --> Minhas informações.
  - `github` --> Meu repositório Git.
  - `help` --> O comando que você deu agora.
  - `invite` --> Link do meu convite.

- Diversão 😛

  - `avatar` --> Olha a sua foto :camera:
  - `beep` --> boop!
  - `ping` --> Pong!

- Moderação 📂

  - `prune` --> Apagar mensagens.

## Para desenvolvedores 💻

### Requerimentos

- **[NodeJS](https://nodejs.org/en/)**

### Instalação e subindo o Bot

1. Clone o repositório
2. Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```env
// API

TENOR=

// TOKEN

DISCORD_TOKEN=
```

3. Execute `npm install` no terminal para instalar as dependências
4. Execute `npm run dev`no terminal para iniciar o bot

### Subindo o BOT com o **_Docker_** 🐬

Na pasta examples você vai encontrar o arquivo `docker-compose.yml`, basta preencher os dados e rodar com o comando `docker-compose up`

```yml
services:
  bot:
    image: drack112/discord-test:latest
    environment:
      - DISCORD_TOKEN=
      - TENOR=
```
