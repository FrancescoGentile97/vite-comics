import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import  {library}  from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import "bootstrap/dist/css/bootstrap.min.css";
library.add(faUserSecret)
createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')

