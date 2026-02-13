<template>
  <div class="relative w-full max-w-md mx-auto">
    <div class="glass-strong rounded-2xl p-5 shadow-2xl">
      <!-- Header -->
      <div
        class="flex items-center gap-3 mb-4 pb-3 border-b border-white/10 dark:border-slate-700/30"
      >
        <div
          class="w-9 h-9 rounded-xl bg-violet-500/20 flex items-center justify-center"
        >
          <UIcon name="i-lucide-palette" class="text-violet-500 text-lg" />
        </div>
        <div>
          <div class="font-semibold text-sm">Personalizar tema</div>
          <div class="text-xs text-muted">Elige cómo se ve tu quiz</div>
        </div>
      </div>

      <!-- Theme selector circles -->
      <div class="flex justify-center gap-6 mb-4">
        <!-- Theme 1: Clásico (violet) -->
        <div class="flex flex-col items-center gap-1.5">
          <div class="relative">
            <div
              class="w-9 h-9 rounded-full bg-linear-to-br from-violet-400 to-violet-600 shadow-md"
            />
            <div
              class="theme-cycle-1 absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-white dark:bg-slate-800 shadow flex items-center justify-center"
            >
              <UIcon
                name="i-lucide-check"
                class="text-violet-500 text-[9px]"
              />
            </div>
          </div>
          <span class="text-[10px] font-medium">Clásico</span>
        </div>

        <!-- Theme 2: Naturaleza (emerald) -->
        <div class="flex flex-col items-center gap-1.5">
          <div class="relative">
            <div
              class="w-9 h-9 rounded-full bg-linear-to-br from-emerald-400 to-emerald-600 shadow-md"
            />
            <div
              class="theme-cycle-2 absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-white dark:bg-slate-800 shadow flex items-center justify-center"
            >
              <UIcon
                name="i-lucide-check"
                class="text-emerald-500 text-[9px]"
              />
            </div>
          </div>
          <span class="text-[10px] font-medium">Naturaleza</span>
        </div>

        <!-- Theme 3: Atardecer (rose) -->
        <div class="flex flex-col items-center gap-1.5">
          <div class="relative">
            <div
              class="w-9 h-9 rounded-full bg-linear-to-br from-rose-400 to-rose-600 shadow-md"
            />
            <div
              class="theme-cycle-3 absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-white dark:bg-slate-800 shadow flex items-center justify-center"
            >
              <UIcon
                name="i-lucide-check"
                class="text-rose-500 text-[9px]"
              />
            </div>
          </div>
          <span class="text-[10px] font-medium">Atardecer</span>
        </div>
      </div>

      <!-- Quiz preview area: crossfading themes -->
      <div class="relative" style="min-height: 125px">
        <!-- Violet theme preview -->
        <div
          class="theme-cycle-1 absolute inset-0 rounded-xl p-3 bg-violet-500/5 border border-violet-500/20"
        >
          <div class="flex items-center gap-1.5 mb-2">
            <UIcon name="i-lucide-eye" class="text-violet-500 text-xs" />
            <span
              class="text-[9px] font-semibold text-violet-600 dark:text-violet-400"
              >Vista previa</span
            >
          </div>
          <div class="text-[10px] font-medium mb-2.5">
            ¿Quién pintó la Mona Lisa?
          </div>
          <div class="grid grid-cols-2 gap-1.5">
            <div
              class="rounded-md py-1.5 text-center text-[9px] font-medium bg-violet-500 text-white shadow-sm shadow-violet-500/25 flex items-center justify-center gap-1"
            >
              <UIcon name="i-lucide-check" class="text-[8px]" />
              Da Vinci
            </div>
            <div
              class="glass rounded-md py-1.5 text-center text-[9px] font-medium"
            >
              Miguel Ángel
            </div>
            <div
              class="glass rounded-md py-1.5 text-center text-[9px] font-medium"
            >
              Rafael
            </div>
            <div
              class="glass rounded-md py-1.5 text-center text-[9px] font-medium"
            >
              Botticelli
            </div>
          </div>
        </div>

        <!-- Emerald theme preview -->
        <div
          class="theme-cycle-2 absolute inset-0 rounded-xl p-3 bg-emerald-500/5 border border-emerald-500/20"
        >
          <div class="flex items-center gap-1.5 mb-2">
            <UIcon name="i-lucide-eye" class="text-emerald-500 text-xs" />
            <span
              class="text-[9px] font-semibold text-emerald-600 dark:text-emerald-400"
              >Vista previa</span
            >
          </div>
          <div class="text-[10px] font-medium mb-2.5">
            ¿Quién pintó la Mona Lisa?
          </div>
          <div class="grid grid-cols-2 gap-1.5">
            <div
              class="rounded-md py-1.5 text-center text-[9px] font-medium bg-emerald-500 text-white shadow-sm shadow-emerald-500/25 flex items-center justify-center gap-1"
            >
              <UIcon name="i-lucide-check" class="text-[8px]" />
              Da Vinci
            </div>
            <div
              class="glass rounded-md py-1.5 text-center text-[9px] font-medium"
            >
              Miguel Ángel
            </div>
            <div
              class="glass rounded-md py-1.5 text-center text-[9px] font-medium"
            >
              Rafael
            </div>
            <div
              class="glass rounded-md py-1.5 text-center text-[9px] font-medium"
            >
              Botticelli
            </div>
          </div>
        </div>

        <!-- Rose theme preview -->
        <div
          class="theme-cycle-3 absolute inset-0 rounded-xl p-3 bg-rose-500/5 border border-rose-500/20"
        >
          <div class="flex items-center gap-1.5 mb-2">
            <UIcon name="i-lucide-eye" class="text-rose-500 text-xs" />
            <span
              class="text-[9px] font-semibold text-rose-600 dark:text-rose-400"
              >Vista previa</span
            >
          </div>
          <div class="text-[10px] font-medium mb-2.5">
            ¿Quién pintó la Mona Lisa?
          </div>
          <div class="grid grid-cols-2 gap-1.5">
            <div
              class="rounded-md py-1.5 text-center text-[9px] font-medium bg-rose-500 text-white shadow-sm shadow-rose-500/25 flex items-center justify-center gap-1"
            >
              <UIcon name="i-lucide-check" class="text-[8px]" />
              Da Vinci
            </div>
            <div
              class="glass rounded-md py-1.5 text-center text-[9px] font-medium"
            >
              Miguel Ángel
            </div>
            <div
              class="glass rounded-md py-1.5 text-center text-[9px] font-medium"
            >
              Rafael
            </div>
            <div
              class="glass rounded-md py-1.5 text-center text-[9px] font-medium"
            >
              Botticelli
            </div>
          </div>
        </div>
      </div>

      <!-- Custom branding hint -->
      <div class="glass rounded-lg p-2.5 mt-3 flex items-center gap-2">
        <UIcon name="i-lucide-image-plus" class="text-violet-500 text-sm" />
        <span class="text-[10px] font-medium"
          >Sube tu logo y fondo personalizado</span
        >
        <span
          class="ml-auto text-[9px] font-semibold bg-violet-500/15 text-violet-600 dark:text-violet-400 rounded-full px-2 py-0.5"
          >Pro</span
        >
      </div>
    </div>

    <!-- Floating badge: Top right -->
    <div
      class="absolute -top-4 -right-4 glass rounded-xl p-3 shadow-lg transform -rotate-6 z-10"
    >
      <div class="flex items-center gap-2">
        <UIcon name="i-lucide-palette" class="text-violet-500 text-lg" />
        <span class="text-xs font-medium">Personaliza</span>
      </div>
    </div>

    <!-- Floating badge: Bottom left -->
    <div
      class="absolute -bottom-3 -left-3 glass rounded-xl p-3 shadow-lg transform rotate-3 z-10"
    >
      <div class="flex items-center gap-2">
        <UIcon name="i-lucide-sparkles" class="text-amber-500 text-lg" />
        <span class="text-xs font-medium">Plan Pro</span>
      </div>
    </div>
  </div>
</template>
