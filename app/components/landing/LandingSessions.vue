<script setup lang="ts">
const features = [
  {
    icon: "i-lucide-calendar-clock",
    title: "Programa fecha y hora",
    description: "Define un horario de apertura y cierre para tu sesión.",
  },
  {
    icon: "i-lucide-key-round",
    title: "Código de acceso",
    description:
      "Comparte un código único y los participantes se unen al instante.",
  },
  {
    icon: "i-lucide-user-x",
    title: "Sin registro necesario",
    description: "Los participantes no necesitan crear una cuenta para unirse.",
  },
  {
    icon: "i-lucide-shuffle",
    title: "Orden aleatorio",
    description:
      "Cada participante recibe las preguntas en un orden diferente.",
  },
  {
    icon: "i-lucide-repeat",
    title: "Múltiples intentos",
    description: "Configura cuántas veces puede intentar cada participante.",
  },
  {
    icon: "i-lucide-eye-off",
    title: "Control de visibilidad",
    description: "Decide si los participantes ven las respuestas y puntajes.",
  },
];
</script>

<template>
  <UPageSection
    id="sesiones"
    headline="Sesiones en vivo"
    class="gradient-mesh-subtle gradient-mesh"
  >
    <template #title>
      Programa, comparte y controla tus
      <SharedGradientText>sesiones</SharedGradientText>
    </template>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      <!-- Mockup column (LEFT on desktop) -->
      <div class="relative lg:order-first">
        <LandingSessionsMockup />
      </div>

      <!-- Text column (RIGHT on desktop) -->
      <div>
        <p class="text-lg text-muted mb-6">
          Crea sesiones con horarios de apertura y cierre. Comparte un código de
          acceso y los participantes se unen sin registrarse. Tú controlas los
          intentos, las respuestas visibles y el orden de las preguntas.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="flex items-start gap-3"
          >
            <div
              class="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center shrink-0 mt-0.5"
            >
              <UIcon :name="feature.icon" class="text-violet-500" />
            </div>
            <div>
              <div class="text-sm font-medium">{{ feature.title }}</div>
              <div class="text-xs text-muted">{{ feature.description }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </UPageSection>
</template>
