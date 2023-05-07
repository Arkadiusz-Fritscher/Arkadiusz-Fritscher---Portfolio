<script setup lang="ts">
import TheSocialIcons from "@/components/ui/TheSocialIcons.vue";
import MobileMenuButton from "@/components/ui/MobileMenuButton.vue";
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

const isMenuOpen = ref<boolean>(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
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
    <div class="mobile-menu">
      <MobileMenuButton @click="toggleMenu" :is-open="isMenuOpen" />
    </div>
    <Teleport to="body">
      <TheMobileNav v-if="isMenuOpen" :links="links" :is-open="isMenuOpen" />
    </Teleport>
  </nav>
</template>

<style scoped>
.social {
  display: none;
  color: var(--color-gray-3);
}

.mobile-menu {
  z-index: 200;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  .nav {
    justify-content: flex-start;
  }
  .social,
  .links {
    display: flex;
  }

  .mobile-menu {
    display: none;
  }
}
</style>
