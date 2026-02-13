<template>
  <div class="relative w-full max-w-md mx-auto">
    <!-- Main card: Practice mode mockup -->
    <div
      class="glass-strong rounded-2xl p-6 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500"
    >
      <!-- Header -->
      <div
        class="flex items-center gap-3 mb-4 pb-4 border-b border-white/10 dark:border-slate-700/30"
      >
        <div
          class="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center"
        >
          <UIcon name="i-lucide-brain" class="text-violet-500 text-xl" />
        </div>
        <div>
          <div class="font-semibold text-sm">Modo práctica</div>
          <div class="text-xs text-muted">Biología — Célula</div>
        </div>
      </div>

      <!-- Flashcard mockup -->
      <div class="glass rounded-xl p-4 mb-3 text-center">
        <div class="text-xs text-muted mb-2">Pregunta 5 de 10</div>
        <div class="text-sm font-medium mb-3">
          ¿Cuál es la función de la mitocondria?
        </div>
        <div
          class="text-xs text-emerald-500 font-medium bg-emerald-500/10 rounded-lg p-2"
        >
          <UIcon
            name="i-lucide-check-circle"
            class="inline text-sm mr-1 align-text-bottom"
          />
          Producir energía (ATP)
        </div>
      </div>

      <!-- Progress dots -->
      <div class="flex justify-center gap-1.5">
        <div class="w-2 h-2 rounded-full bg-emerald-500" />
        <div class="w-2 h-2 rounded-full bg-emerald-500" />
        <div class="w-2 h-2 rounded-full bg-rose-500" />
        <div class="w-2 h-2 rounded-full bg-emerald-500" />
        <div class="w-2 h-2 rounded-full bg-emerald-500" />
        <div class="w-2 h-2 rounded-full bg-white/30 dark:bg-slate-600" />
        <div class="w-2 h-2 rounded-full bg-white/30 dark:bg-slate-600" />
        <div class="w-2 h-2 rounded-full bg-white/30 dark:bg-slate-600" />
        <div class="w-2 h-2 rounded-full bg-white/30 dark:bg-slate-600" />
        <div class="w-2 h-2 rounded-full bg-white/30 dark:bg-slate-600" />
      </div>
    </div>

    <!-- Floating badge: Top right -->
    <div
      class="absolute -top-4 -right-4 glass rounded-xl p-3 shadow-lg transform -rotate-6 z-10"
    >
      <div class="flex items-center gap-2">
        <UIcon name="i-lucide-flame" class="text-amber-500 text-lg" />
        <span class="text-xs font-medium">Racha: 4</span>
      </div>
    </div>

    <!-- Floating badge: Bottom left -->
    <div
      class="absolute -bottom-3 -left-3 glass rounded-xl p-3 shadow-lg transform rotate-3 z-10"
    >
      <div class="flex items-center gap-2">
        <UIcon name="i-lucide-trophy" class="text-amber-500 text-lg" />
        <span class="text-xs font-medium">80% correcto</span>
      </div>
    </div>
  </div>
</template>
