const { defineConfig } = require("cypress");
const webpack = require("@cypress/webpack-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/features/**/*.feature",

    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        webpack({
          webpackOptions: {
            resolve: {
              extensions: [".js"],
            },
            module: {
              rules: [
                {
                  test: /\.js$/,
                  exclude: /node_modules/,
                  use: {
                    loader: "babel-loader",
                  },
                },
              ],
            },
          },
        })
      );

      config.env.stepDefinitions =
        "cypress/e2e/features/**/*.steps.js";

      return config;
    },
  },
});