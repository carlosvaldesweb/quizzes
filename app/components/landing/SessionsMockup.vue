<template>
  <div class="relative w-full max-w-md mx-auto">
    <!-- Main card -->
    <div
      class="glass-strong rounded-2xl p-6 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500"
    >
      <!-- Header -->
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center gap-2">
          <div
            class="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center"
          >
            <UIcon name="i-lucide-radio" class="text-violet-500 text-base" />
          </div>
          <span class="text-sm font-semibold">Nueva sesión</span>
        </div>
        <div
          class="flex items-center gap-1.5 text-[10px] font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/15 rounded-full px-2.5 py-1"
        >
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 pulse-live" />
          Activa
        </div>
      </div>

      <!-- Config grid -->
      <div class="grid grid-cols-2 gap-2 mb-4">
        <!-- Schedule open -->
        <div class="glass rounded-lg px-2.5 py-2">
          <div class="flex items-center gap-1.5">
            <UIcon
              name="i-lucide-calendar-clock"
              class="text-violet-500 text-xs"
            />
            <span class="text-[9px] text-muted">Abre</span>
          </div>
          <div class="text-[11px] font-medium mt-0.5">10 Feb, 9:00 AM</div>
        </div>
        <!-- Schedule close -->
        <div class="glass rounded-lg px-2.5 py-2">
          <div class="flex items-center gap-1.5">
            <UIcon
              name="i-lucide-calendar-clock"
              class="text-rose-500 text-xs"
            />
            <span class="text-[9px] text-muted">Cierra</span>
          </div>
          <div class="text-[11px] font-medium mt-0.5">10 Feb, 5:00 PM</div>
        </div>
        <!-- Random -->
        <div class="glass rounded-lg px-2.5 py-2">
          <div class="flex items-center gap-1.5">
            <UIcon name="i-lucide-shuffle" class="text-violet-500 text-xs" />
            <span class="text-[9px] text-muted">Aleatorio</span>
          </div>
          <div class="flex items-center gap-1.5 mt-0.5">
            <div
              class="w-6 h-3.5 rounded-full bg-violet-500 relative flex items-center"
            >
              <div
                class="w-2.5 h-2.5 rounded-full bg-white absolute right-0.5 shadow-sm"
              />
            </div>
            <span class="text-[10px] font-medium text-violet-500">ON</span>
          </div>
        </div>
        <!-- Attempts -->
        <div class="glass rounded-lg px-2.5 py-2">
          <div class="flex items-center gap-1.5">
            <UIcon name="i-lucide-repeat" class="text-amber-500 text-xs" />
            <span class="text-[9px] text-muted">Intentos</span>
          </div>
          <div class="text-[11px] font-medium mt-0.5">3 intentos</div>
        </div>
        <!-- Answers visibility -->
        <div class="glass rounded-lg px-2.5 py-2">
          <div class="flex items-center gap-1.5">
            <UIcon name="i-lucide-eye-off" class="text-muted text-xs" />
            <span class="text-[9px] text-muted">Respuestas</span>
          </div>
          <div class="text-[11px] font-medium mt-0.5">Ocultas</div>
        </div>
        <!-- Participants -->
        <div class="glass rounded-lg px-2.5 py-2">
          <div class="flex items-center gap-1.5">
            <UIcon name="i-lucide-users" class="text-emerald-500 text-xs" />
            <span class="text-[9px] text-muted">Participantes</span>
          </div>
          <div class="text-[11px] font-medium mt-0.5">0 / 20</div>
        </div>
      </div>

      <!-- Access code display -->
      <div class="glass rounded-xl p-4 text-center">
        <div class="text-[9px] text-muted mb-1.5 uppercase tracking-wider">
          Código de acceso
        </div>
        <div
          class="text-xl font-bold font-mono tracking-widest text-gradient-primary mb-1.5"
        >
          QUIZ-7X3K
        </div>
        <div
          class="inline-flex items-center gap-1 text-[10px] text-muted opacity-60"
        >
          <UIcon name="i-lucide-copy" class="text-xs" />
          Comparte este código
        </div>
      </div>
    </div>

    <!-- Floating badge: Top right -->
    <div
      class="absolute -top-4 -right-4 glass rounded-xl p-3 shadow-lg transform -rotate-6 z-10"
    >
      <div class="flex items-center gap-2">
        <UIcon name="i-lucide-radio" class="text-emerald-500 text-lg" />
        <span class="text-xs font-medium">En vivo</span>
      </div>
    </div>

    <!-- Floating badge: Bottom left -->
    <div
      class="absolute -bottom-3 -left-3 glass rounded-xl p-3 shadow-lg transform rotate-3 z-10"
    >
      <div class="flex items-center gap-2">
        <UIcon name="i-lucide-users" class="text-amber-500 text-lg" />
        <span class="text-xs font-medium">20 participantes</span>
      </div>
    </div>
  </div>
</template>
