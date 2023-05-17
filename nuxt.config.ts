// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/css/reset.css", "@/assets/css/global.css", "@/assets/css/lensi.css"],
  app: {
    head: {
      htmlAttrs: {
        lang: "de",
      },
      meta: [
        {
          charset: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
      ],
    },
  },
});
