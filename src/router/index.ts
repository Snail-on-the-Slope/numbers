import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/",
    name: "Main",
    component: () => import("~/pages/main.vue")
  },
  {
    path: "/create",
    name: "Create",
    component: () => import("~/pages/create.vue")
  },
  {
    path: "/edit/:id",
    name: "Edit",
    component: () => import("~/pages/edit.vue")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router