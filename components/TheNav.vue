<script setup lang="ts">
import TheSocialIcons from "@/components/ui/TheSocialIcons.vue";
const links = [
  {
    title: "Projects",
    url: "#projects",
  },
  {
    title: "About me",
    url: "#about",
  },
  {
    title: "Contact",
    url: "#contact",
    highlighted: true,
  },
];
</script>

<template>
  <nav class="nav container">
    <div class="logo text--logo">Fritscher</div>
    <div class="links">
      <nuxt-link
        :class="[link.highlighted ? 'btn' : 'links__link']"
        v-for="link in links"
        :key="link.title"
        :to="link.url"
        >{{ link.title }}</nuxt-link
      >
    </div>
    <div class="social"><TheSocialIcons /></div>
    <div class="mobile-menu"></div>
  </nav>
</template>

<style scoped>
.social {
  display: none;
  color: var(--color-gray-3);
}

.nav {
  display: flex;
  align-items: center;
  min-height: 61px;
  padding-top: 24px;
  padding-bottom: 8px;
  column-gap: 12px;
}

.links {
  display: none;
  column-gap: 4px;
  margin-left: auto;
  align-items: center;
}

.links__link {
  padding: 4px 8px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0.01em;
}

@media (min-width: 630px) {
  .social,
  .links {
    display: flex;
  }

  .mobile-menu {
    display: none;
  }
}
</style>
