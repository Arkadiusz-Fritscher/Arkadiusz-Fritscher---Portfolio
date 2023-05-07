<script setup lang="ts">
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

onMounted(() => {
  //   Disable scrolling while menu is open
  document.body.style.overflow = "hidden";
});

onUnmounted(() => {
  //   Enable scrolling while menu is close
  document.body.style.overflow = "initial";
});
</script>

<template>
  <div class="mobile-nav">
    <div class="menu">
      <div class="links" v-if="links">
        <NuxtLink
          class="link"
          v-for="link in links"
          :key="link.title"
          :to="link.url"
          >{{ link.title }}</NuxtLink
        >
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
  position: absolute;
  inset: 0;
  background: linear-gradient(
    192.05deg,
    #260e31 0%,
    #23153e 30.69%,
    #22153e 67.67%,
    #162530 100%
  );
  z-index: 100;
  padding: 20vh 16px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.menu {
  margin-left: 24px;
}
.links {
  display: flex;
  flex-direction: column;
  row-gap: 6px;
}

.link {
  font-size: 48px;
  font-weight: 600;
  padding: 8px 4px;
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
