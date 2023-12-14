import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "./assets/tailwind.css"
import "./assets/phone.scss"

const app = createApp(App)
app.use(router)
app.mount('#app')
