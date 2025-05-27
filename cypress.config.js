const { defineConfig } = require("cypress");
const mochawesome = require('cypress-mochawesome-reporter/plugin');


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config);
      mochawesome(on, config);
      return config;
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/report/html',
      embeddedScreenshots: true,
      inlineAssets: true,
      overwrite: true,
      html: true,
      json: true,
      timestamp: 'yyyy-mm-dd_HH-MM-ss'
    },
    specPattern: 'cypress/e2e/**/*.cy.js',
    baseUrl: 'http://localhost:3000/',
    supportFile: 'cypress/support/e2e.js',
    experimentalRunAllSpecs: true
  },
});
