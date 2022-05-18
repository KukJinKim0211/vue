import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeViews.vue";
import BookView from "../views/BookViews.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "homeview",
    component: HomeView,
  },
  {
    path: "/book",
    name: "bookview",
    component: BookView,
    // 중첩 route set
    children: [
      {
        path: "",
        name: "book-list",
        component: () => import("@/components/book/BookList.vue"),
      },
      {
        path: "create",
        name: "book-create",
        component: () => import("@/components/book/BookCreate.vue"),
      },
      {
        path: "view",
        name: "book-view",
        component: () => import("@/components/book/BookView.vue"),
      },
      {
        path: "modify/:isbn",
        name: "book-modify",
        component: () => import("@/components/book/BookModify.vue"),
      },
    ],
    redirect: () => {
      return "/book";
    },
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutViews.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
