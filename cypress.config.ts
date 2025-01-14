import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    defaultCommandTimeout: 4000,
    baseUrl: 'http://localhost:4200',
    specPattern: 'cypress/e2e/**/*{cy,spec}.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
