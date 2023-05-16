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
      <UiSectionTitle>Projects</UiSectionTitle>
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
  row-gap: 20vh;
  align-items: flex-start;
}
</style>
