

<template>
    <section class="banner_2" id="banner_2" aria-label="Introduction banner">
        <div class="container">
            <div class="row">
                <div class="banner_terminal" role="region" aria-labelledby="banner-title">
                    <div class="terminal-window">
                        <header>
                            <div class="button green"></div>
                            <div class="button yellow"></div>
                            <div class="button red"></div>
                        </header>
                        <div class="terminal">
                            <!-- <span class="dollar"></span> -->
                            <span class="sofdev">root@sofdev:~$</span> hi there, i'm Sofien cheikh mohamed
                            <br/>
                            <span class="sofdev">root@sofdev:~$</span> a web developer (and occasionally a web designer)
                            <br/>
                            <span class="sofdev">root@sofdev:~$</span> based in Bologna Italy
                            <br/>
                            <span class="sofdev">root@sofdev:~$</span> i drink a lot of tea
                            <br/>
                            <span class="sofdev">root@sofdev:~$</span> and i create interactive websites that run across platforms & devices
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
// @import '../assets/scss/banner.scss';
@use '../assets/scss/banner' as *;

</style>

<script setup lang="ts">

import $ from 'jquery'
import { useHead } from '@vueuse/head'
import { onMounted } from 'vue'

useHead({
    title: 'Front End Developer Bologna | Sofien Cheikh Mohamed',
    meta: [
        {
        name: 'description',
        content: 'Sofien Cheikh Mohamed, Front End Developer based in Bologna, Italy; creating interactive and responsive websites.',
        },
        {
        name: 'keywords',
        content: 'front end developer bologna, front end developer italy, web developer bologna, web developer italy',
        },
        {
        property: 'og:title',
        content: 'Front End Developer Bologna | Sofien Cheikh Mohamed'
        },
        {
        property: 'og:description',
        content: 'Experienced Front End Developer based in Bologna, Italy, specializing in responsive digital experiences.'
        }
    ]
})

onMounted(() => {
$.fn.typewriter = function() {
        this.each(function() {
            var c = $(this),
            b = c.html(),
            a = 0,
            d = 0;
            c.html("");
            var e = function() {
            if ("<" == b.substring(a, a + 1)) {
                var f = new RegExp(/<span class="instant"/),
                g = new RegExp(/<span class="clear"/);
                if (b.substring(a, b.length).match(f)) a += b.substring(a, b.length).indexOf("</span>") + 7;
                else if (b.substring(a, b.length).match(g)) d = a, a += b.substring(a, b.length).indexOf("</span>") + 7;
                else
                for (;
                    ">" != b.substring(a, a + 1);) a++
            }
            c.html(b.substring(d, a++) + (a & 1 ? "_" : ""));
            a >= b.length || setTimeout(e, 1 + 50 *
                Math.random())
            };
            e()
        });
        return this
        };
        $(".terminal").typewriter();

        $(".button.red").click(function(){
            $(".banner_terminal").addClass("close");
        });
})

</script>