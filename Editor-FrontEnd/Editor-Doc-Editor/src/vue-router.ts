import { createMemoryHistory, createRouter } from "vue-router";

import LogRegister from "./components/UserPage/LogRegister.vue";

const routes = [
  { path: "/", redirect: "/logregister" },
  { path: "/logregister", component: LogRegister },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
export default router;
