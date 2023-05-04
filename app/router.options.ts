import type { RouterConfig } from "@nuxt/schema";

// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      return {
        el: to.hash,
        top: -10,
        behavior: "smooth",
      };
    }

    return {
      top: 0,
      left: 0,
    };
  },
};
