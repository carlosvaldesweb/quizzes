<template>
  <div class="relative w-full max-w-md mx-auto">
    <!-- Main card -->
    <div
      class="glass-strong rounded-2xl p-6 shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500"
    >
      <!-- Header -->
      <div
        class="flex items-center gap-3 mb-4 pb-4 border-b border-white/10 dark:border-slate-700/30"
      >
        <div
          class="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center"
        >
          <UIcon
            name="i-lucide-clipboard-check"
            class="text-violet-500 text-xl"
          />
        </div>
        <div>
          <div class="font-semibold text-sm">Evaluación técnica</div>
          <div class="text-xs text-muted">Equipo de desarrollo — Q4</div>
        </div>
      </div>

      <!-- Summary metrics -->
      <div class="grid grid-cols-3 gap-2 mb-3">
        <div class="glass rounded-lg p-2 text-center">
          <div class="text-lg font-bold text-gradient-primary">28</div>
          <div class="text-[10px] text-muted">Evaluados</div>
        </div>
        <div class="glass rounded-lg p-2 text-center">
          <div class="text-lg font-bold text-gradient-primary">82%</div>
          <div class="text-[10px] text-muted">Promedio</div>
        </div>
        <div class="glass rounded-lg p-2 text-center">
          <div class="text-lg font-bold text-gradient-primary">3:45</div>
          <div class="text-[10px] text-muted">Tiempo prom.</div>
        </div>
      </div>

      <!-- Participant results -->
      <div class="space-y-1.5">
        <div class="glass rounded-lg p-2 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div
              class="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center"
            >
              <UIcon name="i-lucide-user" class="text-emerald-500 text-xs" />
            </div>
            <span class="text-xs font-medium">Sandra M.</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-[9px] text-muted">9/10</span>
            <span class="text-xs font-bold text-emerald-500">90%</span>
          </div>
        </div>
        <div class="glass rounded-lg p-2 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div
              class="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center"
            >
              <UIcon name="i-lucide-user" class="text-emerald-500 text-xs" />
            </div>
            <span class="text-xs font-medium">Diego R.</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-[9px] text-muted">8/10</span>
            <span class="text-xs font-bold text-emerald-500">80%</span>
          </div>
        </div>
        <div class="glass rounded-lg p-2 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div
              class="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center"
            >
              <UIcon name="i-lucide-user" class="text-amber-500 text-xs" />
            </div>
            <span class="text-xs font-medium">Patricia L.</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-[9px] text-muted">6/10</span>
            <span class="text-xs font-bold text-amber-500">60%</span>
          </div>
        </div>
        <div
          class="text-center text-[9px] text-muted pt-1"
        >
          + 25 participantes más
        </div>
      </div>
    </div>

    <!-- Floating badge: Top right -->
    <div
      class="absolute -top-4 -right-4 glass rounded-xl p-3 shadow-lg transform -rotate-6 z-10"
    >
      <div class="flex items-center gap-2">
        <UIcon name="i-lucide-users" class="text-violet-500 text-lg" />
        <span class="text-xs font-medium">28 evaluados</span>
      </div>
    </div>

    <!-- Floating badge: Bottom left -->
    <div
      class="absolute -bottom-3 -left-3 glass rounded-xl p-3 shadow-lg transform rotate-3 z-10"
    >
      <div class="flex items-center gap-2">
        <UIcon name="i-lucide-check-circle" class="text-emerald-500 text-lg" />
        <span class="text-xs font-medium">82% promedio</span>
      </div>
    </div>
  </div>
</template>
