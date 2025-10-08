<template>
  <main id="homepage" role="main">
    <Banner />
    <Skills />
    <About />
    <Experience />
    <WhatIDo />
    <Portfolio />
    <Contact />
    <router-view />
  </main>
</template>

<script setup lang="ts">
import Banner from './banner.vue'
import Skills from './Myskills.vue'
import About from './AboutMe.vue'
import Experience from './Experience.vue'
import WhatIDo from './WhatIDo.vue'
import Portfolio from './Portfolio.vue'
import Contact from './Contact.vue'

import { useHead } from '@vueuse/head'

useHead({
  title: 'Front End Developer Bologna | Web Developer Italy - Sofien Cheikh Mohamed',
  meta: [
    {
      name: 'description',
      content:
        'Sofien Cheikh Mohamed - Experienced Front End Developer based in Bologna, Italy. Specializing in building interactive and responsive web applications with Vue.js, JavaScript, and more.',
    },
    {
      name: 'keywords',
      content:
        'front end developer bologna, web developer italy, front end developer italy, web developer bologna, vue.js developer bologna',
    },
    {
      property: 'og:title',
      content: 'Front End Developer Bologna | Web Developer Italy - Sofien Cheikh Mohamed',
    },
    {
      property: 'og:description',
      content:
        'Experienced Front End Developer based in Bologna, Italy. Offering modern web development services using latest frontend technologies.',
    },
  ],
})
</script>

<style scoped>
/* Add any page-specific styles here */
</style>
