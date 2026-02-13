<template>
  <div class="relative w-full max-w-md mx-auto">
    <!-- Main card -->
    <div
      class="glass-strong rounded-2xl p-6 shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-500"
    >
      <!-- Header -->
      <div
        class="flex items-center gap-3 mb-4 pb-4 border-b border-white/10 dark:border-slate-700/30"
      >
        <div
          class="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center"
        >
          <UIcon
            name="i-lucide-file-plus-2"
            class="text-violet-500 text-xl"
          />
        </div>
        <div>
          <div class="font-semibold text-sm">Crear nuevo quiz</div>
          <div class="text-xs text-muted">3 preguntas añadidas</div>
        </div>
      </div>

      <!-- Quiz title input -->
      <div class="glass rounded-xl p-3 mb-3">
        <div class="text-[10px] text-muted mb-1">Título del quiz</div>
        <div class="text-xs font-medium">Examen de Historia Universal</div>
      </div>

      <!-- Current question -->
      <div class="glass rounded-xl p-3 mb-3">
        <div class="flex items-center justify-between mb-2">
          <span
            class="text-[9px] font-bold bg-violet-500/15 text-violet-600 dark:text-violet-400 rounded-full px-2 py-0.5"
            >Pregunta 3</span
          >
        </div>
        <div class="text-xs font-medium mb-2.5">
          ¿En qué año comenzó la Revolución Francesa?
        </div>

        <!-- Question type chips -->
        <div class="flex flex-wrap gap-1.5 mb-3">
          <span
            class="bg-violet-500/15 text-violet-600 dark:text-violet-400 ring-1 ring-violet-500/30 rounded-full px-2.5 py-0.5 text-[10px] font-medium"
          >
            Opción múltiple
          </span>
          <span
            class="glass rounded-full px-2.5 py-0.5 text-[10px] font-medium text-muted"
          >
            V/F
          </span>
          <span
            class="glass rounded-full px-2.5 py-0.5 text-[10px] font-medium text-muted"
          >
            Respuesta corta
          </span>
          <span
            class="glass rounded-full px-2.5 py-0.5 text-[10px] font-medium text-muted"
          >
            Emparejamiento
          </span>
        </div>

        <!-- Answer options 2x2 grid -->
        <div class="grid grid-cols-2 gap-1.5">
          <div
            class="rounded-lg px-2.5 py-1.5 text-[11px] font-medium bg-violet-500 text-white shadow-md shadow-violet-500/25 flex items-center gap-1"
          >
            <UIcon name="i-lucide-check" class="text-[10px]" />
            1789
          </div>
          <div
            class="glass rounded-lg px-2.5 py-1.5 text-[11px] font-medium"
          >
            1776
          </div>
          <div
            class="glass rounded-lg px-2.5 py-1.5 text-[11px] font-medium"
          >
            1804
          </div>
          <div
            class="glass rounded-lg px-2.5 py-1.5 text-[11px] font-medium"
          >
            1815
          </div>
        </div>
      </div>
    </div>

    <!-- Floating badge: Top right -->
    <div
      class="absolute -top-4 -right-4 glass rounded-xl p-3 shadow-lg transform -rotate-6 z-10"
    >
      <div class="flex items-center gap-2">
        <UIcon name="i-lucide-layers" class="text-violet-500 text-lg" />
        <span class="text-xs font-medium">5 tipos</span>
      </div>
    </div>

    <!-- Floating badge: Bottom left -->
    <div
      class="absolute -bottom-3 -left-3 glass rounded-xl p-3 shadow-lg transform rotate-3 z-10"
    >
      <div class="flex items-center gap-2">
        <UIcon name="i-lucide-sparkles" class="text-amber-500 text-lg" />
        <span class="text-xs font-medium">Crea los tuyos</span>
      </div>
    </div>
  </div>
</template>
