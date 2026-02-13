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
          <UIcon name="i-lucide-palette" class="text-violet-500 text-xl" />
        </div>
        <div>
          <div class="font-semibold text-sm">Encuesta de clima laboral</div>
          <div class="text-xs text-muted">Equipo de ventas</div>
        </div>
      </div>

      <!-- Branding preview area -->
      <div class="glass rounded-xl p-3 mb-3">
        <div class="flex items-center gap-2 mb-2.5">
          <div
            class="w-7 h-7 rounded-lg bg-linear-to-br from-amber-500 to-amber-600 flex items-center justify-center"
          >
            <span class="text-[8px] font-bold text-white">AC</span>
          </div>
          <div>
            <div class="text-[10px] font-semibold">ACME Corp</div>
            <div class="text-[8px] text-muted">Tema personalizado</div>
          </div>
        </div>
        <div
          class="h-8 rounded-lg bg-linear-to-r from-amber-500/20 via-violet-500/15 to-emerald-500/20 flex items-center justify-center"
        >
          <span class="text-[8px] text-muted">Fondo personalizado</span>
        </div>
      </div>

      <!-- Survey question -->
      <div class="glass rounded-lg p-3 mb-3">
        <div class="flex items-center gap-1.5 mb-2">
          <UIcon
            name="i-lucide-message-circle"
            class="text-violet-500 text-xs"
          />
          <span class="text-[9px] text-muted">Encuesta</span>
        </div>
        <div class="text-[10px] font-medium mb-2">
          ¿Cómo calificas la última capacitación?
        </div>
        <div class="grid grid-cols-4 gap-1">
          <div
            class="rounded px-1 py-1 text-[7px] text-center font-medium bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 ring-1 ring-emerald-500/20"
          >
            Excelente
          </div>
          <div class="glass rounded px-1 py-1 text-[7px] text-center">
            Buena
          </div>
          <div class="glass rounded px-1 py-1 text-[7px] text-center">
            Regular
          </div>
          <div class="glass rounded px-1 py-1 text-[7px] text-center">
            Mala
          </div>
        </div>
      </div>

      <!-- Response distribution -->
      <div class="space-y-1.5">
        <div class="flex items-center gap-2">
          <span class="text-[8px] text-muted w-12 text-right shrink-0"
            >Excelente</span
          >
          <div
            class="flex-1 h-2 rounded-full bg-white/20 dark:bg-slate-700/30"
          >
            <div
              class="h-2 rounded-full bg-emerald-500/60"
              style="width: 45%"
            />
          </div>
          <span class="text-[8px] font-semibold w-6 shrink-0">45%</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-[8px] text-muted w-12 text-right shrink-0"
            >Buena</span
          >
          <div
            class="flex-1 h-2 rounded-full bg-white/20 dark:bg-slate-700/30"
          >
            <div
              class="h-2 rounded-full bg-violet-500/60"
              style="width: 30%"
            />
          </div>
          <span class="text-[8px] font-semibold w-6 shrink-0">30%</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-[8px] text-muted w-12 text-right shrink-0"
            >Regular</span
          >
          <div
            class="flex-1 h-2 rounded-full bg-white/20 dark:bg-slate-700/30"
          >
            <div
              class="h-2 rounded-full bg-amber-500/60"
              style="width: 20%"
            />
          </div>
          <span class="text-[8px] font-semibold w-6 shrink-0">20%</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-[8px] text-muted w-12 text-right shrink-0"
            >Mala</span
          >
          <div
            class="flex-1 h-2 rounded-full bg-white/20 dark:bg-slate-700/30"
          >
            <div class="h-2 rounded-full bg-rose-400/60" style="width: 5%" />
          </div>
          <span class="text-[8px] font-semibold w-6 shrink-0">5%</span>
        </div>
      </div>
    </div>

    <!-- Floating badge: Top right -->
    <div
      class="absolute -top-4 -right-4 glass rounded-xl p-3 shadow-lg transform -rotate-6 z-10"
    >
      <div class="flex items-center gap-2">
        <UIcon name="i-lucide-sparkles" class="text-violet-500 text-lg" />
        <span class="text-xs font-medium">Plan Pro</span>
      </div>
    </div>

    <!-- Floating badge: Bottom left -->
    <div
      class="absolute -bottom-3 -left-3 glass rounded-xl p-3 shadow-lg transform rotate-3 z-10"
    >
      <div class="flex items-center gap-2">
        <UIcon
          name="i-lucide-message-circle"
          class="text-emerald-500 text-lg"
        />
        <span class="text-xs font-medium">Sin respuesta correcta</span>
      </div>
    </div>
  </div>
</template>
