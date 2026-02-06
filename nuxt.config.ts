// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/ui",
    "@nuxt/hints",
    "nuxt-auth-sanctum",
  ],
  css: ["~/assets/css/main.css"],
  sanctum: {
    baseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || "http://api.quizzes.test",
    endpoints: {
      user: "/user",
    },
    redirect: {
      onLogin: "/quizzes",
    },
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: "http://api.quizzes.test",
    },
  },
  vite: {
    server: {
      allowedHosts: ["webapp.quizzes.test"],
    },
  },
});
