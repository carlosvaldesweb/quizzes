<script setup lang="ts">
const steps = [
  {
    number: 1,
    title: "Crea tu quiz",
    description:
      "Elige entre 5 tipos de preguntas, configura tiempos y puntajes, y personaliza con un tema visual.",
  },
  {
    number: 2,
    title: "Comparte el código",
    description:
      "Crea una sesión, programa el horario y comparte el código de acceso. Sin registro para tus participantes.",
  },
  {
    number: 3,
    title: "Revisa los resultados",
    description:
      "Consulta puntajes, respuestas y tiempos de cada participante al instante.",
  },
];
</script>

<template>
  <UPageSection id="como-funciona" headline="¿Cómo funciona?">
    <template #title>
      De la idea al resultado en
      <SharedGradientText>3 pasos</SharedGradientText>
    </template>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4">
      <div v-for="(step, index) in steps" :key="step.number" class="relative">
        <!-- Arrow connector (between cards on desktop) -->
        <div
          v-if="index < 2"
          class="hidden lg:flex absolute -right-4 top-1/3 z-10 text-violet-500/40"
        >
          <UIcon name="i-lucide-chevron-right" class="text-2xl" />
        </div>

        <div
          class="glass-strong rounded-2xl overflow-hidden card-hover-lift h-full"
        >
          <!-- Visual mockup area -->
          <div class="p-5 pb-0">
            <!-- Step 1: Quiz editor mockup -->
            <div v-if="step.number === 1" class="glass rounded-xl p-3">
              <div class="flex items-center gap-2 mb-2.5">
                <div
                  class="w-6 h-6 rounded-lg bg-violet-500/15 flex items-center justify-center"
                >
                  <UIcon
                    name="i-lucide-pencil-line"
                    class="text-violet-500 text-xs"
                  />
                </div>
                <span class="text-[10px] font-medium">Nuevo quiz</span>
              </div>
              <!-- Mini question being edited -->
              <div class="glass rounded-lg p-2 mb-2">
                <div class="text-[9px] text-muted mb-1">Pregunta 1</div>
                <div class="text-[10px] font-medium mb-1.5">
                  ¿Cuál es la capital de...?
                </div>
                <div class="flex gap-1">
                  <div
                    class="flex-1 rounded px-1.5 py-0.5 text-[8px] bg-violet-500/10 text-violet-600 dark:text-violet-400 text-center"
                  >
                    A) Madrid
                  </div>
                  <div
                    class="flex-1 rounded px-1.5 py-0.5 text-[8px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-center ring-1 ring-emerald-500/20"
                  >
                    B) París
                  </div>
                </div>
              </div>
              <div class="flex gap-1.5">
                <div
                  class="flex items-center gap-1 text-[8px] text-muted bg-white/50 dark:bg-neutral-800/50 rounded px-1.5 py-0.5"
                >
                  <UIcon name="i-lucide-timer" class="text-[8px]" />
                  30s
                </div>
                <div
                  class="flex items-center gap-1 text-[8px] text-muted bg-white/50 dark:bg-neutral-800/50 rounded px-1.5 py-0.5"
                >
                  <UIcon name="i-lucide-star" class="text-[8px]" />
                  10 pts
                </div>
                <div
                  class="flex items-center gap-1 text-[8px] text-muted bg-white/50 dark:bg-neutral-800/50 rounded px-1.5 py-0.5"
                >
                  <UIcon name="i-lucide-check-square" class="text-[8px]" />
                  Opción múltiple
                </div>
              </div>
            </div>

            <!-- Step 2: Code sharing mockup -->
            <div v-else-if="step.number === 2" class="glass rounded-xl p-3">
              <div class="flex items-center gap-2 mb-2.5">
                <div
                  class="w-6 h-6 rounded-lg bg-violet-500/15 flex items-center justify-center"
                >
                  <UIcon
                    name="i-lucide-share-2"
                    class="text-violet-500 text-xs"
                  />
                </div>
                <span class="text-[10px] font-medium">Compartir sesión</span>
              </div>
              <!-- Code display -->
              <div
                class="glass rounded-lg p-3 text-center mb-2"
              >
                <div class="text-[8px] text-muted mb-1 uppercase tracking-wider">
                  Código de acceso
                </div>
                <div
                  class="text-base font-bold font-mono tracking-widest text-gradient-primary"
                >
                  QUIZ-7X3K
                </div>
              </div>
              <!-- Participants joining -->
              <div class="flex items-center justify-between">
                <div class="flex -space-x-1.5">
                  <div
                    v-for="i in 4"
                    :key="i"
                    class="w-5 h-5 rounded-full border-2 border-white dark:border-neutral-800 flex items-center justify-center text-[7px] font-bold text-white"
                    :class="[
                      i === 1
                        ? 'bg-violet-500'
                        : i === 2
                          ? 'bg-emerald-500'
                          : i === 3
                            ? 'bg-amber-500'
                            : 'bg-rose-400',
                    ]"
                  >
                    {{ ["A", "L", "M", "J"][i - 1] }}
                  </div>
                </div>
                <span
                  class="text-[9px] font-medium text-emerald-500"
                >4 conectados</span>
              </div>
            </div>

            <!-- Step 3: Results mockup -->
            <div v-else-if="step.number === 3" class="glass rounded-xl p-3">
              <div class="flex items-center gap-2 mb-2.5">
                <div
                  class="w-6 h-6 rounded-lg bg-violet-500/15 flex items-center justify-center"
                >
                  <UIcon
                    name="i-lucide-chart-column"
                    class="text-violet-500 text-xs"
                  />
                </div>
                <span class="text-[10px] font-medium">Resultados</span>
              </div>
              <!-- Mini bar chart -->
              <div class="flex items-end gap-1.5 h-12 mb-2">
                <div
                  v-for="(h, i) in [60, 85, 45, 92, 70, 88]"
                  :key="i"
                  class="flex-1 rounded-t"
                  :class="
                    h >= 80
                      ? 'bg-emerald-500/60'
                      : h >= 60
                        ? 'bg-amber-500/60'
                        : 'bg-rose-400/60'
                  "
                  :style="{ height: h + '%' }"
                />
              </div>
              <!-- Summary stats -->
              <div class="flex justify-between text-[9px]">
                <span class="text-muted">6 participantes</span>
                <span class="font-bold text-emerald-500">Prom: 73%</span>
              </div>
            </div>
          </div>

          <!-- Step content -->
          <div class="p-5">
            <!-- Step number badge -->
            <div
              class="inline-flex items-center justify-center w-7 h-7 rounded-full bg-linear-to-br from-violet-500 to-violet-600 text-white text-xs font-bold mb-3 shadow-md shadow-violet-500/25"
            >
              {{ step.number }}
            </div>

            <h3 class="font-semibold text-base mb-1.5">{{ step.title }}</h3>
            <p class="text-sm text-muted">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </UPageSection>
</template>
