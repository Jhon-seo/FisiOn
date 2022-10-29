import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
// import router from './router'

import './assets/main.css'

const app = createApp(App)

// app.use(router)

app.mount('#app')

app.component('font-awesome-icon', FontAwesomeIcon)


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'





library.add(faUserSecret)