// cypress.config.js
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://galeriamexicanacr.com',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000,
    video: true,
    screenshot: true,
    screenshotOnRunFailure: true,
    videosFolder: 'cypress/videos',
    screenshotsFolder: 'cypress/screenshots',
    
    env: {
      // Environment variables for different test environments
      production: 'https://galeriamexicanacr.com',
      staging: 'https://staging.galeriamexicanacr.com', // if available
    },

    setupNodeEvents(on, config) {
      // implement node event listeners here
      
      // Task for custom logging
      on('task', {
        log(message) {
          console.log(message);
          return null;
        },
      });

      // Browser launch options
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome') {
          launchOptions.args.push('--disable-dev-shm-usage');
          launchOptions.args.push('--no-sandbox');
          launchOptions.args.push('--disable-gpu');
          return launchOptions;
        }
      });

      return config;
    },

    // Test file patterns
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js',
    
    // Test execution settings
    experimentalStudio: true,
    experimentalWebKitSupport: true,
    retries: {
      runMode: 2,
      openMode: 0,
    },
  },
});config.js
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
  baseUrl: 'https://galeriamexicanacr.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});