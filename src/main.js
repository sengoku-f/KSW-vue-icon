import { createApp } from 'vue'
import App from './App.vue'
import { KswIcon } from '/packages/index.js'
import 'vue-m-message/dist/style.css'


const app = createApp(App)

app.use(KswIcon);

app.mount("#app");

