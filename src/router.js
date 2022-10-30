import { createWebHistory, createRouter } from "vue-router";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import Desk from "./views/Desk";
import Lessons from "./views/Lessons";
import Finance from "./views/finance";
import NotFound from "./views/NotFound";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: { layout: "Dashboard" },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: { layout: "Dashboard" },
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta: { layout: "Dashboard" },
  },
  {
    path: "/desk",
    name: "desk",
    component: Desk,
    meta: { layout: "Dashboard" },
  },
  {
    path: "/lessons",
    name: "lessons",
    component: Lessons,
    meta: { layout: "Dashboard" },
  },
  {
    path: "/finance",
    name: "finance",
    component: Finance,
    meta: { layout: "Dashboard" },
  },
  {
    path: "/404",
    name: "404",
    component: NotFound,
    meta: { layout: "Dashboard" },
  },

  { path: "/:pathMatch(.*)*", redirect: { name: "404" } },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
});

export default router;
