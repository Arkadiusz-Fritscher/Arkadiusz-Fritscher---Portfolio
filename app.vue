<script setup lang="ts"></script>

<template>
  <div class="" data-scroll-container>
    <NuxtPage />
    <div id="parallax_bg">
      <span class="spark spark--1" data-depth="1.7">
        <!-- <img :src="sparkImg" alt="" /> -->
      </span>
      <span class="spark spark--2" data-depth=".7"></span>
      <span class="spark spark--3" data-depth="1.5"></span>
    </div>
  </div>
</template>

<style>
* {
  /* outline: 1px dotted hsla(0, 16%, 85%, 0.4); */
}

#__nuxt {
  position: relative;
}

#parallax_bg {
  position: absolute;
  inset: 0;
  z-index: -15;
  overflow: hidden;
}

.spark {
  display: block;
  position: fixed;

  aspect-ratio: 3/2;
  width: 60vh;

  min-width: 500px;
  min-height: 600px;
  max-width: 2000px;
  max-height: 900px;
  background-color: rgb(93, 127, 227);
  border-radius: 100vmax;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  filter: blur(10vh);
  transform: translate(-50%, -50%);
  transform-origin: center;
  pointer-events: none;
  opacity: 0.1;
}

.spark--1 {
  top: 10%;
  left: 0;
  background-color: var(--color-highlight);
}
.spark--2 {
  top: 70%;
  left: 30%;
  width: 40vh;
  height: 80vh;
  opacity: 0.1;
}
.spark--3 {
  top: 90%;
  left: 100%;
  width: 40vh;
  height: 50vh;
  background-color: rgb(230, 0, 255);
  opacity: 0.1;
}
</style>
