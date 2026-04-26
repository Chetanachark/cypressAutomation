const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout :6000,
  projectId: 'iriqwm',

  e2e: {
    specPattern: "cypress/integration/**/*.js",
    supportFile: false,

    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: false,
      json: true
    },

    retries: {
      runMode: 2,
      openMode: 0
    }
  }
});