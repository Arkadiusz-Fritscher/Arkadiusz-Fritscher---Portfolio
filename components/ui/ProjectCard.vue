<script setup lang="ts">
import { Project } from "@/projects";
defineProps({
  project: {
    type: Object as () => Project,
    required: true,
  },
});
</script>

<template>
  <div class="project__card">
    <div class="card__content">
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
          <li
            class="card__details__list__entry text--caption"
            v-for="(entry, i) of project.stack"
            :key="i"
          >
            {{ entry }}
          </li>
        </ul>
      </div>
      <div class="card__cta">
        <button class="btn">Live</button>
        <button class="btn btn--secondary">Github</button>
      </div>
    </div>
    <div class="card__images">
      <img
        :alt="project.title"
        v-if="project.thumbnail"
        :src="`./projects/${project.id}/${project.thumbnail}`"
      />
      <img
        :alt="project.title"
        v-if="project.images.length"
        v-for="(image, i) of project.images"
        :key="i"
        :src="`./projects/${project.id}/${image}`"
      />
    </div>
  </div>
</template>

<style scoped>
.project__card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

/* Card content  */
.card__content {
  flex: 1 100%;
  max-width: 48ch;
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
  margin-bottom: 16px;
  background: var(--color-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

.card__description {
  margin-bottom: 24px;
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
  row-gap: 8px;
  margin-inline: -12px;
}

.card__images img {
  display: block;
  border-radius: 1vmax;
  /* padding: 20px; */
  margin: 1vw;
  outline: 1vw solid rgba(255, 255, 255, 0.03);
}

@media (min-width: 675px) {
  .project__card {
    flex-direction: row;
    column-gap: 24px;
  }

  .card__content {
    flex: 0 0 41.67%;
    max-width: 48ch;
    position: sticky;
    position: -webkit-sticky;
    top: 20%;
    margin-bottom: 30vh;
  }

  .card__details__list {
    row-gap: 6px;
  }

  .card__images {
    flex: 1 1 auto;
    row-gap: 32px;
    margin-inline: 0px;
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

  .card__images img {
    border-radius: 12px;
    margin: 12px;
    outline-width: 12px;
  }
}
</style>
