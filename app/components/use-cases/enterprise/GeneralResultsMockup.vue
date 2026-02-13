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
          <UIcon name="i-lucide-chart-line" class="text-violet-500 text-xl" />
        </div>
        <div>
          <div class="font-semibold text-sm">Resultados generales</div>
          <div class="text-xs text-muted">Evaluación técnica — Q4</div>
        </div>
      </div>

      <!-- Main metrics cards -->
      <div class="grid grid-cols-2 gap-3 mb-4">
        <!-- Score card -->
        <div class="glass rounded-xl p-3">
          <div class="flex items-center gap-2 mb-2">
            <UIcon name="i-lucide-trophy" class="text-violet-500 text-sm" />
            <div class="text-[10px] text-muted">Puntuación promedio</div>
          </div>
          <div class="text-2xl font-bold text-gradient-primary mb-3">
            0.33 Puntos
          </div>
          <div class="space-y-1.5">
            <div class="flex items-center justify-between">
              <span class="text-[9px] text-muted">Más alta</span>
              <div class="flex items-center gap-1">
                <UIcon
                  name="i-lucide-arrow-up"
                  class="text-emerald-500 text-[10px]"
                />
                <span class="text-[10px] font-bold text-emerald-500"
                  >1 Punto</span
                >
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-[9px] text-muted">Más baja</span>
              <div class="flex items-center gap-1">
                <UIcon
                  name="i-lucide-arrow-down"
                  class="text-rose-500 text-[10px]"
                />
                <span class="text-[10px] font-bold text-rose-500"
                  >0 Puntos</span
                >
              </div>
            </div>
          </div>
        </div>

        <!-- Time card -->
        <div class="glass rounded-xl p-3">
          <div class="flex items-center gap-2 mb-2">
            <UIcon name="i-lucide-clock" class="text-violet-500 text-sm" />
            <div class="text-[10px] text-muted">Tiempo promedio</div>
          </div>
          <div class="text-2xl font-bold text-gradient-primary mb-3">12s</div>
          <div class="space-y-1.5">
            <div class="flex items-center justify-between">
              <span class="text-[9px] text-muted">Más rápido</span>
              <div class="flex items-center gap-1">
                <UIcon
                  name="i-lucide-zap"
                  class="text-emerald-500 text-[10px]"
                />
                <span class="text-[10px] font-bold text-emerald-500">6s</span>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-[9px] text-muted">Más lento</span>
              <div class="flex items-center gap-1">
                <UIcon
                  name="i-lucide-clock"
                  class="text-amber-500 text-[10px]"
                />
                <span class="text-[10px] font-bold text-amber-500">24s</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Distribution section -->
      <div class="glass rounded-lg p-3">
        <div class="text-xs font-medium mb-3">Distribución de puntuaciones</div>
        <div class="space-y-2">
          <!-- 0 puntos -->
          <div>
            <div class="flex items-center justify-between mb-1">
              <span class="text-[10px] text-muted">0 puntos</span>
              <span class="text-[10px] font-medium">2 participantes</span>
            </div>
            <div
              class="w-full h-1.5 rounded-full bg-white/20 dark:bg-slate-700/30"
            >
              <div
                class="h-1.5 rounded-full bg-rose-500"
                style="width: 50%"
              />
            </div>
          </div>

          <!-- 1 punto -->
          <div>
            <div class="flex items-center justify-between mb-1">
              <span class="text-[10px] text-muted">1 punto</span>
              <span class="text-[10px] font-medium">1 participante</span>
            </div>
            <div
              class="w-full h-1.5 rounded-full bg-white/20 dark:bg-slate-700/30"
            >
              <div
                class="h-1.5 rounded-full bg-amber-500"
                style="width: 25%"
              />
            </div>
          </div>

          <!-- 2 puntos -->
          <div>
            <div class="flex items-center justify-between mb-1">
              <span class="text-[10px] text-muted">2 puntos</span>
              <span class="text-[10px] font-medium">0 participantes</span>
            </div>
            <div
              class="w-full h-1.5 rounded-full bg-white/20 dark:bg-slate-700/30"
            >
              <div class="h-1.5 rounded-full bg-emerald-500" style="width: 0%" />
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
        <UIcon name="i-lucide-bar-chart-3" class="text-violet-500 text-lg" />
        <span class="text-xs font-medium">Métricas generales</span>
      </div>
    </div>

    <!-- Floating badge: Bottom left -->
    <div
      class="absolute -bottom-3 -left-3 glass rounded-xl p-3 shadow-lg transform rotate-3 z-10"
    >
      <div class="flex items-center gap-2">
        <UIcon name="i-lucide-trending-up" class="text-emerald-500 text-lg" />
        <span class="text-xs font-medium">Vista completa</span>
      </div>
    </div>
  </div>
</template>
