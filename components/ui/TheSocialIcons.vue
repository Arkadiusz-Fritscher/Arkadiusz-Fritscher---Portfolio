<script setup lang="ts"></script>

<template>
  <div class="socials">
    <a
      class="social__link"
      aria-label="Arkadiusz Fritscher LinkedIn Profil"
      href="https://www.linkedin.com/in/arkadiusz-fritscher-08aaa31a5/"
      ><IconsIconLinkedin
    /></a>
    <a
      class="social__link"
      href="https://github.com/Arkadiusz-Fritscher"
      aria-label="Arkadiusz Fritscher Github Profil"
      ><IconsIconGithub
    /></a>
    <a
      class="social__link"
      href="mailto:fritscher.dev@gmail.com"
      aria-label="Arkadiusz Fritscher E-Mail Adresse"
      ><IconsIconMail
    /></a>
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
