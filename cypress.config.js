const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'iriqwm',
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:"cypress/integration/**/*.js",
    retries: {
      runMode: 2,
      openMode: 0
    }
  },
});
