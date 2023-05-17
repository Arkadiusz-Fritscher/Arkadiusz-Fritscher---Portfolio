<script setup lang="ts">
import { projects } from "@/projects";
import { scrollAnimation } from "@/components/project/projectAnimation";

const sortedProjects = computed(() => projects.sort((a, b) => a.pos - b.pos));

onMounted(() => {
  const projectEl = Array.from(document.querySelectorAll(`[data-project]`));
  if (!projectEl.length) return;
  scrollAnimation(projectEl);
});
</script>

<template>
  <main id="projects">
    <div class="container">
      <UiSectionTitle>Private Projekte</UiSectionTitle>
      <div v-if="projects.length" class="project__list">
        <ProjectCard
          v-for="project in sortedProjects"
          :key="project.id"
          :project="project"
          :data-project="project.id"
        />
      </div>
    </div>
  </main>
</template>

<style scoped>
#projects {
  position: relative;
  width: 100%;
}
.project__list {
  display: flex;
  flex-direction: column;
  row-gap: 56px;
  align-items: flex-start;
}

@media (min-width: 768px) {
  .project__list {
    row-gap: 72px;
    /* background-color: aqua; */
  }
}

@media (min-width: 1000px) {
  .project__list {
    row-gap: 20vh;
    /* background-color: aqua; */
  }
}
</style>
