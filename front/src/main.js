//<!-- //eslint-disable -->

import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import axios from 'axios'
import VueAxios from 'vue-axios'

library.add(faPlusSquare, faTrash)

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);
app.use(VueAxios, axios);


app.mount('#app');