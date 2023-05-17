<script setup lang="ts">
import type { Project } from "@/projects";

const props = defineProps({
  project: {
    type: Object as () => Project,
    required: true,
  },
});
</script>

<template>
  <div class="project__card">
    <div class="card__content--wrapper">
      <div class="card__content" data-warp>
        <span class="card__date">{{ project.date }}</span>
        <h3 class="card__title text--h3">{{ project.title }}</h3>
        <p class="card__description text--body">{{ project.description }}</p>
        <div class="card__details">
          <ul class="card__details__list">
            <li class="card__details__list__title">Services</li>
            <li
              class="card__details__list__entry text--caption"
              v-for="(service, i) of project.services"
              :key="i"
            >
              {{ service }}
            </li>
          </ul>

          <ul class="card__details__list">
            <li class="card__details__list__title">Stack</li>
            <li class="card__details__list__entry text--caption" v-for="(entry, i) of project.stack" :key="i">
              {{ entry }}
            </li>
          </ul>
        </div>
        <div class="card__cta">
          <a class="button--bestia" v-for="(link, i) in project.links" :key="i" :href="link">
            <div class="button__bg"></div>
            <span>{{ i }}</span>
          </a>
          <!-- <button class="button--bestia button--bestia--secondary">
            <div class="button__bg"></div>
            <span>Github</span>
          </button> -->
        </div>
      </div>
    </div>

    <div class="card__images" data-warp>
      <div class="card__images__image" v-if="project.thumbnail">
        <img
          :src="`./projects/${project.id}/${project.thumbnail}@0,5x.jpg`"
          :alt="project.title"
          width="665"
          height="500"
          loading="lazy"
          decoding="async"
          :srcset="`./projects/${project.id}/${project.thumbnail}@0,5x.jpg 665w,
 ./projects/${project.id}/${project.thumbnail}@0,75x.jpg 998w,
 ./projects/${project.id}/${project.thumbnail}@1x.jpg 1330w`"
        />
      </div>

      <div
        class="card__images__image"
        v-if="project.images.length"
        v-for="(image, i) of project.images"
        :key="i"
      >
        <img
          :src="`./projects/${project.id}/${image}@0,5x.jpg`"
          :alt="project.title"
          width="665"
          height="500"
          loading="lazy"
          decoding="async"
          :srcset="`./projects/${project.id}/${image}@0,5x.jpg 665w,
 ./projects/${project.id}/${image}@0,75x.jpg 998w,
 ./projects/${project.id}/${image}@1x.jpg 1330w`"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.project__card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  width: 100%;
}

.card__content--wrapper {
  flex: 1 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  align-content: flex-start;
  /* position: relative; */
}

/* Card content  */
.card__content {
  display: flex;
  flex-direction: column;
}

.card__date {
  font-size: 14px;
  color: var(--color-gray-3);
  font-weight: 500;
  font-size: 14px;
  line-height: 1;
  letter-spacing: 0.01em;
  margin-bottom: 16px;
}

.card__title {
  padding-bottom: 16px;
  background: var(--color-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  line-break: auto;
}

.card__description {
  padding-bottom: 24px;
  max-width: 48ch;
  color: var(--color-gray-2);
}

.card__details {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.card__details__list {
  display: flex;
  flex-wrap: wrap;
  row-gap: 4px;
  column-gap: 0.5ch;
  align-items: flex-start;
  justify-content: flex-start;
  color: var(--color-gray-2);
}

.card__details__list__title {
  flex: 0 0 100%;
  font-weight: 600;
  font-size: 11px;
  line-height: 110%;
  letter-spacing: 0.03em;
  color: var(--color-gray-3);
  text-transform: uppercase;
}

.card__details__list__entry:not(:last-child)::after {
  content: ",";
}

.card__cta {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding-top: 32px;
  padding-bottom: 32px;
}

.btn {
  flex: 1 1 50%;
  max-width: 200px;
}

.btn--secondary {
  flex: 1 1 40%;
}

/* Card images */
.card__images {
  flex: 1 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 20px;
  margin-inline: -3%;
  position: relative;
}

.card__images__image {
  position: relative;
  overflow: hidden;
  /* overflow: clip; */
  border-radius: 1vmax;
  width: 100%;
  /* aspect-ratio: 1 / 0.8; */
  /* padding: 20px; */
  outline: 2px solid rgba(255, 255, 255, 0.03);
  transition: outline 0.3s ease-out;
  /* outline-offset: -1vw; */
}

.card__images__image:hover {
  outline-width: 3px;
  outline-color: rgba(255, 255, 255, 0.06);
}

.card__images__image:hover > img {
  scale: 1.03;
}

.card__images__image img {
  display: block;
  height: auto;
  object-fit: cover;
  transform-origin: center;
  will-change: transform;
  margin-top: -10%;
  transition: scale 0.5s ease-out;
}

@media (min-width: 675px) {
  .project__card {
    flex-direction: row;
    column-gap: 24px;
  }

  .card__content--wrapper {
    flex: 0 0 41.67%;
    position: sticky;
    position: -webkit-sticky;
    top: 15%;
    /* transform: translateY(-50%); */
    margin-bottom: 5%;
  }
  .card__content {
    /*
    margin-bottom: 30vh; */
  }

  .card__details__list {
    row-gap: 6px;
  }

  .card__images {
    flex: 1 1 100%;
    row-gap: 56px;
    margin-inline: 0px;
  }

  .card__images__image {
    outline-width: 8px;
  }

  .card__images__image img {
    width: 100%;
  }

  .card__images__image:hover {
    outline-width: 12px;
  }
}

@media (min-width: 1000px) {
  .card__details {
    flex-direction: row;
    align-items: flex-start;
    column-gap: 10%;
  }
  .card__details__list__title {
    flex: 1;
  }

  .card__details__list {
    flex-direction: column;
    row-gap: 8px;
    margin-right: 16px;
  }

  .card__details__list__entry:not(:last-child)::after {
    content: "";
  }

  .card__details__list__entry {
    list-style-position: inside;
    padding-inline-start: 0.1em;
  }

  .card__details__list__entry::marker {
    content: "\26AC\ ";
    color: #67eae8;
    margin-right: 4px;
    font-size: 14px;
  }
}
</style>
