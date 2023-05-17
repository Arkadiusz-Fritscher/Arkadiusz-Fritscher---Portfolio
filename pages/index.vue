<script setup lang="ts">
useHead({
  title: "Fritscher - Frontend developer portfolio",
  meta: [{ name: "description", content: "Entwickler Portfolio von Arkadiusz Fritscher" }],
  // bodyAttrs: {
  //   class: "test",
  // },
  // script: [{ innerHTML: "console.log('Hello world')" }],
});

useServerSeoMeta({
  title: "Fritscher - Frontend developer portfolio",
  ogTitle: "Fritscher - Frontend developer portfolio",
  description: "Entwickler Portfolio von Arkadiusz Fritscher",
  ogDescription: "Entwickler Portfolio von Arkadiusz Fritscher",
  ogImage: "https://arkadiusz-fritscher-portfolio.vercel.app/oGImage.jpg",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <TheNav />
  <TheHero />
  <TheProjects />
  <TheAbout />
  <TheContact />
  <TheFooter />
</template>

<style scoped></style>
