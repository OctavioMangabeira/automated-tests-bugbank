const { defineConfig } = require("cypress");


module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Relatório de Testes',
    embeddedScreenshots: true,
    inlineAssets: true,
    reportDir: 'cypress/reports/html',
    overwrite: false,
    html: true,
    json: false
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config);
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
    specPattern: 'cypress/e2e/**/*.cy.js',
    baseUrl: 'http://localhost:3000/',
    supportFile: 'cypress/support/e2e.js',
    experimentalRunAllSpecs: true
  },
});
