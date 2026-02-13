<template>
  <div class="relative w-full max-w-md mx-auto">
    <!-- Main card -->
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
          <UIcon name="i-lucide-chart-bar" class="text-violet-500 text-xl" />
        </div>
        <div>
          <div class="font-semibold text-sm">Mi progreso</div>
          <div class="text-xs text-muted">Últimos 7 días</div>
        </div>
      </div>

      <!-- Metrics row -->
      <div class="grid grid-cols-3 gap-2 mb-3">
        <div class="glass rounded-lg p-2 text-center">
          <div class="text-lg font-bold text-gradient-primary">12</div>
          <div class="text-[10px] text-muted">Quizzes</div>
        </div>
        <div class="glass rounded-lg p-2 text-center">
          <div class="text-lg font-bold text-gradient-primary">85%</div>
          <div class="text-[10px] text-muted">Promedio</div>
        </div>
        <div class="glass rounded-lg p-2 text-center">
          <div class="text-lg font-bold text-gradient-primary">7</div>
          <div class="text-[10px] text-muted">Racha</div>
        </div>
      </div>

      <!-- Subject progress bars -->
      <div class="space-y-2.5">
        <div class="glass rounded-lg p-3">
          <div class="flex justify-between text-[10px] mb-1">
            <span class="font-medium">Matemáticas</span>
            <span class="text-emerald-500 font-bold">92%</span>
          </div>
          <div
            class="w-full h-1.5 rounded-full bg-white/20 dark:bg-slate-700/30"
          >
            <div
              class="h-1.5 rounded-full bg-emerald-500"
              style="width: 92%"
            />
          </div>
        </div>
        <div class="glass rounded-lg p-3">
          <div class="flex justify-between text-[10px] mb-1">
            <span class="font-medium">Historia</span>
            <span class="text-violet-500 font-bold">78%</span>
          </div>
          <div
            class="w-full h-1.5 rounded-full bg-white/20 dark:bg-slate-700/30"
          >
            <div
              class="h-1.5 rounded-full bg-violet-500"
              style="width: 78%"
            />
          </div>
        </div>
        <div class="glass rounded-lg p-3">
          <div class="flex justify-between text-[10px] mb-1">
            <span class="font-medium">Biología</span>
            <span class="text-emerald-500 font-bold">85%</span>
          </div>
          <div
            class="w-full h-1.5 rounded-full bg-white/20 dark:bg-slate-700/30"
          >
            <div
              class="h-1.5 rounded-full bg-gradient-to-r from-violet-500 to-emerald-500"
              style="width: 85%"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Floating badge: Top right -->
    <div
      class="absolute -top-4 -right-4 glass rounded-xl p-3 shadow-lg transform -rotate-6 z-10"
    >
      <div class="flex items-center gap-2">
        <UIcon name="i-lucide-trophy" class="text-amber-500 text-lg" />
        <span class="text-xs font-medium">Mejor racha: 12</span>
      </div>
    </div>

    <!-- Floating badge: Bottom left -->
    <div
      class="absolute -bottom-3 -left-3 glass rounded-xl p-3 shadow-lg transform rotate-3 z-10"
    >
      <div class="flex items-center gap-2">
        <UIcon name="i-lucide-trending-up" class="text-emerald-500 text-lg" />
        <span class="text-xs font-medium">+15% esta semana</span>
      </div>
    </div>
  </div>
</template>
