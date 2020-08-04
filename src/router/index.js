import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import FourOhFour from "../views/FourOhFour.vue";

Vue.use(VueRouter);

const routes = [
  // the 404 page catch-all route:
  {
    path: "*",
    component: FourOhFour
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
  {
    path: "/product",
    name: "Product",
    component: () => import("../views/Product.vue")
  },
  {
    path: "/product/search/:q",
    name: "ProductSearch",
    component: () => import("../views/ProductSearch.vue")
  },
  {
    path: "/product/:id",
    name: "ProductView",
    component: () => import("../views/ProductView.vue")
  },
  {
    path: "/label",
    name: "Label",
    component: () => import("../views/Label.vue")
  },
  {
    path: "/label/search/:q",
    name: "LabelSearch",
    component: () => import("../views/LabelSearch.vue")
  },
  {
    path: "/label/:id",
    name: "LabelView",
    component: () => import("../views/LabelView.vue")
  },
  {
    path: "/company",
    name: "Company",
    component: () => import("../views/Company.vue")
  },
  {
    path: "/company/search/:q",
    name: "CompanySearch",
    component: () => import("../views/CompanySearch.vue")
  },
  {
    path: "/company/:id",
    name: "CompanyView",
    component: () => import("../views/CompanyView.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
