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
      appName: process.env.APP_NAME || "puntic",
      apiBaseUrl:
        process.env.NUXT_PUBLIC_API_BASE_URL || "http://api.quizzes.test",
      webappUrl:
        process.env.NUXT_PUBLIC_WEBAPP_URL || "http://webapp.quizzes.test",
    },
  },
  vite: {
    server: {
      allowedHosts: ["quizzes.test"],
    },
  },
});
