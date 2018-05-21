import Vue from "vue";
import Router from "vue-router";
const Home = () => import(/* webpackChunkName: "Home" */ "./views/Home.vue");
const About = () => import(/* webpackChunkName: "About" */ "./views/About.vue");

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    }
  ]
});
