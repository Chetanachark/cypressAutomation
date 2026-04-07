const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'iriqwm',

  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: false,
    json: true
  },

  e2e: {
    specPattern: "cypress/integration/**/*.js",
    supportFile: false,
    retries: {
      runMode: 2,
      openMode: 0
    }
  },
});