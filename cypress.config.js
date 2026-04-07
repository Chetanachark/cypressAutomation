const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'iriqwm',

  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true
  },

  e2e: {
    specPattern: "cypress/integration/**/*.js",
    supportFile: false,
    retries: {
      runMode: 2,
      openMode: 0
    },

    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
});