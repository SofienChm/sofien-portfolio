<template>
    <section class="experience">
        <div class="container">
            <div class="row">
					<div class="col-md-12 text-center">
						<div class="experience-top-head">
							<h2 class="head-two">Experience</h2>
                            <p>I work in collaboration with Web Designers to integrate their designs flawlessly with a nice touch of animation.</p>
							<div class="top-head-before">
								<i class="fa fa-dot-circle-o" aria-hidden="true"></i>
							</div>
						</div>
					</div>
				</div>
            <div class="options">
                <div class="option exp-1 active" style="--optionBackground:url('../assets/images/elyos.png');">
                    <div class="shadow"></div>
                    <div class="label">
                        <div class="icon">
                            <img src="../assets/images/elyos-icon.png" alt="">
                        </div>
                        <div class="info">
                            <div class="main">Elyos digital</div>
                            <div class="sub">Front end developer</div>
                        </div>
                    </div>
                </div>
                <div class="option exp-2">
                    <div class="shadow"></div>
                    <div class="label">
                        <div class="icon">
                            <img src="../assets/images/gostaff-icon.png" alt="">
                        </div>
                        <div class="info">
                            <div class="main">Gostaff</div>
                            <div class="sub">Front end developer</div>
                        </div>
                    </div>
                </div>
                <div class="option exp-3">
                    <div class="shadow"></div>
                    <div class="label">
                        <div class="icon">
                            <img src="../assets/images/enano-icon.png" alt="">
                        </div>
                        <div class="info">
                            <div class="main">Enano-tech</div>
                            <div class="sub">Wordpress developer & front end developer</div>
                        </div>
                    </div>
                </div>
                <div class="option exp-4" >
                    <div class="shadow"></div>
                    <div class="label">
                        <div class="icon">
                            <img src="../assets/images/carthage-icon.png" alt="">
                        </div>
                        <div class="info">
                            <div class="main">Carthage solutions</div>
                            
                            <div class="sub">Wordpress developer</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style lang="scss">

// @import '../assets/scss/experience.scss';
@use '../assets/scss/experience' as *;

</style>

<script setup lang="ts">

import $ from 'jquery'
import { useHead } from '@vueuse/head'
import { onMounted } from 'vue'

useHead({
  title: 'Experience - Front End Developer Bologna',
  meta: [
    {
      name: 'description',
      content: 'About Sofien Cheikh Mohamed, Front End Developer based in Bologna, Italy.',
    },
    {
      name: 'keywords',
      content: 'front end developer bologna, web developer italy, sofien cheikh',
    },
  ],
})

onMounted(() => {
  $(".option").click(function(){
    $(".option").removeClass("active")
    $(this).addClass("active")
  });
})
</script>
