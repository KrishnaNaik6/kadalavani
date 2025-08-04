/* eslint-env node */
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    specPattern: 'cypress/**/*.{cy,spec}.{js,jsx}',
    baseUrl: 'http://localhost:4173',
  },
});
