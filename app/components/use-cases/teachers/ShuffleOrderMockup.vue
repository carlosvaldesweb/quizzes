<template>
  <div class="relative w-full max-w-md mx-auto">
    <!-- Main card -->
    <div
      class="glass-strong rounded-2xl p-5 shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-500"
    >
      <!-- Header -->
      <div
        class="flex items-center gap-3 mb-4 pb-4 border-b border-white/10 dark:border-slate-700/30"
      >
        <div
          class="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center"
        >
          <UIcon name="i-lucide-shuffle" class="text-violet-500 text-xl" />
        </div>
        <div>
          <div class="font-semibold text-sm">Orden aleatorio</div>
          <div class="text-xs text-muted">Mismo quiz, diferente orden</div>
        </div>
      </div>

      <!-- Two columns -->
      <div class="grid grid-cols-2 gap-3">
        <!-- Student A -->
        <div class="glass rounded-xl p-3">
          <div class="flex items-center gap-1.5 mb-2">
            <div
              class="w-5 h-5 rounded-full bg-violet-500/20 flex items-center justify-center"
            >
              <UIcon
                name="i-lucide-user"
                class="text-violet-500 text-[10px]"
              />
            </div>
            <span class="text-[11px] font-semibold">Alumno A</span>
          </div>
          <div class="space-y-1">
            <div
              class="flex items-center gap-1.5 py-1 border-b border-white/5 dark:border-slate-700/20"
            >
              <span
                class="w-4 h-4 rounded-full bg-violet-500/15 text-[9px] font-bold text-violet-500 flex items-center justify-center shrink-0"
                >1</span
              >
              <span class="text-[10px] font-medium">Capital de Francia</span>
            </div>
            <div
              class="flex items-center gap-1.5 py-1 border-b border-white/5 dark:border-slate-700/20"
            >
              <span
                class="w-4 h-4 rounded-full bg-emerald-500/15 text-[9px] font-bold text-emerald-500 flex items-center justify-center shrink-0"
                >2</span
              >
              <span class="text-[10px] font-medium">Río más largo</span>
            </div>
            <div
              class="flex items-center gap-1.5 py-1 border-b border-white/5 dark:border-slate-700/20"
            >
              <span
                class="w-4 h-4 rounded-full bg-amber-500/15 text-[9px] font-bold text-amber-500 flex items-center justify-center shrink-0"
                >3</span
              >
              <span class="text-[10px] font-medium">Año independencia</span>
            </div>
            <div
              class="flex items-center gap-1.5 py-1 border-b border-white/5 dark:border-slate-700/20"
            >
              <span
                class="w-4 h-4 rounded-full bg-rose-500/15 text-[9px] font-bold text-rose-500 flex items-center justify-center shrink-0"
                >4</span
              >
              <span class="text-[10px] font-medium">Fórmula del agua</span>
            </div>
            <div class="flex items-center gap-1.5 py-1">
              <span
                class="w-4 h-4 rounded-full bg-violet-500/15 text-[9px] font-bold text-violet-500 flex items-center justify-center shrink-0"
                >5</span
              >
              <span class="text-[10px] font-medium">Planeta más grande</span>
            </div>
          </div>
        </div>

        <!-- Student B -->
        <div class="glass rounded-xl p-3">
          <div class="flex items-center gap-1.5 mb-2">
            <div
              class="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center"
            >
              <UIcon
                name="i-lucide-user"
                class="text-emerald-500 text-[10px]"
              />
            </div>
            <span class="text-[11px] font-semibold">Alumno B</span>
          </div>
          <div class="space-y-1">
            <div
              class="flex items-center gap-1.5 py-1 border-b border-white/5 dark:border-slate-700/20"
            >
              <span
                class="w-4 h-4 rounded-full bg-amber-500/15 text-[9px] font-bold text-amber-500 flex items-center justify-center shrink-0"
                >1</span
              >
              <span class="text-[10px] font-medium">Río más largo</span>
            </div>
            <div
              class="flex items-center gap-1.5 py-1 border-b border-white/5 dark:border-slate-700/20"
            >
              <span
                class="w-4 h-4 rounded-full bg-rose-500/15 text-[9px] font-bold text-rose-500 flex items-center justify-center shrink-0"
                >2</span
              >
              <span class="text-[10px] font-medium">Año independencia</span>
            </div>
            <div
              class="flex items-center gap-1.5 py-1 border-b border-white/5 dark:border-slate-700/20"
            >
              <span
                class="w-4 h-4 rounded-full bg-violet-500/15 text-[9px] font-bold text-violet-500 flex items-center justify-center shrink-0"
                >3</span
              >
              <span class="text-[10px] font-medium">Capital de Francia</span>
            </div>
            <div
              class="flex items-center gap-1.5 py-1 border-b border-white/5 dark:border-slate-700/20"
            >
              <span
                class="w-4 h-4 rounded-full bg-emerald-500/15 text-[9px] font-bold text-emerald-500 flex items-center justify-center shrink-0"
                >4</span
              >
              <span class="text-[10px] font-medium">Planeta más grande</span>
            </div>
            <div class="flex items-center gap-1.5 py-1">
              <span
                class="w-4 h-4 rounded-full bg-violet-500/15 text-[9px] font-bold text-violet-500 flex items-center justify-center shrink-0"
                >5</span
              >
              <span class="text-[10px] font-medium">Fórmula del agua</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Floating badge: Top right -->
    <div
      class="absolute -top-4 -right-4 glass rounded-xl p-3 shadow-lg transform -rotate-6 z-10"
    >
      <div class="flex items-center gap-2">
        <UIcon name="i-lucide-shield-check" class="text-emerald-500 text-lg" />
        <span class="text-xs font-medium">Anti-copia</span>
      </div>
    </div>

    <!-- Floating badge: Bottom left -->
    <div
      class="absolute -bottom-3 -left-3 glass rounded-xl p-3 shadow-lg transform rotate-3 z-10"
    >
      <div class="flex items-center gap-2">
        <UIcon name="i-lucide-lock" class="text-violet-500 text-lg" />
        <span class="text-xs font-medium">Por sesión</span>
      </div>
    </div>
  </div>
</template>
