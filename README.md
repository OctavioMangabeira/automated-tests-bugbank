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

<h2 dir="auto">Descrição do Projeto</h2> 

Projeto de testes automatizados utlizando o framework cypress na aplicação Bug Bank <br/>
Aplicação: <a href="https://github.com/jhonatasmatos/bugbank-ui" rel="nofollow">Bug Bank</a>

<h2 dir="auto">Requisitos para instalação</h2> 

Node.js <br />
NPM <br />
Visual Studio Code

<h2 dir="auto">Instalação das dependências</h2> 

* Realizar o git clone do projeto;
* Abrir o projeto no Visual Studio Code;
* Abrir o terminal do Visual Studio Code e digitar o comando npm install.

<h2 dir="auto">Como executar os testes com o Cypress</h2> 

Para rodar o Cypress no modo navegador é preciso realizar o seguinte comando:

npm run gui

Para rodar o Cypress por modo headless é preciso realizar o seguinte comando:

npx cypress cli

Para rodar os testes do fluxo básico é preciso realizar o seguinte comando:

npx cypress run --env grepTags=@basicflow

Para rodar os testes do fluxo adicional é preciso realizar o seguinte comando:

npx cypress run --env grepTags=@additionalflow

<h2 dir="auto">Como executar os testes com o Cypress</h2> 

<h2 dir="auto">Como gerar e acessar o relatório de execução</h2> 

* Pipeline CI/CD: <a href="https://github.com/OctavioMangabeira/buger-eats-cypress-discovery/actions">GitHub Actions</a><br />
* Relatórios com os resultados dos testes: <a href="https://dashboard.cypress.io/projects/v5u7x2/runs?branches=%5B%5D&committers=%5B%5D&flaky=%5B%5D&page=1&status=%5B%5D&tags=%5B%5D&timeRange=%7B%22startDate%22%3A%221970-01-01%22%2C%22endDate%22%3A%222038-01-19%22%7D" rel="nofollow">Cypress dashboard</a>
