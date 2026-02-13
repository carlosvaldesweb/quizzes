<template>
  <div class="relative w-full max-w-sm mx-auto">
    <!-- 3D Perspective Container -->
    <div class="perspective-container">
      <div class="flashcard-inner relative" style="min-height: 220px">
        <!-- Front face: Question -->
        <div
          class="flashcard-face absolute inset-0 glass-strong rounded-2xl p-5 shadow-2xl"
        >
          <div
            class="flex items-center gap-3 mb-4 pb-3 border-b border-white/10 dark:border-slate-700/30"
          >
            <div
              class="w-9 h-9 rounded-xl bg-violet-500/20 flex items-center justify-center"
            >
              <UIcon
                name="i-lucide-layers"
                class="text-violet-500 text-lg"
              />
            </div>
            <div>
              <div class="font-semibold text-sm">Mi set de estudio</div>
              <div class="text-xs text-muted">
                Biología — Tarjeta 4 de 12
              </div>
            </div>
          </div>

          <div class="glass rounded-xl p-4 mb-3 text-center">
            <div class="text-xs font-medium leading-relaxed">
              ¿Qué es la mitosis y cuál es su función principal?
            </div>
          </div>

          <div
            class="flex items-center justify-center gap-1.5 text-[10px] text-muted"
          >
            <UIcon
              name="i-lucide-rotate-3d"
              class="text-violet-500 text-sm"
            />
            <span>Toca para voltear</span>
          </div>
        </div>

        <!-- Back face: Answer -->
        <div
          class="flashcard-back absolute inset-0 glass-strong rounded-2xl p-5 shadow-2xl border-emerald-500/20"
        >
          <div
            class="flex items-center gap-3 mb-4 pb-3 border-b border-white/10 dark:border-slate-700/30"
          >
            <div
              class="w-9 h-9 rounded-xl bg-emerald-500/20 flex items-center justify-center"
            >
              <UIcon
                name="i-lucide-check-circle"
                class="text-emerald-500 text-lg"
              />
            </div>
            <div>
              <div class="font-semibold text-sm">Respuesta</div>
              <div class="text-xs text-muted">Tarjeta 4 de 12</div>
            </div>
          </div>

          <div
            class="rounded-xl p-4 mb-3 text-center bg-emerald-500/10 border border-emerald-500/20"
          >
            <div
              class="text-xs font-medium leading-relaxed text-emerald-600 dark:text-emerald-400"
            >
              La mitosis es el proceso de división celular que produce dos
              células hijas idénticas a la célula madre.
            </div>
          </div>

          <div
            class="flex items-center justify-center gap-1.5 text-[10px] text-emerald-500 font-medium"
          >
            <UIcon name="i-lucide-rotate-3d" class="text-sm" />
            <span>Voltear de nuevo</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Progress dots -->
    <div class="flex justify-center gap-1.5 mt-4">
      <div class="w-2 h-2 rounded-full bg-emerald-500" />
      <div class="w-2 h-2 rounded-full bg-emerald-500" />
      <div class="w-2 h-2 rounded-full bg-emerald-500" />
      <div
        class="w-2 h-2 rounded-full bg-violet-500 ring-2 ring-violet-500/30"
      />
      <div class="w-2 h-2 rounded-full bg-white/30 dark:bg-slate-600/50" />
      <div class="w-2 h-2 rounded-full bg-white/30 dark:bg-slate-600/50" />
      <div class="w-2 h-2 rounded-full bg-white/30 dark:bg-slate-600/50" />
      <div class="w-2 h-2 rounded-full bg-white/30 dark:bg-slate-600/50" />
      <div class="w-2 h-2 rounded-full bg-white/30 dark:bg-slate-600/50" />
      <div class="w-2 h-2 rounded-full bg-white/30 dark:bg-slate-600/50" />
      <div class="w-2 h-2 rounded-full bg-white/30 dark:bg-slate-600/50" />
      <div class="w-2 h-2 rounded-full bg-white/30 dark:bg-slate-600/50" />
    </div>

    <!-- Floating badge: Top right -->
    <div
      class="absolute -top-4 -right-4 glass rounded-xl p-3 shadow-lg transform -rotate-6 z-30"
    >
      <div class="flex items-center gap-2">
        <UIcon name="i-lucide-bookmark" class="text-violet-500 text-lg" />
        <span class="text-xs font-medium">Mi set</span>
      </div>
    </div>

    <!-- Floating badge: Bottom left -->
    <div
      class="absolute -bottom-3 -left-3 glass rounded-xl p-3 shadow-lg transform rotate-3 z-30"
    >
      <div class="flex items-center gap-2">
        <UIcon name="i-lucide-brain" class="text-emerald-500 text-lg" />
        <span class="text-xs font-medium">Estudio personal</span>
      </div>
    </div>
  </div>
</template>
