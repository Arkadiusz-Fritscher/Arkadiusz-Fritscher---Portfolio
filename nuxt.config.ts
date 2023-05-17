// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  plugins: [{ src: "~/plugins/vercel.ts", mode: "client" }],
  modules: ["@nuxt/image-edge"],
  image: {
    presets: {
      project: {
        modifiers: {
          format: "webp",
          width: 1330,
          height: 1000,
        },
      },
    },
    // The screen sizes predefined by `@nuxt/image`:
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536,
    },
  },
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
