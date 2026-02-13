<template>
  <div class="relative w-full max-w-md mx-auto">
    <!-- Main card: Team assessment mockup -->
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
          <UIcon name="i-lucide-building-2" class="text-violet-500 text-xl" />
        </div>
        <div>
          <div class="font-semibold text-sm">Evaluación de equipo</div>
          <div class="text-xs text-muted">Capacitación Q4 2025</div>
        </div>
      </div>

      <!-- Mini metrics row -->
      <div class="grid grid-cols-3 gap-2 mb-3">
        <div class="glass rounded-lg p-2 text-center">
          <div class="text-lg font-bold text-gradient-primary">24</div>
          <div class="text-[10px] text-muted">Participantes</div>
        </div>
        <div class="glass rounded-lg p-2 text-center">
          <div class="text-lg font-bold text-gradient-primary">87%</div>
          <div class="text-[10px] text-muted">Aprobados</div>
        </div>
        <div class="glass rounded-lg p-2 text-center">
          <div class="text-lg font-bold text-gradient-primary">4.2</div>
          <div class="text-[10px] text-muted">Min. prom.</div>
        </div>
      </div>

      <!-- Progress bar mockup -->
      <div class="glass rounded-lg p-3">
        <div class="flex justify-between text-xs mb-1">
          <span class="font-medium">Progreso del equipo</span>
          <span class="text-emerald-500 font-bold">87%</span>
        </div>
        <div class="w-full h-2 rounded-full bg-white/20 dark:bg-slate-700/30">
          <div
            class="h-2 rounded-full bg-gradient-to-r from-violet-500 to-emerald-500 w-[87%]"
          />
        </div>
      </div>
    </div>

    <!-- Floating badge: Top right -->
    <div
      class="absolute -top-4 -right-4 glass rounded-xl p-3 shadow-lg transform -rotate-6 z-10"
    >
      <div class="flex items-center gap-2">
        <UIcon
          name="i-lucide-shield-check"
          class="text-emerald-500 text-lg"
        />
        <span class="text-xs font-medium">21 certificados</span>
      </div>
    </div>

    <!-- Floating badge: Bottom left -->
    <div
      class="absolute -bottom-3 -left-3 glass rounded-xl p-3 shadow-lg transform rotate-3 z-10"
    >
      <div class="flex items-center gap-2">
        <UIcon
          name="i-lucide-calendar-check"
          class="text-amber-500 text-lg"
        />
        <span class="text-xs font-medium">8 sesiones</span>
      </div>
    </div>
  </div>
</template>
