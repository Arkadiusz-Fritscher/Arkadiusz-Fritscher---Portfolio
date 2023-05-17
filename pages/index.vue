<script setup lang="ts">
useHead({
  title: "Fritscher - Frontend developer portfolio",
  meta: [
    { name: "description", content: "Entwickler Portfolio von Arkadiusz Fritscher" },
    { name: "msapplication-TileColor", content: "#20163e" },
    { name: "theme-color", content: "#20163E" },
    { name: "robots", content: "index, follow" },
    { name: "googlebot", content: "index, follow" },
    { name: "google", content: "notranslate" },
  ],
  link: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
    {
      rel: "mask-icon",
      href: "/safari-pinned-tab.svg",
      color: "#623fc9",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },

    // {
    //   rel: "icon",
    //   type: "image/svg+xml",
    //   href: "/favicon.svg",
    // },
    // {
    //   rel: "alternate icon",
    //   type: "image/png",
    //   href: "/favicon.png",
    // },
  ],
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
