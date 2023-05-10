<script setup lang="ts">
import { projects } from "@/projects";

onMounted(() => {});
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
  row-gap: 48px;
  align-items: flex-start;
}
</style>
