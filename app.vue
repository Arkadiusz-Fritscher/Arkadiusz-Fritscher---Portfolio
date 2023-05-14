<script setup lang="ts">
import Lenis from "@studio-freight/lenis";
import { scrollDistance, roundTo, MathUtils } from "@/composables/utils";

const sparksParallax = () => {
  const sparks = Array.from(document.querySelectorAll(".spark"));

  const moveSparks = (distance: number, start: number, end: number, direction: number) => {
    const scrollPercent = roundTo(
      (window.scrollY / (document.body.clientHeight - window.innerHeight)) * 100,
      0
    );

    document.documentElement.style.setProperty("--scroll-percent", `${scrollPercent}%`);

    sparks.forEach((spark, i) => {
      const rect = spark.getBoundingClientRect();
      // const y = winHeight - rect.y;
      const movement = MathUtils.lerp(0, 0 + (spark.clientHeight * scrollPercent * (i + 1)) / 100, 0.3);
      spark.style.transform = `translate3d(-50%, ${i % 2 == 0 ? -movement : movement}px, 0)`;
    });
  };

  scrollDistance(moveSparks);
};

onMounted(() => {
  if (window) {
    const lenis = new Lenis({ lerp: 0.1 });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }

  sparksParallax();
});
</script>

<template>
  <NuxtPage />
  <div id="parallax_bg" data-lenis-prevent>
    <span class="spark spark--1" data-lenis-prevent></span>
    <span class="spark spark--2" data-lenis-prevent></span>
    <span class="spark spark--3" data-lenis-prevent></span>
  </div>
</template>

<style>
@import url(@/assets/css/lensi.css);
* {
  /* outline: 1px dotted hsla(0, 16%, 85%, 0.4); */
}

#__nuxt {
  position: relative;
  /* overflow: hidden; */
}

#__nuxt::after {
  content: "";
  /* content: url(@/assets/images/hero@1.jpg); */
  background-image: url(@/assets/images/hero@1.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 600px;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  max-width: 900px;
  position: absolute;
  top: 0;
  top: var(--hero-top);
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -50;
}

@media (min-width: 500px) {
  #__nuxt::after {
    background-size: contain;
  }
}

#parallax_bg {
  position: absolute;
  inset: 0;
  z-index: -15;
  overflow: hidden;
  overscroll-behavior: contain;
}

.spark {
  display: block;
  position: fixed;

  aspect-ratio: 4/2;
  width: 60vw;

  min-width: 500px;
  min-height: 600px;
  max-width: 2000px;
  max-height: 900px;
  background-color: rgb(93, 127, 227);
  border-radius: 100vmax;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  filter: blur(130px);
  transform: translateX(-50%);
  transform-origin: center;
  pointer-events: none;
  opacity: 0.1;
  /* top: var(--scroll-percent); */
  top: 0;
}

.spark--1 {
  left: 0;
  top: 40%;
  /* transform: translateY(-80%); */
  background-color: var(--color-highlight);
}
.spark--2 {
  /* top: var(--scrollPercent); */
  top: 2%;
  left: 30%;
  /* width: 40vh; */
  /* height: 80vh; */
  /* opacity: 0.1; */
  /* transform: translateY(-20%); */
}
.spark--3 {
  /* top: var(--scrollPercent); */
  top: 60%;
  left: 100%;
  /* width: 40vh; */
  /* height: 50vh; */
  background-color: rgb(230, 0, 255);
  /* opacity: 0.1; */
  /* transform: translateY(40%); */
}

@media (min-width: 800px) {
  .spark {
    filter: blur(120px);
    opacity: 0.12;
  }

  .spark--2 {
    opacity: 0.08;
  }

  .spark--3 {
    opacity: 0.04;
  }
}
</style>
