import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import firebase from 'firebase/app';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            meta: {layout: 'main', auth: true},
            component: () => import('../views/Home.vue')
        },
        {
            path: "/login",
            name: "login",
            meta: { layout: "empty", auth: false },
            component: () => import("../views/Login.vue"),
        },
        {
            path: "/register",
            name: "register",
            meta: { layout: "empty", auth: false },
            component: () => import("../views/Register.vue"),
        },
        {
            path: "/categories",
            name: "categories",
            meta: { layout: "main", auth: true },
            component: () => import("../views/Categories.vue"),
        },
        {
            path: "/detailRecord/:id",
            name: "detailRecord",
            meta: { layout: "main", auth: true },
            component: () => import("../views/DetailRecord.vue"),
        },
        {
            path: "/history",
            name: "history",
            meta: { layout: "main", auth: true },
            component: () => import("../views/History.vue"),
        },
        {
            path: "/planning",
            name: "planning",
            meta: { layout: "main", auth: true },
            component: () => import("../views/Planning.vue"),
        },
        {
            path: "/profile",
            name: "profile",
            meta: { layout: "main", auth: true },
            component: () => import("../views/Profile.vue"),
        },
        {
            path: "/record",
            name: "record",
            meta: { layout: "main", auth: true },
            component: () => import("../views/Record.vue"),
        },
    ],
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requreAuth = to.matched.some(record => record.meta.auth);

  if (requreAuth && !currentUser) {   
    next("/login?message=login");
  }  
  else {
    next();
  }
  return

})

export default router