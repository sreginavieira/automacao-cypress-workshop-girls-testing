# automacao-cypress-workshop-girls-testing

Workshop Cypress - Girls Testing

1. Instalar Node JS
2. Criar pasta do projeto
3. Iniciar VSCode

Instalando dependências

 - Criar a pasta package.json com o comando $ npm init -y
 - Comando também criará a pasta node_modules
 - Instalar Cypress com o comando $ npm install cypress
 - O comando vai criar a pasta cypress, com as subpastas fixtures e support


Conferindo se o Cypress tá aberto

 - npx cypress open

Após escrever o seu teste, rode também este comando para abrir o Cypress e rodar

Para rodar o cypress no terminal, basta rodar o comando npx cypress run

Comandos conforme documentação cypress

Sempre rodar antes o 'npm init'

Instalar cypress  npm install cypress --save-dev


Instalar o cypress-mochawesome-reporter para criar reports

- comando npm i --save-dev cypress-mochawesome-reporter
- no arquivo cypress.config.js incluir o comando abaixo

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});