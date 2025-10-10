import { createApp } from "vue";
import router from "./vue-router.ts";
import elementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./style.css";
import App from "./App.vue";

const app = createApp(App);
app.use(elementPlus);
app.use(router);
app.mount("#app");
