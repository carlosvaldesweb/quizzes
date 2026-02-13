<template>
  <div class="relative w-full max-w-md mx-auto">
    <div
      class="glass-strong rounded-2xl p-5 shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-500"
    >
      <!-- Header -->
      <div
        class="flex items-center gap-3 mb-4 pb-3 border-b border-white/10 dark:border-slate-700/30"
      >
        <div
          class="w-9 h-9 rounded-xl bg-violet-500/20 flex items-center justify-center"
        >
          <UIcon name="i-lucide-share-2" class="text-violet-500 text-lg" />
        </div>
        <div>
          <div class="font-semibold text-sm">Mi sesión de estudio</div>
          <div class="text-xs text-muted">Biología — Examen parcial</div>
        </div>
      </div>

      <!-- Access code -->
      <div class="glass rounded-xl p-3 mb-3 text-center">
        <div class="text-[9px] text-muted mb-1.5">Código de acceso</div>
        <div
          class="font-mono text-2xl font-bold tracking-widest text-gradient-primary mb-1"
        >
          QUIZ-4M2R
        </div>
        <div class="flex items-center justify-center gap-1 text-[10px] text-muted">
          <UIcon name="i-lucide-copy" class="text-violet-500 text-xs" />
          <span>Comparte este código con tus compañeros</span>
        </div>
      </div>

      <!-- Session settings -->
      <div class="grid grid-cols-2 gap-2 mb-3">
        <div class="glass rounded-lg p-2">
          <div class="text-[9px] text-muted mb-0.5">Preguntas</div>
          <div class="text-xs font-semibold">10</div>
        </div>
        <div class="glass rounded-lg p-2">
          <div class="text-[9px] text-muted mb-0.5">Intentos</div>
          <div class="text-xs font-semibold">3</div>
        </div>
        <div class="glass rounded-lg p-2">
          <div class="text-[9px] text-muted mb-0.5">Aleatorio</div>
          <div
            class="text-xs font-semibold text-emerald-600 dark:text-emerald-400"
          >
            Sí
          </div>
        </div>
        <div class="glass rounded-lg p-2">
          <div class="text-[9px] text-muted mb-0.5">Registro</div>
          <div class="text-xs font-semibold">No requiere</div>
        </div>
      </div>

      <!-- Share action -->
      <div
        class="rounded-xl py-2.5 text-center text-[11px] font-medium text-white bg-violet-500 shadow-md shadow-violet-500/25 flex items-center justify-center gap-1.5"
      >
        <UIcon name="i-lucide-send" class="text-sm" />
        Compartir sesión
      </div>
    </div>

    <!-- Floating badge: Top right -->
    <div
      class="absolute -top-4 -right-4 glass rounded-xl p-3 shadow-lg transform -rotate-6 z-10"
    >
      <div class="flex items-center gap-2">
        <UIcon name="i-lucide-users" class="text-violet-500 text-lg" />
        <span class="text-xs font-medium">3 compañeros</span>
      </div>
    </div>

    <!-- Floating badge: Bottom left -->
    <div
      class="absolute -bottom-3 -left-3 glass rounded-xl p-3 shadow-lg transform rotate-3 z-10"
    >
      <div class="flex items-center gap-2">
        <UIcon name="i-lucide-log-in" class="text-emerald-500 text-lg" />
        <span class="text-xs font-medium">Sin registro</span>
      </div>
    </div>
  </div>
</template>
