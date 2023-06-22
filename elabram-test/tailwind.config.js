/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/App.vue',
    './src/views/HomeView.vue',
    './src/views/LoginView.vue',
    './src/views/LoginMobileView.vue',
    './src/views/RegisterView.vue',
    './src/views/RegisterMobileView.vue',
    './src/views/HomeEmployeeStats.vue',
    './src/components/LoginRegisterHeader.vue',
    './src/components/HomeHeader.vue',
    './src/components/HomeProfile.vue',
    './src/components/HomeSummary.vue',
    './src/components/HomeAttendance.vue',
    './src/components/HomeTaskDueSoon.vue',
    './src/components/EmployeeStatsEmployeeSummary.vue',
    './src/components/EmployeeStatsAttendanceSummary.vue',
    './src/components/EmployeeStatsTaskProgress.vue',
    './src/components/EmployeeStatsTaskCompletionInAllProject.vue',
    './src/components/EmployeeStatsLeaveRecap.vue',
  ],
  theme: {
    extend: {
      colors: {
        'warning-red': '#FF2442',
        'warning-green': '#09A262',
        'warning-green-2': '#09A2621F',
        'primary-50': '#E1F4FE',
        'primary-border': '#E2E4EB',
        "error": '#E53935',
        'secondary-orange-600': '#F15D2B',
        'primary-900': '#000037',
        'secondary-blue-600': '#559BD9',
        'primary-100': '#B6BBD0',
        'primary-200': '#888FB0',
        'primary-250': '#80D2FB',
        'primary-300': '#5B6591',
        'primary-350': '#27B3F7',
        'primary-450': '#0796E526',
        'primary-500': '#04A5F4',
        'primary-700': '#0984D1',
        'primary-900-08539a': '#08539A',
        'primary-600': '#0796E5',
        'primary-132': "#132662",
        'primary-orange': "#EC4B5A",
        'primary-gray': "#6E7DA5",
        'primary-gray-2': "#F9F9F9",
        'primary-gray-3': "#808D93",
        'primary-gray-4': "#4A5056",
        'primary-gray-5': "#809FB8",
        'yellow-1': "#FF980026",
        'yellow-2': "#FF9800",
        'table-head': "#EAEAEA",
        'table-data': "#212121"
      },
      fontFamily: {
        'body': ['Open Sans', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
}
