import { createApp } from 'vue'
import App from './App.vue'
import * as icons from './index.js'
import Message from 'vue-m-message'
import 'vue-m-message/dist/style.css'

const iconNames = []

const app = createApp(App)

for (const name in icons) {
  app.component(name, icons[name]);
  iconNames.push(name);
}

app.provide('$message', Message)
app.provide('ICON_NAMES', iconNames)

app.mount("#app");

