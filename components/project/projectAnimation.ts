import { scrollDistance, roundTo, MathUtils } from "@/composables/utils";

const animation = (e: Event) => {
  const images = document.querySelectorAll("[data-visible]");

  images.forEach((image) => {
    const img = image as HTMLElement;
    const inView = JSON.parse(img.dataset.visible as string);

    if (inView) {
      const rect = img.getBoundingClientRect();
      const scrollPercent = roundTo(Number(rect.top + rect.height) / window.innerHeight, 3);
      const scrollPos = roundTo(rect.height * 0.08 * scrollPercent, 2);

      const currentYTransform = Number(
        img.style.getPropertyValue("transform").split(",").at(1)?.replace("px", "")
      );

      const movement = MathUtils.lerp(currentYTransform, scrollPos, 0.1);

      img.style.transform = `translate3d(0, ${movement}px, 0)`;
    } else {
      img.style.transform = `translate3d(0, 0px, 0)`;
    }
  });
};

// Trigger the animation if in view
const animationTrigger = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
  entries.forEach((entry, i) => {
    const img = entry.target as HTMLElement;

    if (entry.isIntersecting) {
      img.dataset.visible = "true";
    } else {
      img.dataset.visible = "false";
    }
  });
};

// Init the Animation
export const scrollAnimation = (ctx: Element[]) => {
  const observer = new IntersectionObserver(animationTrigger);
  const elements = Array.from(document.querySelectorAll(".card__images img"));

  elements.forEach((element) => {
    observer.observe(element);
  });

  window.onscroll = animation;
};
