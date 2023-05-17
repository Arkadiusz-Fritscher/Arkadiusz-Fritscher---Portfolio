<script setup lang="ts">
const router = useRouter();
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  links: {
    type: Object || undefined,
    default: undefined,
  },
});

const emits = defineEmits(["update:isOpen"]);

// Close mobile menu if viewport is over n px
const onResize = () => {
  const maxWith = 630;
  const winWidth = window.innerWidth;

  if (winWidth >= maxWith) {
    emits("update:isOpen", false);
  }
};

onMounted(() => {
  //   Disable scrolling while menu is open
  document.body.style.overflow = "hidden";

  window.addEventListener("resize", onResize);
});

onUnmounted(() => {
  //   Enable scrolling while menu is close
  document.body.style.overflow = "initial";
  window.removeEventListener("resize", onResize);
});

const closeMenu = (url: string) => {
  emits("update:isOpen", false);
  router.replace(url);
};
</script>

<template>
  <div class="mobile-nav" data-lenis-prevent>
    <div class="menu">
      <div class="links" v-if="links">
        <NuxtLink
          class="links__link"
          v-for="(link, i) in links"
          :key="link.title"
          @click="closeMenu(link.url)"
        >
          <span class="link__number">{{ `${i + 1}. ` }}</span>
          <span class="link__title">{{ link.title }}</span>
        </NuxtLink>
      </div>
    </div>
    <div class="contact">
      <div class="about">
        <span class="text--logo logo">Fritscher</span>
        <span><b>Arkadiusz Fritscher</b></span>
        <span>Frontend developer</span>
      </div>
      <div class="social">
        <UiTheSocialIcons />
      </div>
    </div>
  </div>
</template>

<style scoped>
.mobile-nav {
  position: fixed;
  inset: 0;
  background: linear-gradient(192.05deg, #260e31 0%, #23153e 30.69%, #22153e 67.67%, #162530 100%);
  padding: 20vh 16px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 14;
}

.menu {
  margin-left: 24px;
}
.links {
  display: flex;
  flex-direction: column;
  row-gap: 6px;
}

.links__link {
  font-size: 48px;
  font-weight: 600;
  padding: 8px 4px;
}

.link__number {
  font-weight: 400;
  opacity: 0.4;
  font-size: 16px;
  margin-right: 1ch;
}

.links__link:hover {
  cursor: pointer;
}

.links__link:hover .link__title {
  color: var(--color-highlight);
}

.contact {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
  color: var(--color-gray-3);
}

.about {
  flex: 0 1 60%;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  line-height: 1.2;
}

.logo {
  font-size: 16px;
  margin-bottom: 4px;
  color: var(--color-secondary);
  opacity: 0.7;
}
b {
  font-weight: 500;
}
</style>
