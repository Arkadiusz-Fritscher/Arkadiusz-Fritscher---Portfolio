<script setup lang="ts">
import { projects } from "@/projects";
</script>

<template>
  <main id="projects">
    <div class="container">
      <UiSectionTitle>Projects</UiSectionTitle>
      <div v-if="projects.length" class="project__list">
        <UiProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
      </div>
    </div>

    <div class="bg">
      <span class="spark spark--1"> </span>
      <span class="spark spark--2"> </span>
      <span class="spark spark--3"> </span>
    </div>

    <!-- <span class="spark spark--2"> </span> -->
  </main>
</template>

<style scoped>
#projects {
  position: relative;
  width: 100%;

  /* background-color: antiquewhite; */
}
.project__list {
  display: flex;
  flex-direction: column;
  row-gap: 48px;
  align-items: flex-start;
}

.bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: -10;
  pointer-events: none;
}

.spark {
  width: 80vw;
  height: 60vh;
  max-width: 800px;
  max-height: 800px;
  position: absolute;
  filter: blur(90vw);
  transform: translateX(-50%);
  transform-origin: center;
  pointer-events: none;
  opacity: 0.4;
}

.spark--1 {
  background-color: var(--color-highlight);
  top: 10%;
  left: 0;
  opacity: 0.6;
}

.spark--2 {
  background-color: #ee79ed;
  top: 37%;
  left: 100%;
  width: 100vh;
  height: 80vh;
  /* opacity: 0.3; */
}
.spark--3 {
  background-color: #ab80eb;
  top: 64%;
  left: 20%;
  width: 70vh;
  height: 60vh;
  /* opacity: 0.4; */
}

@media (min-width: 675px) {
  .spark {
    filter: blur(40vh);
  }
}
</style>
