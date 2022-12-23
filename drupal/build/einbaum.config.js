const { defineConfig } = require('@unb-libraries/einbaum')

module.exports = defineConfig({
  baseUrl: 'https://google.com',
  plugins: {
    "@unb-libraries/cypress-drupal": {},
  }
})