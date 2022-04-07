import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => {
      return import("../views/AboutView.vue");
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => {
      return import("../views/LoginView.vue");
    },
  },
  {
    path: "/userInfor",
    name: "UserInfor",
    component: () => {
      return import("../views/UserInforView.vue");
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
