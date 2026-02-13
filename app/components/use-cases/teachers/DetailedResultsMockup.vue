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
          <UIcon
            name="i-lucide-chart-column"
            class="text-violet-500 text-xl"
          />
        </div>
        <div>
          <div class="font-semibold text-sm">Resultados detallados</div>
          <div class="text-xs text-muted">Historia — 3ro B</div>
        </div>
      </div>

      <!-- Summary metrics -->
      <div class="grid grid-cols-3 gap-2 mb-3">
        <div class="glass rounded-lg p-2 text-center">
          <div class="text-lg font-bold text-gradient-primary">28</div>
          <div class="text-[10px] text-muted">Participantes</div>
        </div>
        <div class="glass rounded-lg p-2 text-center">
          <div class="text-lg font-bold text-gradient-primary">82%</div>
          <div class="text-[10px] text-muted">Promedio</div>
        </div>
        <div class="glass rounded-lg p-2 text-center">
          <div class="text-lg font-bold text-gradient-primary">4:32</div>
          <div class="text-[10px] text-muted">Tiempo prom.</div>
        </div>
      </div>

      <!-- Student rows -->
      <div class="space-y-2">
        <!-- Student 1 -->
        <div class="glass rounded-lg p-2.5">
          <div class="flex items-center justify-between mb-1">
            <div class="flex items-center gap-2">
              <div
                class="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center"
              >
                <UIcon
                  name="i-lucide-user"
                  class="text-emerald-500 text-xs"
                />
              </div>
              <span class="text-xs font-medium">María G.</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold text-emerald-500">95%</span>
              <span class="text-[10px] text-muted">3:15</span>
            </div>
          </div>
          <div class="flex items-center gap-3 ml-8">
            <span
              class="text-[10px] text-emerald-500 flex items-center gap-0.5"
            >
              <UIcon name="i-lucide-check-circle" class="text-[10px]" />
              19/20
            </span>
            <span class="text-[10px] text-rose-500 flex items-center gap-0.5">
              <UIcon name="i-lucide-x-circle" class="text-[10px]" />
              1/20
            </span>
          </div>
        </div>

        <!-- Student 2 -->
        <div class="glass rounded-lg p-2.5">
          <div class="flex items-center justify-between mb-1">
            <div class="flex items-center gap-2">
              <div
                class="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center"
              >
                <UIcon
                  name="i-lucide-user"
                  class="text-emerald-500 text-xs"
                />
              </div>
              <span class="text-xs font-medium">Carlos R.</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold text-emerald-500">88%</span>
              <span class="text-[10px] text-muted">4:02</span>
            </div>
          </div>
          <div class="flex items-center gap-3 ml-8">
            <span
              class="text-[10px] text-emerald-500 flex items-center gap-0.5"
            >
              <UIcon name="i-lucide-check-circle" class="text-[10px]" />
              17/20
            </span>
            <span class="text-[10px] text-rose-500 flex items-center gap-0.5">
              <UIcon name="i-lucide-x-circle" class="text-[10px]" />
              3/20
            </span>
          </div>
        </div>

        <!-- Student 3 -->
        <div class="glass rounded-lg p-2.5">
          <div class="flex items-center justify-between mb-1">
            <div class="flex items-center gap-2">
              <div
                class="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center"
              >
                <UIcon name="i-lucide-user" class="text-amber-500 text-xs" />
              </div>
              <span class="text-xs font-medium">Ana L.</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold text-amber-500">72%</span>
              <span class="text-[10px] text-muted">5:45</span>
            </div>
          </div>
          <div class="flex items-center gap-3 ml-8">
            <span
              class="text-[10px] text-emerald-500 flex items-center gap-0.5"
            >
              <UIcon name="i-lucide-check-circle" class="text-[10px]" />
              14/20
            </span>
            <span class="text-[10px] text-rose-500 flex items-center gap-0.5">
              <UIcon name="i-lucide-x-circle" class="text-[10px]" />
              6/20
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Floating badge: Top right -->
    <div
      class="absolute -top-4 -right-4 glass rounded-xl p-3 shadow-lg transform -rotate-6 z-10"
    >
      <div class="flex items-center gap-2">
        <UIcon name="i-lucide-download" class="text-violet-500 text-lg" />
        <span class="text-xs font-medium">Exportar</span>
      </div>
    </div>

    <!-- Floating badge: Bottom left -->
    <div
      class="absolute -bottom-3 -left-3 glass rounded-xl p-3 shadow-lg transform rotate-3 z-10"
    >
      <div class="flex items-center gap-2">
        <UIcon name="i-lucide-eye" class="text-emerald-500 text-lg" />
        <span class="text-xs font-medium">Tiempo real</span>
      </div>
    </div>
  </div>
</template>
