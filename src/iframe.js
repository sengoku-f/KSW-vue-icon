import { createApp } from "vue";
import App from "./iframe.vue";
// import { KswIcon } from "./index.js";
import "/tailwind.css";

const app = createApp(App);

// app.use(KswIcon);

app.mount("#app");
