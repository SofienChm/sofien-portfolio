<template>
<section class="service-bottom" id="aboutme"  aria-labelledby="about-title">

    <section id="about-area" class="section-padding" v-motion:initial="{opacity: 0, y: 100,}" :enter="{opacity: 1, y: 0, }">
        <div class="container">
            <div class="row">

                <div class="col-md-6">
                    <div class="about-area-left about-thum-area">
                        <div class="about-img" data-aos="flip-up">
                            <img src="../assets/images/profile-pic.png" alt="Resume Template">
                        </div>
                        <div class="resume-btn" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="300">
                            <button class="custom-btn btn-15" onclick="window.open('../src/assets/files/CHEIKH-MOHAMED-SOFIEN-EN.pdf')">Download Resume</button>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="about-area-right about-content-area">
                        <header class="section-title">
                            <h2>About Me</h2>
                        </header>
                        <article>
                        <p>Hello! I’m Sofien cheikh mohamed. I am a programmer with good knowledge of front-end techniques with experience of 5 years. I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing web apps. Also I like working in a team</p>
                        <p>Also i have full-stack developer experience with the most popular open-source CMS (WordPress) .</p>
                        <ul class="profile-menu">
                            <li><span class="about-title__span">Name: </span> Sofien cheikh mohamed</li>
                            <li><span class="about-title__span">Date of birth: </span> 14 may 1991</li>
                            <li><span class="about-title__span">Nationality: </span> Tunisian</li>
                            <li><span class="about-title__span">Location: </span> Bologna (Italy)</li>
                            <li><span class="about-title__span">Phone: </span> +393342720160</li>
                            <li><span class="about-title__span">E-Mail: </span> cheikhmouhamedsofien@gmail.com</li>
                        </ul>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </section>
</section>
</template>

<style lang="scss">
// @import '../assets/scss/about.scss';
@use '../assets/scss/about' as *;

</style>

<script setup lang="ts">
import {
    useHead
} from '@vueuse/head'

useHead({
    title: 'About Me - Front End Developer Bologna',
    meta: [{
            name: 'description',
            content: 'About Sofien Cheikh Mohamed, Front End Developer based in Bologna, Italy.',
        },
        {
            name: 'keywords',
            content: 'front end developer bologna, web developer italy, sofien cheikh',
        },
    ],
})
        


</script>
