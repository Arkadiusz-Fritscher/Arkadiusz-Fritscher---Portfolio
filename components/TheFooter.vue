<template>
  <footer class="container">
    <div class="footer">
      <p class="content">
        <b>Arkadiusz Fritscher</b> <br />
        Frontent developer
      </p>
      <UiTheSocialIcons id="footer__socials" />
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped>
b {
  font-weight: 600;
}
.footer {
  display: flex;
  flex-wrap: wrap-reverse;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
  min-height: 32px;
  padding-top: 16px;
  padding-bottom: 20px;
  color: var(--color-gray-3);
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.02em;
}

#footer__socials {
  color: var(--color-gray-3);
}

@media (min-width: 765px) {
  #footer__socials {
    display: none;
  }
}
</style>
