<script setup lang="ts">
const features = [
  {
    icon: "i-lucide-zap",
    title: "Retroalimentación inmediata",
    description:
      "Descubre al instante si tu respuesta fue correcta con una explicación.",
  },
  {
    icon: "i-lucide-gauge",
    title: "Sin límite de tiempo",
    description:
      "Practica a tu propio ritmo sin la presión de un temporizador.",
  },
  {
    icon: "i-lucide-bar-chart",
    title: "Resumen final detallado",
    description:
      "Al terminar, consulta tu puntaje total y las respuestas que fallaste.",
  },
  {
    icon: "i-lucide-repeat",
    title: "Múltiples intentos",
    description:
      "Intenta el quiz las veces que quieras para mejorar tu resultado.",
  },
];
</script>

<template>
  <UPageSection id="practica" headline="Modo Práctica">
    <template #title>
      Practica a tu ritmo con
      <SharedGradientText>retroalimentación inmediata</SharedGradientText>
    </template>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      <!-- Text column -->
      <div>
        <p class="text-lg text-muted mb-6">
          Responde cada pregunta y descubre al instante si tu respuesta fue
          correcta. Al final, consulta tu puntaje y las respuestas que fallaste.
          Puedes intentarlo las veces que quieras.
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

      <!-- Mockup column -->
      <div class="relative">
        <LandingPracticeMockup />
      </div>
    </div>
  </UPageSection>
</template>
