/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/App.vue',
    './src/views/HomeView.vue',
    './src/views/LoginView.vue',
    './src/views/LoginMobileView.vue',
    './src/views/RegisterView.vue',
    './src/views/RegisterMobileView.vue',
    './src/components/LoginRegisterHeader.vue'
  ],
  theme: {
    extend: {
      colors: {
        'warning-red': '#FF2442',
        'warning-green': '#09A262',
        'primary-50': '#E1F4FE',
        'primary-50-e2e4eb': '#E2E4EB',
        'primary-300': '#5B6591',
        "error": '#E53935',
        'secondary-orange-600': '#F15D2B',
        'primary-900': '#000037',
        'secondary-blue-600': '#559BD9',
        'primary-200': '#888FB0',
        'primary-100': '#B6BBD0',
        'primary-700': '#0984D1',
        'primary-500': '#04A5F4',
        'primary-900-08539a': '#08539A',
        'primary-600': '#0796E5',
        'primary-border': '#707070',
        'primary-132': "#132662",
        'primary-orange': "#EC4B5A",
      }
    }
  },
  plugins: []
}
