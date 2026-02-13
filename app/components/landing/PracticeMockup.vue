<template>
  <div class="relative w-full max-w-md mx-auto">
    <!-- Main card -->
    <div
      class="glass-strong rounded-2xl p-6 shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-500"
    >
      <!-- Header -->
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center gap-2">
          <div
            class="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center"
          >
            <UIcon name="i-lucide-brain" class="text-violet-500 text-base" />
          </div>
          <span class="text-sm font-semibold">Modo práctica</span>
        </div>
        <UBadge label="Biología" variant="subtle" color="primary" size="sm" />
      </div>

      <!-- Progress bar -->
      <div class="glass rounded-lg p-3 mb-3">
        <div class="flex justify-between text-[10px] mb-1.5">
          <span class="font-medium text-muted">Progreso</span>
          <span class="text-violet-500 font-bold">6 de 10</span>
        </div>
        <div class="w-full h-1.5 rounded-full bg-white/20 dark:bg-slate-700/30">
          <div
            class="h-1.5 rounded-full bg-linear-to-r from-violet-500 to-emerald-500 transition-all duration-500"
            style="width: 60%"
          />
        </div>
      </div>

      <!-- Current question -->
      <div class="glass rounded-xl p-3 mb-3">
        <div class="text-[10px] text-muted mb-1">Pregunta 7 de 10</div>
        <div class="text-xs font-medium">
          ¿Qué planeta es el más grande del sistema solar?
        </div>
      </div>

      <!-- Answer options -->
      <div class="space-y-1.5 mb-3">
        <div
          class="glass rounded-lg px-3 py-2 text-[11px] font-medium opacity-60"
        >
          Saturno
        </div>
        <div
          class="rounded-lg px-3 py-2 text-[11px] font-medium bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 ring-1 ring-emerald-500/30 flex items-center gap-1.5"
        >
          <UIcon name="i-lucide-check-circle" class="text-sm" />
          Júpiter
          <span
            class="ml-auto text-[9px] bg-emerald-500/20 rounded-full px-1.5 py-0.5"
            >¡Correcto!</span
          >
        </div>
      </div>

      <!-- Feedback banner -->
      <div
        class="rounded-xl p-3 bg-emerald-500/10 border border-emerald-500/20"
      >
        <div
          class="text-[11px] text-emerald-600 dark:text-emerald-400 mb-2 font-medium"
        >
          Júpiter es el planeta más grande con un diámetro de 139,820 km.
        </div>
        <div
          class="inline-flex items-center gap-1 text-[10px] font-medium text-violet-600 dark:text-violet-400"
        >
          Siguiente pregunta
          <UIcon name="i-lucide-arrow-right" class="text-xs" />
        </div>
      </div>
    </div>

    <!-- Floating badge: Top right -->
    <div
      class="absolute -top-4 -right-4 glass rounded-xl p-3 shadow-lg transform -rotate-6 z-10"
    >
      <div class="flex items-center gap-2">
        <UIcon name="i-lucide-target" class="text-emerald-500 text-lg" />
        <span class="text-xs font-medium">6/10</span>
      </div>
    </div>

    <!-- Floating badge: Bottom left -->
    <div
      class="absolute -bottom-3 -left-3 glass rounded-xl p-3 shadow-lg transform rotate-3 z-10"
    >
      <div class="flex items-center gap-2">
        <UIcon name="i-lucide-trophy" class="text-amber-500 text-lg" />
        <span class="text-xs font-medium">85% aciertos</span>
      </div>
    </div>
  </div>
</template>
