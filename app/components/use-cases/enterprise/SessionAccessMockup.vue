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
          <UIcon name="i-lucide-settings-2" class="text-violet-500 text-xl" />
        </div>
        <div>
          <div class="font-semibold text-sm">Configurar sesión</div>
          <div class="text-xs text-muted">Evaluación técnica — Q4</div>
        </div>
      </div>

      <!-- Settings grid -->
      <div class="grid grid-cols-2 gap-2 mb-3">
        <div class="glass rounded-lg p-2">
          <div class="text-[9px] text-muted mb-0.5">Intentos</div>
          <div class="text-xs font-semibold">1 intento</div>
        </div>
        <div class="glass rounded-lg p-2">
          <div class="text-[9px] text-muted mb-0.5">Aleatorio</div>
          <div class="text-xs font-semibold text-emerald-500">Activado</div>
        </div>
        <div class="glass rounded-lg p-2">
          <div class="text-[9px] text-muted mb-0.5">Registro</div>
          <div class="text-xs font-semibold">No necesario</div>
        </div>
        <div class="glass rounded-lg p-2">
          <div class="text-[9px] text-muted mb-0.5">Respuestas</div>
          <div class="text-xs font-semibold">Al terminar</div>
        </div>
      </div>

      <!-- Access code -->
      <div class="glass rounded-xl p-3 text-center mb-3">
        <div class="text-[9px] text-muted mb-1.5">Código de acceso</div>
        <div
          class="font-mono text-2xl font-bold tracking-widest text-gradient-primary"
        >
          EVAL-4R9M
        </div>
      </div>

      <!-- Status -->
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="w-2 h-2 rounded-full bg-emerald-500 pulse-live" />
          <span class="text-xs font-medium text-emerald-500">Sesión activa</span>
        </div>
        <div class="flex -space-x-1.5">
          <div
            v-for="(letter, i) in ['S', 'D', 'P', 'R', 'A']"
            :key="i"
            class="w-5 h-5 rounded-full border-2 border-white dark:border-neutral-800 flex items-center justify-center text-[7px] font-bold text-white"
            :class="
              [
                'bg-violet-500',
                'bg-emerald-500',
                'bg-amber-500',
                'bg-rose-400',
                'bg-blue-500',
              ][i]
            "
          >
            {{ letter }}
          </div>
        </div>
      </div>
    </div>

    <!-- Floating badge: Top right -->
    <div
      class="absolute -top-4 -right-4 glass rounded-xl p-3 shadow-lg transform -rotate-6 z-10"
    >
      <div class="flex items-center gap-2">
        <UIcon name="i-lucide-key-round" class="text-violet-500 text-lg" />
        <span class="text-xs font-medium">Sin registro</span>
      </div>
    </div>

    <!-- Floating badge: Bottom left -->
    <div
      class="absolute -bottom-3 -left-3 glass rounded-xl p-3 shadow-lg transform rotate-3 z-10"
    >
      <div class="flex items-center gap-2">
        <UIcon name="i-lucide-monitor-smartphone" class="text-amber-500 text-lg" />
        <span class="text-xs font-medium">Cualquier dispositivo</span>
      </div>
    </div>
  </div>
</template>
