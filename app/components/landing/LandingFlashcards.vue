<script setup lang="ts">
const features = [
  {
    icon: "i-lucide-rotate-3d",
    title: "Tarjetas con efecto de volteo",
    description: "Toca la tarjeta para revelar la respuesta al instante.",
  },
  {
    icon: "i-lucide-gauge",
    title: "Avanza a tu propio ritmo",
    description: "Sin presión de tiempo. Tú decides cuándo avanzar.",
  },
  {
    icon: "i-lucide-book-open",
    title: "Convierte cualquier quiz",
    description:
      "Cualquier quiz que crees se puede usar como flashcards automáticamente.",
  },
  {
    icon: "i-lucide-repeat",
    title: "Repasa sin límite",
    description:
      "Vuelve a repasar todas las veces que necesites hasta dominar el tema.",
  },
];
</script>

<template>
  <UPageSection
    id="flashcards"
    headline="Modo Flashcards"
    class="gradient-mesh-subtle gradient-mesh"
  >
    <template #title>
      Estudia con tarjetas que se
      <SharedGradientText>voltean</SharedGradientText>
    </template>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      <!-- Mockup column (LEFT on desktop) -->
      <div class="relative lg:order-first">
        <LandingFlashcardsMockup />
      </div>

      <!-- Text column (RIGHT on desktop) -->
      <div>
        <p class="text-lg text-muted mb-6">
          Convierte cualquier quiz en tarjetas de estudio. Voltea para ver la
          respuesta y avanza a tu propio ritmo. Ideal para repasar antes de una
          evaluación.
        </p>

        <div class="space-y-4">
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
              <div class="text-sm text-muted">{{ feature.description }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </UPageSection>
</template>
