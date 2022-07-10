import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faArrowUp,
  faArrowDown
} from '@fortawesome/free-solid-svg-icons'

import App from './App.vue'
import router from './router/index'
import './index.css'

library.add(
  faArrowUp,
  faArrowDown
)

createApp(App)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
