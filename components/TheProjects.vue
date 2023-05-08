<script setup lang="ts">
import { projects } from "@/projects";
import { gsap } from "gsap";
import { observe } from "@/composables/animations";

const getImgTilt = (event: MouseEvent) => {
  const imgElement = event.target as HTMLElement | undefined;

  if (!imgElement || !event) return;

  const { offsetX, offsetY } = event;

  const { clientHeight, clientWidth } = imgElement;

  const img = { x: clientWidth, y: clientHeight };
  const mouse = { x: offsetX, y: offsetY };

  const pos = {
    x: mouse.x - img.x / 2,
    y: mouse.y - img.y / 2,
  };

  const imgTilt = {
    x: Number((pos.y / img.y).toFixed(4)),
    y: Number(-(pos.x / img.x).toFixed(4)),
  };

  return imgTilt;
};

const tiltCard = (enterEvent: MouseEvent) => {
  const img = enterEvent.target as HTMLElement | undefined;
  if (!img) return;

  const transformPerspective = 120;

  gsap.set(enterEvent.target, {
    rotationY: 0,
    rotationX: 0,
    transformPerspective,
    duration: 0,
    // transformPerspective: 60,
  });

  img.addEventListener(
    "mousemove",
    (mouseEvent) => {
      const imgTilt = getImgTilt(mouseEvent);
      if (!imgTilt?.x || !imgTilt?.y) {
        gsap.to(mouseEvent.target, {
          rotationY: 0,
          rotationX: 0,
          ease: "Power2.easeOut",
          transformPerspective,
          // transformPerspective: 80,
        });

        return;
      }

      gsap.to(enterEvent.target, {
        rotationY: imgTilt.y,
        rotationX: imgTilt.x,
        ease: "Power2.easeOut",
        transformPerspective,
        duration: 1.1,
        // transformPerspective: 60,
      });
    },
    true
  );
};

const resetImage = (event: MouseEvent) => {
  gsap.to(event.target, {
    rotationY: 0,
    rotationX: 0,
    transformPerspective: 120,
    ease: "Power2.easeOut",
    delay: 0.2,
    duration: 2,
  });
};

onMounted(() => {
  // Add and remove images event listener if in or outside view
  observe(".project__card", (entries, observer) => {
    entries.forEach((entry) => {
      const images = entry.target.querySelectorAll("img");

      if (entry.isIntersecting) {
        images.forEach((img) => {
          img.addEventListener("mouseenter", tiltCard);
          img.addEventListener("mouseleave", resetImage);
        });
      } else {
        images.forEach((img) => {
          gsap.set(img, {
            rotationY: 0,
            rotationX: 0,
            transformPerspective: 0,
            duration: 0,
          });

          img.removeEventListener("mouseenter", tiltCard);
          img.removeEventListener("mouseleave", resetImage);
        });
      }
    });
  });
});
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
