<template>
  <section id="contact" class="container">
    <UiSectionTitle>Contact</UiSectionTitle>
    <div class="contact-wrapper">
      <div class="contact">
        <header class="contact__title">
          Say<br />
          hello!
        </header>
        <main>
          <p class="text--body-lg contact__description">
            Zurzeit bin ich aktiv auf der Suche nach einer Vollzeitstelle als Frontend-Entwickler. Sollte ich
            Ihr Interesse geweckt haben, kontaktieren Sie mich gerne über E-Mail oder LinkedIn.
          </p>
          <div class="contact__cta">
            <a class="button--bestia button--bestia--secondary" href="mailto:fritscher.dev@gmail.com">
              <div class="button__bg"></div>
              <span>Schreib mir eine Mail</span>
            </a>
            <UiTheSocialIcons class="contact__socials" />
          </div>
        </main>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
#contact {
  min-height: 70vh;
  max-height: 800px;
}
.contact-wrapper {
  /* min-height: 80vh; */
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 20%;
  padding-bottom: 30%;
}
.contact {
  width: 100%;
  /* max-height: 80vh; */
  display: flex;
  flex-direction: column;
  gap: 32px;
}
main {
  display: flex;
  flex-direction: column;
  row-gap: 32px;
}
.contact__title {
  color: var(--color-highlight);
  font-size: clamp(5.3125rem, 2.777rem + 10.8179vw, 13rem);
  font-weight: 700;

  line-height: 100%;

  letter-spacing: -0.03em;
}
.contact__description {
  color: var(--color-gray-2);
  max-width: 56ch;
}

.contact__cta {
  display: flex;
  align-items: center;
  column-gap: 24px;
}

.contact__socials {
  display: none;
  color: var(--color-gray-3);
}

@media (min-width: 765px) {
  .contact__description {
    max-width: 43ch;
  }
  .contact-wrapper {
    padding: 20vh 0 15vh;
    max-height: 900px;
  }
  .contact {
    flex-direction: row;
    justify-content: space-evenly;
  }

  .contact__socials {
    display: flex;
  }

  main {
    justify-content: flex-end;
    margin-bottom: 40px;
  }
}
</style>
