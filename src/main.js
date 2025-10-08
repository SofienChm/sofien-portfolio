import { createApp } from 'vue'
import './assets/scss/style.css'
import App from './App.vue'
import AOS from 'aos'
import router from './router/index.js'
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// (Optional) Import Bootstrap JS bundle for components like dropdowns, modals, tooltips
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { MotionPlugin } from '@vueuse/motion'
import { createHead } from '@vueuse/head'

AOS.init()

const app = createApp(App)
app.use(createHead())
app.use(router) // Tell Vue to use the router
app.use(MotionPlugin)
app.mount('#app')
