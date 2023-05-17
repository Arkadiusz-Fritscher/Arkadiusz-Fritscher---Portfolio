<script setup lang="ts">
import TheSocialIcons from "@/components/ui/TheSocialIcons.vue";
import MobileMenuButton from "@/components/ui/MobileMenuButton.vue";

const links = [
  {
    title: "Projekte",
    url: "#projects",
  },
  {
    title: "Über mich",
    url: "#about",
  },
  {
    title: "Kontakt",
    url: "#contact",
    highlighted: true,
  },
];

const isMenuOpen = ref<boolean>(false);
const lastPos = ref(0);

const toggleMenu = () => {
  if (!isMenuOpen.value) {
    // lastPos.value = window.scrollY;
    // window.scrollTo({ top: 0 });
    isMenuOpen.value = !isMenuOpen.value;
  } else {
    // window.scrollTo({ top: lastPos.value });
    isMenuOpen.value = !isMenuOpen.value;
  }
};
</script>

<template>
  <nav class="nav--wrapper">
    <div class="nav container">
      <div class="logo text--logo">Fritscher</div>
      <div class="links">
        <nuxt-link
          :class="[link.highlighted ? 'btn' : ' link link--metis']"
          v-for="link in links.filter((link) => link.highlighted !== true)"
          :key="link.title"
          :to="link.url"
          >{{ link.title }}</nuxt-link
        >

        <button
          class="button--bestia button--bestia--secondary"
          v-for="link in links.filter((link) => link.highlighted)"
          @click="$router.push(link.url)"
        >
          <div class="button__bg"></div>
          <span>{{ link.title }}</span>
        </button>
      </div>
      <div class="social"><TheSocialIcons /></div>
      <div class="mobile-menu">
        <MobileMenuButton @click="toggleMenu" v-model:is-open="isMenuOpen" />
      </div>
      <Teleport to="body">
        <TheMobileNav v-if="isMenuOpen" :links="links" v-model:is-open="isMenuOpen" />
      </Teleport>
    </div>
  </nav>
</template>

<style scoped>
.nav--wrapper {
  width: 100%;
  position: relative;
  position: fixed;
  inset-inline: 0;
  top: 0;
  z-index: 15;
}
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

  /* inset-inline: 0; */
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
