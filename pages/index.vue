<script setup lang="ts">
useHead({
  title: "Fritscher - Frontend developer portfolio",
  meta: [{ name: "description", content: "My amazing site." }],
  bodyAttrs: {
    class: "test",
  },
  script: [{ innerHTML: "console.log('Hello world')" }],
});

useServerSeoMeta({
  title: "My Amazing Site",
  ogTitle: "My Amazing Site",
  description: "This is my amazing site, let me tell you all about it.",
  ogDescription: "This is my amazing site, let me tell you all about it.",
  ogImage: "https://example.com/image.png",
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
