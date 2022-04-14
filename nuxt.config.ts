import { defineNuxtConfig } from "nuxt3";
import { resolve } from "pathe";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  //ErrorPage: "error",
  build: {
    transpile: ["three", "troisjs"],
  },
  alias: {
    "😺": ".",
    "😺/*": "./*",
    "👽": resolve(__dirname, "assets"),
    "👽/*": resolve(__dirname, "assets/*"),
  },
  modules: ["@nuxtjs/tailwindcss"],
  messages: { error_404: "CAT NOT FOUND", loading: "JU JU" },
  meta: {
    meta: [
      { name: "title", content: "John-Weak" },
      { name: "description", content: "Tushar Bali's personal profile" },
      { name: "author", content: "Tushar Bali/John-Weak" },
      {
        name: "theme-color",
        content: "#000000",
        media: "(prefers-color-scheme: dark)",
      },
      {
        name: "theme-color",
        content: "#000000",
        media: "(prefers-color-scheme: light)",
      },
      //Open Graph/Facebook
      { property: "og:url", content: "https://johnweak.dev" },
      { property: "og:title", content: "John-Weak" },
      {
        property: "og:description",
        content: "Tushar Bali's personal profile",
      },
      {
        property: "og:image",
        content: "https://johnweak.dev/images/haha_cat.jpg",
      },
      //Twitter
      { property: "twitter:url", content: "https://johnweak.dev" },
      { property: "twitter:title", content: "John-Weak" },
      {
        property: "twitter:description",
        content: "Tushar Bali's personal profile",
      },
      {
        property: "twitter:image",
        content: "https://johnweak.dev/images/haha_cat.jpg",
      },
      {
        property: "twitter:card",
        content: "summary_large_image",
      },
      {
        property: "twitter:creator",
        content: "tusharbali",
      },
    ],
  },
});
