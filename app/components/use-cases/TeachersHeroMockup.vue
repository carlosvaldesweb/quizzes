<template>
  <div class="relative w-full max-w-md mx-auto">
    <!-- Main card: Class results mockup -->
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
          <UIcon
            name="i-lucide-graduation-cap"
            class="text-violet-500 text-xl"
          />
        </div>
        <div>
          <div class="font-semibold text-sm">Resultados del grupo</div>
          <div class="text-xs text-muted">Historia — 3ro B</div>
        </div>
      </div>

      <!-- Mini student results list -->
      <div class="space-y-2">
        <div class="glass rounded-lg p-2 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div
              class="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center"
            >
              <UIcon name="i-lucide-user" class="text-emerald-500 text-xs" />
            </div>
            <span class="text-xs font-medium">María G.</span>
          </div>
          <span class="text-xs font-bold text-emerald-500">95%</span>
        </div>
        <div class="glass rounded-lg p-2 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div
              class="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center"
            >
              <UIcon name="i-lucide-user" class="text-emerald-500 text-xs" />
            </div>
            <span class="text-xs font-medium">Carlos R.</span>
          </div>
          <span class="text-xs font-bold text-emerald-500">88%</span>
        </div>
        <div class="glass rounded-lg p-2 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div
              class="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center"
            >
              <UIcon name="i-lucide-user" class="text-amber-500 text-xs" />
            </div>
            <span class="text-xs font-medium">Ana L.</span>
          </div>
          <span class="text-xs font-bold text-amber-500">72%</span>
        </div>
      </div>
    </div>

    <!-- Floating badge: Top right -->
    <div
      class="absolute -top-4 -right-4 glass rounded-xl p-3 shadow-lg transform -rotate-6 z-10"
    >
      <div class="flex items-center gap-2">
        <UIcon name="i-lucide-file-text" class="text-violet-500 text-lg" />
        <span class="text-xs font-medium">12 quizzes</span>
      </div>
    </div>

    <!-- Floating badge: Bottom left -->
    <div
      class="absolute -bottom-3 -left-3 glass rounded-xl p-3 shadow-lg transform rotate-3 z-10"
    >
      <div class="flex items-center gap-2">
        <UIcon name="i-lucide-bar-chart-3" class="text-emerald-500 text-lg" />
        <span class="text-xs font-medium">Promedio: 82%</span>
      </div>
    </div>
  </div>
</template>
