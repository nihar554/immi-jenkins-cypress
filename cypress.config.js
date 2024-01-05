const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'xq3um5',
  defaultCommandTimeout: 30000,
  videoCompression: true,
  chromeWebSecurity: false,
  reporter: 'cypress-mochawesome-reporter',
  requestTimeout: 30000,
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false
  },
  e2e: {
    setupNodeEvents (on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
      // implement node event listeners here
    }
  },
  env: {
    CYPRESS_RECORD_KEY: '19990fad-c2d1-44c2-9a5a-3ccf67daf097',
    MAILSLURP_API: '7149741443e926ec096dfc868077ec96d648d29d4c4699524047e1b52a348240',
    // BASE_URL: 'https://beta.adoptingelsalvador.gob.sv',
    BASE_URL: 'http://localhost:3000',
    DEFAULT_PASSWORD: 'Test@1234'
  }
})
