<script setup lang="ts">
const { signupUrl, loginUrl } = useAppUrls();
const appName = useAppName();
const links = [
  {
    label: "Inicio",
    to: "/",
  },
  {
    label: "Soluciones",
    children: [
      {
        label: "Para Profesores",
        description: "Evalúa a tus alumnos de forma dinámica",
        icon: "i-lucide-graduation-cap",
        to: "/para/profesores",
      },
      {
        label: "Para Estudiantes",
        description: "Practica, repasa y mejora tus resultados",
        icon: "i-lucide-book-open",
        to: "/para/estudiantes",
      },
      {
        label: "Para Empresas",
        description: "Evalúa, capacita y certifica a tu equipo",
        icon: "i-lucide-building-2",
        to: "/para/empresas",
      },
    ],
  },
  {
    label: "Precios",
    to: "/pricing",
  },
];

const footerColumns = [
  {
    label: "Producto",
    children: [
      { label: "Funcionalidades", to: "/#funcionalidades" },
      { label: "Precios", to: "/pricing" },
      { label: "¿Cómo funciona?", to: "/#como-funciona" },
    ],
  },
  {
    label: "Soluciones",
    children: [
      { label: "Para Profesores", to: "/para/profesores" },
      { label: "Para Estudiantes", to: "/para/estudiantes" },
      { label: "Para Empresas", to: "/para/empresas" },
    ],
  },
  {
    label: "Legal",
    children: [
      { label: "Términos y condiciones", to: "/terms" },
      { label: "Política de privacidad", to: "/privacy" },
      { label: "Política de cookies", to: "/cookies" },
    ],
  },
];
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <UHeader
      to="/"
      :ui="{
        root: 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-white/20 dark:border-slate-700/30',
      }"
    >
      <template #title>
        <span class="text-gradient-primary font-bold text-3xl">{{
          appName
        }}</span>
      </template>

      <UNavigationMenu
        :items="links"
        :unmount-on-hide="false"
        class="lg:w-120 justify-center"
      />

      <template #right>
        <UColorModeButton />
        <UButton
          label="Iniciar sesión"
          :to="loginUrl"
          color="neutral"
          variant="ghost"
          class="hidden sm:inline-flex"
        />
        <UButton
          label="Registrarse"
          :to="signupUrl"
          color="primary"
          class="hidden sm:inline-flex"
        />
      </template>

      <template #body>
        <UNavigationMenu :items="links" orientation="vertical" />
        <div class="flex flex-col gap-2 mt-4">
          <UButton
            label="Iniciar sesión"
            :to="loginUrl"
            color="neutral"
            variant="outline"
            block
          />
          <UButton label="Registrarse" :to="signupUrl" color="primary" block />
        </div>
      </template>
    </UHeader>

    <UMain class="flex-1">
      <slot />
    </UMain>

    <UFooter>
      <template #top>
        <UContainer>
          <UFooterColumns :columns="footerColumns">
            <template #right>
              <div class="flex flex-col gap-2">
                <span class="text-gradient-primary font-bold text-xl">{{
                  appName
                }}</span>
                <p class="text-sm text-muted">
                  Crea, comparte y evalúa quizzes de forma rápida y sencilla.
                </p>
              </div>
            </template>
          </UFooterColumns>
        </UContainer>
      </template>

      <template #left>
        <p class="text-sm text-muted">
          &copy; {{ new Date().getFullYear() }} {{ appName }}. Todos los
          derechos reservados.
        </p>
      </template>

      <template #right>
        <UButton
          icon="i-lucide-twitter"
          color="neutral"
          variant="ghost"
          to="https://twitter.com"
          target="_blank"
          aria-label="Twitter"
        />
        <UButton
          icon="i-lucide-github"
          color="neutral"
          variant="ghost"
          to="https://github.com"
          target="_blank"
          aria-label="GitHub"
        />
      </template>
    </UFooter>
  </div>
</template>
