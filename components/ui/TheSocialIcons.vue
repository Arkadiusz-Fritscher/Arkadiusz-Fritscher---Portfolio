<script setup lang="ts"></script>

<template>
  <div class="socials">
    <a class="social__link" href=""><IconsIconLinkedin /></a>
    <a class="social__link" href=""><IconsIconGithub /></a>
    <a class="social__link" href=""><IconsIconMail /></a>
  </div>
</template>

<style scoped>
.socials {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
}

.social__link {
  display: flex;
  align-items: center;
  justify-content: center;
}

.social__link:hover {
  color: var(--color-gray-1);
}
</style>
