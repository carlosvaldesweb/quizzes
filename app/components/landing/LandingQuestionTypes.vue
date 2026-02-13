<script setup lang="ts">
const types = [
  { icon: "i-lucide-check-square", label: "Opción múltiple" },
  { icon: "i-lucide-toggle-left", label: "Verdadero / Falso" },
  { icon: "i-lucide-text-cursor-input", label: "Respuesta corta" },
  { icon: "i-lucide-message-circle", label: "Encuesta" },
  { icon: "i-lucide-link", label: "Emparejamiento" },
];
</script>

<template>
  <UPageSection id="tipos-de-preguntas" headline="Tipos de preguntas">
    <template #title>
      5 tipos de preguntas para evaluar de
      <SharedGradientText>cualquier forma</SharedGradientText>
    </template>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      <!-- Text column -->
      <div>
        <p class="text-lg text-muted mb-6">
          Desde opción múltiple hasta emparejamiento. Cada pregunta puede tener
          su propio límite de tiempo y un puntaje personalizado para adaptarse a
          tu evaluación.
        </p>

        <!-- Question type badges -->
        <div class="flex flex-wrap gap-2 mb-6">
          <div
            v-for="type in types"
            :key="type.label"
            class="glass rounded-lg px-3 py-2 flex items-center gap-2 text-sm font-medium"
          >
            <UIcon :name="type.icon" class="text-violet-500" />
            {{ type.label }}
          </div>
        </div>

        <!-- Extra highlights -->
        <div class="space-y-3">
          <div class="flex items-start gap-3">
            <div
              class="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0 mt-0.5"
            >
              <UIcon name="i-lucide-timer" class="text-amber-500" />
            </div>
            <div>
              <div class="text-sm font-medium">Límite de tiempo por pregunta</div>
              <div class="text-sm text-muted">
                Configura un temporizador individual o deja la pregunta sin
                límite de tiempo.
              </div>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <div
              class="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center shrink-0 mt-0.5"
            >
              <UIcon name="i-lucide-star" class="text-violet-500" />
            </div>
            <div>
              <div class="text-sm font-medium">Puntaje personalizable</div>
              <div class="text-sm text-muted">
                Asigna un valor diferente a cada pregunta según su dificultad o
                importancia.
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mockup column -->
      <div class="relative">
        <LandingQuestionTypesMockup />
      </div>
    </div>
  </UPageSection>
</template>
