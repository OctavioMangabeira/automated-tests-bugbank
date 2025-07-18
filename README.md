<h1 align="center"> Projeto Testes Automatizados Bug Bank </h1>

![issues](https://img.shields.io/github/issues/OctavioMangabeira/buger-eats-cypress-discovery)
![forks](https://img.shields.io/github/forks/OctavioMangabeira/buger-eats-cypress-discovery)
![stars](https://img.shields.io/github/stars/OctavioMangabeira/buger-eats-cypress-discovery)

## Índice

* [Descrição do Projeto](#descrição-do-projeto)
* [Requisitos para instalação](#requisitos-para-instalação)
* [Instalação das dependências](#instalação-das-dependências)
* [Como executar os testes com o Cypress](#como-executar-os-testes-com-o-cypress)
* [Como gerar e acessar o relatório de execução](#como-gerar-e-acessar-o-relatório-de-execução)
* [Explicação da estrutura da arquitetura do projeto](#explicação-da-estrutura-da-arquitetura-do-projeto)
* [Resultados](#resultados)
* [Problemas encontrados](#problemas-encontrados)

<h2 dir="auto">Descrição do Projeto</h2> 

Projeto de testes automatizados utlizando o framework cypress na aplicação Bug Bank <br/>
Aplicação: <a href="https://github.com/jhonatasmatos/bugbank-ui" rel="nofollow">Bug Bank</a>

<h2 dir="auto">Requisitos para instalação</h2> 

Node.js <br />
NPM <br />
Visual Studio Code

<h2 dir="auto">Instalação das dependências</h2> 

* Realizar o git clone do projeto;
<p> git clone https://github.com/OctavioMangabeira/automated-tests-bugbank.git </p>
* Abrir o projeto no Visual Studio Code;
* Abrir o terminal do Visual Studio Code e digitar o comando npm install.

<h2 dir="auto">Como executar os testes com o Cypress</h2> 

Para rodar o Cypress no modo navegador é preciso realizar o seguinte comando:

npm run gui

Para rodar o Cypress por modo headless é preciso realizar o seguinte comando:

npm run cli

Para rodar os testes do fluxo básico é preciso realizar o seguinte comando:

npm run basicflow

Para rodar os testes do fluxo adicional é preciso realizar o seguinte comando:

npm run additionalflow

<h2 dir="auto">Como gerar e acessar o relatório de execução</h2> 

Para gerar o relatório é necessário rodar os testes por linha de comando executando npm run cli, após isso o relatório vai estar disponível para o acesso na pasta results/json.
O relatório pode ser aberto pelo navegador.

<h2 dir="auto">Explicação da estrutura da arquitetura do projeto</h2>

Este projeto de automação de testes foi estruturado seguindo o padrão Page Object Model (POM), uma abordagem que promove a organização, reutilização de código e manutenção facilitada dos testes end-to-end.

<br> cypress/ </br>
<br>├── e2e/                   # Arquivos de teste (especificações .cy.js ou .feature)</br>
<br>│   ├── register.cy.js </br>
<br>│   └── login.cy.js  </br>
<br>└── fixtures/              # Massa de dados (JSON) usados nos testes </br>
<br>├── support/ </br>
<br>├── pages/                 # Objetos de página (Page Objects) </br>
<br>│   ├── HomePage.js </br>
<br>│   └── LoginPage.js  </br>
<br>│   ├── commands.js        # Comandos customizados (Cypress.Commands.add) </br>
<br>│   ├── e2e.js             # Setup global dos testes </br>

Cada página da aplicação possui seus elementos mapeados no arquivo elements.js e suas classes e funções estão mapeadas no arquivo index.js.
<p> A massa de dados está na pasta fixtures, no arquivo dataUtils.js. </p>
<p>O relatório HTML gerado está na pasta results/json.</p>
<p>O comandos personalizados estão no arquivo commands.js.</p>

<h2 dir="auto">Resultados</h2>

* Pipeline CI/CD: <a href="https://github.com/OctavioMangabeira/automated-tests-bugbank/actions">GitHub Actions</a><br />

<h2 dir="auto">Problemas encontrados</h2>

<p> Não foi possível gerar o relatório de execução e disponibilizá-lo no GitHub Pages devido a uma issue na dependência mochawesome-report em que não está sendo possível gerar os arquivos json que depois são convertidos para o arquivo HTML. </p>
<p> Em ambiente local, os arquivos JSON estão sendo gerados e posteriormente convertidos normalmente. </p>
<p> Mais informações sobre o problema, no link abaixo: https://github.com/cypress-io/cypress/discussions/21099 </p>

