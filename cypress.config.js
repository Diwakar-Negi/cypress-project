const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 5000,
  chromeWebSecurity: false,
  requestTimeout: 60000,
  responseTimeout: 60000,
  defaultCommandTimeout: 60000,
  e2e: {
    baseUrl: 'https://test-vt-lis.azurewebsites.net/',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    //reporter: 'mochawesome', // Generates HTML reports
    //reporterOptions: {
    //  reportDir: 'cypress/reports',
    //  overwrite: true,
    //  html: true,
    //  json: true
    //},
    experimentalRunAllSpecs: true,
    //setupNodeEvents(on, config) {
    //  return require('./cypress/plugins/index.js')(on, config);
   // }
   },
  env: {
    pregolive: false
  },
  
  specs: ["./cypress/e2e/**/*.cy.js", "./cypress/integration/**/*.cy.js", "./cypress/component/**/*.cy.js"],
  video: false,
  viewportWidth: 1280,
  viewportHeight: 720,
  screenshotOnRunFailure: false,
  
});
