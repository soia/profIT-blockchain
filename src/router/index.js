import Vue from "vue";
import Router from "vue-router";
import MainNav from "@/components/navigations/main-nav";
import Form from "@/components/forms/form";
import Main from "@/components/pages/main";

import Solutions from "@/components/pages/solutions";
import Technologies from "@/components/pages/technologies";
import Projects from "@/components/pages/projects";
import Partners from "@/components/pages/partners";
import Problems from "@/components/pages/problems";
import Offers from "@/components/pages/offers";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Main",
      component: Main
    },
    {
      path: "/solutions",
      name: "Solutions",
      component: Solutions
    },
    {
      path: "/technologies",
      name: "Technologies",
      component: Technologies
    },
    {
      path: "/projects",
      name: "Projects",
      component: Projects
    },
    {
      path: "/partners",
      name: "Partners",
      component: Partners
    },
    {
      path: "/problems",
      name: "Problems",
      component: Problems
    },
    {
      path: "/offers",
      name: "Offers",
      component: Offers
    }
  ]
});
