const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/{e2e,tests,integration}/**/*.{spec,cy}.{js,ts}",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    specPattern: "cypress/{e2e,tests,integration}/**/*.{spec,cy}.{js,ts}",

    devServer: {
      framework: "next",
      bundler: "webpack",

    },
  },
});
