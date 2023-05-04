<script setup lang="ts">
const heroCenterRef = ref();
const heroImage = ref();

const resetHeroImagePos = () => {
  heroImage.value.style.top = `${
    heroCenterRef.value.offsetTop + heroCenterRef.value.clientHeight / 2
  }px`;

  heroImage.value.style.display = "initial";
};

onMounted(() => {
  resetHeroImagePos();
  window.addEventListener("resize", resetHeroImagePos);
});

onUnmounted(() => {
  window.removeEventListener("resize", resetHeroImagePos);
});
</script>

<template>
  <header class="header" id="home">
    <div class="hero">
      <div class="hero__title text--caption">Arkadiusz Fritscher</div>
      <h1 class="hero__headline text--hero" ref="heroCenterRef">
        Frontend developer
      </h1>
      <p class="hero__description text--body">
        As a self-taught frontend developer, I am passionate about creating
        engaging user experiences that drive results. My goal is to work at a
        company where I can bring innovative front-end designs and development
        solutions to life. Let's work together to achieve your goals
      </p>
      <button class="btn__cta btn" @click="$router.push('#contact')">
        Contact me
      </button>
    </div>
    <img
      src=""
      alt=""
      ref="heroImage"
      class="hero__image"
      width="900"
      height="840"
      decoding="async"
      srcset="
        @/assets/images/hero@0.5.jpg  450w,
        @/assets/images/hero@0.75.jpg 675w,
        @/assets/images/hero@1.jpg    900w
      "
    />
  </header>
</template>

<style scoped>
.header {
  min-height: 400px;
  height: 100vh;
  max-height: 982px;
  display: flex;
  align-items: center;
  position: relative;
}

.hero {
  display: flex;
  flex-direction: column;
  margin-inline: auto;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  padding-inline: 8px;
}

.hero__title {
  z-index: 10;
  text-transform: uppercase;
  color: var(--color-gray-2);
  margin-bottom: 6px;
}

.hero__headline {
  z-index: 10;
  text-align: center;
  background: var(--color-gradient);
  background-clip: text;
  color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  font-size: clamp(4.6875rem, 3.0873rem + 3.3467vw, 6.25rem);
}

.hero__description {
  max-width: 54ch;
  z-index: 10;
  color: var(--color-gray-2);
  margin-inline: 8%;
  margin-top: 16px;
}

.btn__cta {
  /* Mobile only */
  margin-top: 32px;
}

.hero__image {
  position: absolute;
  left: 50%;
  top: 360px;
  transform: translate(-50%, -50%);
  object-fit: contain;
  height: auto;
  width: 100vw;
  min-width: 470px;
  max-width: 900px;
  max-height: 100%;
  z-index: -1;
  pointer-events: none;
  opacity: 0.7;
  display: none;
}

@media (max-width: 765px) {
  .hero__headline {
    font-size: clamp(3.5rem, 1.7258rem + 9.4624vw, 6.25rem);
  }
}

@media (min-width: 765px) {
  .hero__description {
    margin-top: 10%;
    margin-right: 0px;
    margin-left: 34%;
    max-width: 73ch;
    align-self: end;
  }
}

@media (min-width: 630px) {
  .btn__cta {
    display: none;
  }
}
</style>
