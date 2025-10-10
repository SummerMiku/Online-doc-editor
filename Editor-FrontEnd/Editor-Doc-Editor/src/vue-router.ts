import { createWebHistory, createRouter } from "vue-router";

import MainPage from "./components/MainPage.vue";
import LogRegister from "./components/UserPage/LogRegister.vue";

const routes = [
  { path: "/home", component: MainPage },
  { path: "/logregister", component: LogRegister },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
