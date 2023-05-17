<template>
  <section id="about" class="container">
    <UiSectionTitle class="section__title">About me</UiSectionTitle>
    <div class="about">
      <figure class="about__content text--body">
        <figcaption class="about__p1">
          Hallo, ich bin der Arkadiusz. Ein self-taught Frontend Entwickler aus der Nähe von Mainz, Germany.
          Mein Interesse für die Programmierung wurde bereits als Kind geweckt, wo ich simple HTML Seiten mit
          Dreamweaver und Photoshop baute. Ich begann eine Ausbildung zum Anlagenmechaniker und wurde
          anschließend vom Unternehmen übernommen, wo ich bis heute noch arbeite.
        </figcaption>
        <div class="about__img">
          <img src="@/assets/images/portrait.jpg" alt="Arkadiusz Fritscher" />
        </div>
        <figcaption class="about__p2">
          Im Jahr 2019 habe ich das erste Mal von Coding Bootcamps gehört, und der Tatsache, dass Unternehmen
          Quereinsteiger nach nur 12 Wochen Ausbildung einstellen. Ich hatte den Beschluss gefasst, meinen
          geheimen Traum, als Programmierer zu arbeiten, wieder aufleben lassen. Mittlerweile verheiratet und
          Vater von zwei kleinen Jungs habe ich jede freie Minute dazu genutzt mir durch Lesen, Podcasts,
          Online Videos und eigene Projekte mir das Programmieren, speziell das Frontend selber beizubringen.
        </figcaption>
        <div class="about__cta">
          <button class="button--bestia">
            <div class="button__bg"></div>
            <span>Zum Lebenslauf</span>
          </button>
        </div>
      </figure>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
#about {
  margin-block: 56px;
}

.about {
  background-color: #e2deeb;
  color: var(--color-gray-4);
  border-radius: 1.5vmax;
  padding: 32px 24px;
  margin-inline: auto;
  margin-inline: -4%;
  /* width: fit-content; */
}

.section__title {
  margin-bottom: 16px;
}

.about__content {
  display: grid;
  justify-items: center;
  justify-content: center;
  align-items: start;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, min-content);
  gap: 16px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "p1"
    "img"
    "p2"
    "cta";
}

figcaption {
  /* max-width: 56ch; */
  /* margin-inline: auto; */
}

.about__p1 {
  grid-area: p1;
}

.about__img {
  grid-area: img;
  width: 100%;
  border-radius: 1.4vmax;
  overflow: hidden;
}

.about__img img {
  display: block;
  object-fit: contain;
  object-position: center;
  width: 100%;
  /* aspect-ratio: 3/4; */
  /* height: 100%; */
}

.about__p2 {
  grid-area: p2;
}

.about__cta {
  grid-area: cta;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 24px;
}

.about__cta .btn {
  width: 100%;
  max-width: 320px;
}

@media (min-width: 920px) {
  #about {
    margin-block: 10vh;
  }
  .about {
    padding: 6% 6%;
    margin-inline: auto;
  }

  .about__img {
    max-width: 560px;
    margin-left: auto;
  }
  .about__cta {
    justify-content: flex-start;
    width: 100%;
  }
  .about__content {
    justify-items: center;
    grid-template-columns: minmax(40%, 47ch) minmax(50%, auto);
    grid-template-rows: min-content min-content 1fr;
    gap: 16px 24px;
    grid-template-areas:
      "p1 img"
      "p2 img"
      "cta img";
  }
}
</style>
