import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import Details from "../views/Details.vue"
import Hadits from "../views/Hadits.vue"
import Doa from "../views/Doa.vue"

const routes = [
  {
    path: "/",
    redirect: "/alquran",
  },
  {
    path: "/alquran",
    name: "Home",
    component: Home,
  },

  {
    path: "/alquran/:id",
    name: "Details",
    component: Details,
  },
  {
    path: "/hadits",
    name: "Hadits",
    component: Hadits,
  },
  {
    path: "/doa",
    name: "Doa",
    component: Doa,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
