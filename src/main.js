import { createApp } from "vue";
import { store } from "./store/index.js";
// normalize.css
import "normalize.css/normalize.css";
// 全局样式
import "./styles/index.less";
// tailwindcss
import "./styles/tailwind.css";
// svg icon
import "virtual:svg-icons-register";

import App from "./App.vue";
import router from "./router/index.js";

const app = createApp(App);
app.use(store);
app.use(router);

app.mount("#app");
