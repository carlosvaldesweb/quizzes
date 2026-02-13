<script setup lang="ts">
const { signupUrl } = useAppUrls();
const appName = useAppName();
</script>

<template>
  <UPageHero
    orientation="horizontal"
    class="gradient-mesh relative"
    :links="[
      {
        label: 'Empieza gratis',
        to: signupUrl,
        icon: 'i-lucide-rocket',
        size: 'xl',
        color: 'primary',
      },
    ]"
  >
    <template #headline>
      <UBadge
        label="Plataforma de quizzes interactivos"
        variant="subtle"
        color="primary"
        size="lg"
      />
    </template>

    <template #title>
      Crea, comparte y evalúa
      <SharedGradientText>quizzes</SharedGradientText>
      de forma rápida y sencilla
    </template>

    <template #description>
      No importa si eres profesor, capacitador o estudiante. {{ appName }} se adapta a
      lo que necesites. Los participantes se unen con un código, sin necesidad
      de registrarse.
    </template>

    <!-- Decorative mockup -->
    <div class="relative hidden lg:block">
      <div class="relative w-full max-w-md mx-auto">
        <!-- Main card -->
        <div
          class="glass-strong rounded-2xl p-6 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500"
        >
          <div
            class="flex items-center gap-3 mb-4 pb-4 border-b border-neutral-100 dark:border-slate-700/30"
          >
            <div
              class="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center"
            >
              <UIcon name="i-lucide-brain" class="text-violet-500 text-xl" />
            </div>
            <div>
              <div class="font-semibold text-sm">Quiz de ejemplo</div>
              <div class="text-xs text-muted">10 preguntas</div>
            </div>
          </div>

          <div class="space-y-3">
            <div class="glass rounded-xl p-3">
              <div class="text-xs text-muted mb-2">Pregunta 1 de 10</div>
              <div class="text-sm font-medium">
                ¿Cuál es el resultado de 2 + 2?
              </div>
            </div>

            <div class="grid grid-cols-2 gap-2">
              <div
                class="glass rounded-lg p-2 text-center text-sm cursor-pointer hover:ring-2 hover:ring-violet-500/50 transition-all"
              >
                3
              </div>
              <div
                class="rounded-lg p-2 text-center text-sm bg-violet-500 text-white shadow-lg shadow-violet-500/25"
              >
                4
              </div>
              <div
                class="glass rounded-lg p-2 text-center text-sm cursor-pointer hover:ring-2 hover:ring-violet-500/50 transition-all"
              >
                5
              </div>
              <div
                class="glass rounded-lg p-2 text-center text-sm cursor-pointer hover:ring-2 hover:ring-violet-500/50 transition-all"
              >
                6
              </div>
            </div>
          </div>
        </div>

        <!-- Floating card behind -->
        <div
          class="absolute -top-4 -right-4 glass rounded-xl p-3 shadow-lg transform -rotate-6 z-10"
        >
          <div class="flex items-center gap-2">
            <UIcon
              name="i-lucide-check-circle"
              class="text-emerald-500 text-lg"
            />
            <span class="text-xs font-medium">8/10 correctas</span>
          </div>
        </div>

        <!-- Score badge -->
        <div
          class="absolute -bottom-3 -left-3 glass rounded-xl p-3 shadow-lg transform rotate-3 z-10"
        >
          <div class="flex items-center gap-2">
            <UIcon name="i-lucide-trophy" class="text-amber-500 text-lg" />
            <span class="text-xs font-medium">Puntaje: 85%</span>
          </div>
        </div>
      </div>
    </div>
  </UPageHero>
</template>
