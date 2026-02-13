<template>
  <div class="relative w-full max-w-md mx-auto">
    <!-- Main card -->
    <div
      class="glass-strong rounded-2xl p-6 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500"
    >
      <!-- Header -->
      <div
        class="flex items-center gap-3 mb-4 pb-4 border-b border-white/10 dark:border-slate-700/30"
      >
        <div
          class="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center"
        >
          <UIcon name="i-lucide-timer" class="text-violet-500 text-xl" />
        </div>
        <div>
          <div class="font-semibold text-sm">Pregunta con tiempo</div>
          <div class="text-xs text-muted">Geografía — Sesión activa</div>
        </div>
      </div>

      <!-- Timer display -->
      <div class="glass rounded-xl p-3 mb-3 text-center">
        <div
          class="w-16 h-16 rounded-full bg-amber-500/15 border-2 border-amber-500/50 flex items-center justify-center mx-auto mb-2"
        >
          <div>
            <div
              class="text-2xl font-bold text-amber-600 dark:text-amber-400 leading-none"
            >
              0:45
            </div>
            <div class="text-[9px] text-muted">seg.</div>
          </div>
        </div>
        <div class="w-full h-1.5 rounded-full bg-amber-500/20">
          <div
            class="h-1.5 rounded-full bg-linear-to-r from-amber-500 to-amber-400 transition-all duration-500"
            style="width: 75%"
          />
        </div>
      </div>

      <!-- Question -->
      <div class="glass rounded-xl p-3 mb-3">
        <div class="text-[10px] text-muted mb-1">Pregunta 5 de 15</div>
        <div class="text-xs font-medium">
          ¿Cuál es el río más largo del mundo?
        </div>
      </div>

      <!-- Answer options -->
      <div class="space-y-1.5">
        <div class="glass rounded-lg px-3 py-2 text-[11px] font-medium">
          Amazonas
        </div>
        <div
          class="rounded-lg px-3 py-2 text-[11px] font-medium bg-violet-500 text-white shadow-md shadow-violet-500/25 flex items-center gap-1.5"
        >
          <UIcon name="i-lucide-check" class="text-xs" />
          Nilo
        </div>
        <div class="glass rounded-lg px-3 py-2 text-[11px] font-medium">
          Misisipi
        </div>
        <div class="glass rounded-lg px-3 py-2 text-[11px] font-medium">
          Yangtsé
        </div>
      </div>
    </div>

    <!-- Floating badge: Top right -->
    <div
      class="absolute -top-4 -right-4 glass rounded-xl p-3 shadow-lg transform -rotate-6 z-10"
    >
      <div class="flex items-center gap-2">
        <UIcon name="i-lucide-clock" class="text-amber-500 text-lg" />
        <span class="text-xs font-medium">30-120 seg.</span>
      </div>
    </div>

    <!-- Floating badge: Bottom left -->
    <div
      class="absolute -bottom-3 -left-3 glass rounded-xl p-3 shadow-lg transform rotate-3 z-10"
    >
      <div class="flex items-center gap-2">
        <UIcon name="i-lucide-settings-2" class="text-violet-500 text-lg" />
        <span class="text-xs font-medium">Configurable</span>
      </div>
    </div>
  </div>
</template>
