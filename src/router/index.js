import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "../components/HomePage.vue";
import portfolio from "../components/Portfolio.vue";
import whatido from "../components/WhatIDo.vue";
import aboutme from "../components/AboutMe.vue";
import experience from "../components/Experience.vue";
import Contact from "../components/Contact.vue";


const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/about",
    name: "aboutme",
    component: aboutme,
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: portfolio,
  },
  {
    path: "/whatido",
    name: "what-ido",
    component: whatido,
  },
  {
    path: "/experience",
    name: "experience",
    component: experience,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },

];

const router = createRouter({
  history: createWebHistory(), // replaces "mode: 'history'"
  routes
});

export default router;
