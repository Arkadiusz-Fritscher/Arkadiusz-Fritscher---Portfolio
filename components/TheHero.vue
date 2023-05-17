<script setup lang="ts">
const heroCenterRef = ref();
import { roundTo } from "@/composables/utils";

const positionHeroImage = () => {
  document.documentElement.style.setProperty(
    "--hero-top",
    `${roundTo(heroCenterRef.value.offsetTop + heroCenterRef.value.clientHeight / 2, 2)}px`
  );
};

onMounted(() => {
  positionHeroImage();
  window.addEventListener("resize", positionHeroImage);
});
</script>

<template>
  <header class="header" id="home" ref="hero">
    <div class="hero">
      <div class="hero__title text--caption">Arkadiusz Fritscher</div>
      <h1 class="hero__headline text--hero" ref="heroCenterRef">Frontend developer</h1>
      <p class="hero__description text--body">
        Als <b>self-taught Frontend-Entwickler</b> bin ich leidenschaftlich daran interessiert, ansprechende
        Benutzererlebnisse zu schaffen, die <b>Ergebnisse erzielen</b>. Mein Ziel ist es, bei einem
        Unternehmen zu arbeiten, wo ich innovative Frontend-Designs und Entwicklungs-Lösungen zum Leben
        erwecken kann. Lassen Sie uns <b>zusammenarbeiten, um Ihre Ziele zu erreichen</b>.
      </p>
      <button class="btn__cta btn" @click="$router.push('#contact')">Contact me</button>
    </div>
    <!-- <img
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
    /> -->
  </header>
</template>

<style scoped>
.header {
  min-height: 600px;
  height: 90vh;
  /* height: 60vh; */
  max-height: 982px;
  display: flex;
  align-items: flex-end;
  position: relative;
  margin-bottom: 32px;
  overflow-x: hidden;
  margin-bottom: 20vh;
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
  /* position: relative; */
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
  width: calc(100% - 48px);
  max-width: 360px;
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
  z-index: -50;
  pointer-events: none;
  opacity: 0.7;
  /* display: none; */
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
