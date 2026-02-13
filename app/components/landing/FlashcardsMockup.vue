<template>
  <div class="relative w-full max-w-sm mx-auto">
    <!-- 3D Perspective Container -->
    <div class="perspective-container">
      <div class="flashcard-inner relative" style="min-height: 220px">
        <!-- Front face: Question -->
        <div
          class="flashcard-face absolute inset-0 glass-strong rounded-2xl p-6 shadow-2xl"
        >
          <!-- Card header -->
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-2">
              <div
                class="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center"
              >
                <UIcon
                  name="i-lucide-layers"
                  class="text-violet-500 text-base"
                />
              </div>
              <span class="text-[10px] text-muted font-medium"
                >Tarjeta 3 de 8</span
              >
            </div>
            <div
              class="flex items-center gap-1 text-[10px] text-muted opacity-60"
            >
              <UIcon name="i-lucide-rotate-3d" class="text-xs" />
              Voltear
            </div>
          </div>

          <!-- Question -->
          <div class="glass rounded-xl p-4 mb-4 text-center">
            <div class="text-sm font-medium leading-relaxed">
              ¿Cuál es la función principal del ribosoma?
            </div>
          </div>

          <!-- Navigation arrows -->
          <div class="flex justify-center gap-3">
            <div
              class="glass rounded-lg px-3 py-1.5 text-xs flex items-center gap-1"
            >
              <UIcon name="i-lucide-chevron-left" class="text-sm" />
              Anterior
            </div>
            <div
              class="rounded-lg px-3 py-1.5 text-xs flex items-center gap-1 bg-violet-500/15 text-violet-600 dark:text-violet-400"
            >
              Siguiente
              <UIcon name="i-lucide-chevron-right" class="text-sm" />
            </div>
          </div>
        </div>

        <!-- Back face: Answer -->
        <div
          class="flashcard-back absolute inset-0 glass-strong rounded-2xl p-6 shadow-2xl border-emerald-500/20"
        >
          <!-- Card header -->
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-2">
              <div
                class="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center"
              >
                <UIcon
                  name="i-lucide-check-circle"
                  class="text-emerald-500 text-base"
                />
              </div>
              <span class="text-[10px] text-muted font-medium"
                >Tarjeta 3 de 8</span
              >
            </div>
            <div
              class="flex items-center gap-1 text-[10px] text-emerald-500 font-medium"
            >
              <UIcon name="i-lucide-rotate-3d" class="text-xs" />
              Respuesta
            </div>
          </div>

          <!-- Answer -->
          <div
            class="rounded-xl p-4 mb-4 text-center bg-emerald-500/10 border border-emerald-500/20"
          >
            <div
              class="text-sm font-medium leading-relaxed text-emerald-600 dark:text-emerald-400"
            >
              Sintetizar proteínas a partir de aminoácidos siguiendo las
              instrucciones del ARN mensajero.
            </div>
          </div>

          <!-- Navigation arrows -->
          <div class="flex justify-center gap-3">
            <div
              class="glass rounded-lg px-3 py-1.5 text-xs flex items-center gap-1"
            >
              <UIcon name="i-lucide-chevron-left" class="text-sm" />
              Anterior
            </div>
            <div
              class="rounded-lg px-3 py-1.5 text-xs flex items-center gap-1 bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
            >
              Siguiente
              <UIcon name="i-lucide-chevron-right" class="text-sm" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Progress dots -->
    <div class="flex justify-center gap-1.5 mt-4">
      <div class="w-2.5 h-2.5 rounded-full bg-emerald-500" />
      <div class="w-2.5 h-2.5 rounded-full bg-emerald-500" />
      <div
        class="w-2.5 h-2.5 rounded-full bg-violet-500 ring-2 ring-violet-500/30"
      />
      <div
        class="w-2.5 h-2.5 rounded-full bg-white/30 dark:bg-slate-600/50"
      />
      <div
        class="w-2.5 h-2.5 rounded-full bg-white/30 dark:bg-slate-600/50"
      />
      <div
        class="w-2.5 h-2.5 rounded-full bg-white/30 dark:bg-slate-600/50"
      />
      <div
        class="w-2.5 h-2.5 rounded-full bg-white/30 dark:bg-slate-600/50"
      />
      <div
        class="w-2.5 h-2.5 rounded-full bg-white/30 dark:bg-slate-600/50"
      />
    </div>

    <!-- Floating badge: Top right -->
    <div
      class="absolute -top-4 -right-4 glass rounded-xl p-3 shadow-lg transform -rotate-6 z-30"
    >
      <div class="flex items-center gap-2">
        <UIcon name="i-lucide-clock" class="text-violet-500 text-lg" />
        <span class="text-xs font-medium">A tu ritmo</span>
      </div>
    </div>

    <!-- Floating badge: Bottom left -->
    <div
      class="absolute -bottom-3 -left-3 glass rounded-xl p-3 shadow-lg transform rotate-3 z-30"
    >
      <div class="flex items-center gap-2">
        <UIcon name="i-lucide-layers" class="text-amber-500 text-lg" />
        <span class="text-xs font-medium">3/8 tarjetas</span>
      </div>
    </div>
  </div>
</template>
