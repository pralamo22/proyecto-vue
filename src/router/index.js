import contador from "../modules/contador/components/Contador.vue";
import { createRouter, createWebHistory } from "vue-router";
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    {
      path: "/contador",
      name: "contador",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../modules/contador/components/Contador.vue"),
    },
    {
      path: "/lista_de_tareas",
      name: "ListaDeTareas",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import("../modules/listaDeTareas/components/ListaDeTareas.vue"),
    },
    {
      path: "/registrar",
      name: "registrar",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../modules/registrar/views/RegistrarView.vue"),
    },
    {
      path: "/calcular",
      name: "calcular",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../modules/calcular/views/CalcularView.vue"),
    },
  ],
});

export default router;
