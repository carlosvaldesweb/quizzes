<template>
  <div class="relative w-full max-w-md mx-auto" style="min-height: 280px">
    <!-- Card 1: Multiple Choice with timer (starts in front) -->
    <div
      class="absolute inset-x-0 top-0 glass-strong rounded-2xl p-5 shadow-2xl card-deck-1"
    >
      <!-- Timer badge -->
      <div
        class="absolute -top-2 right-4 bg-amber-500/15 text-amber-600 dark:text-amber-400 rounded-full px-2.5 py-0.5 text-[10px] font-bold flex items-center gap-1"
      >
        <UIcon name="i-lucide-timer" class="text-xs" />
        0:30
      </div>

      <div class="text-[10px] text-muted mb-2 font-medium">
        Opción múltiple
      </div>
      <div class="text-xs font-medium mb-3">¿Cuál es la capital de Francia?</div>
      <div class="space-y-1.5">
        <div class="glass rounded-lg px-3 py-2 text-[11px] font-medium">
          Madrid
        </div>
        <div
          class="rounded-lg px-3 py-2 text-[11px] font-medium bg-violet-500 text-white shadow-md shadow-violet-500/25"
        >
          <UIcon
            name="i-lucide-check"
            class="text-xs mr-1 align-text-bottom"
          />
          París
        </div>
        <div class="glass rounded-lg px-3 py-2 text-[11px] font-medium">
          Roma
        </div>
        <div class="glass rounded-lg px-3 py-2 text-[11px] font-medium">
          Berlín
        </div>
      </div>
    </div>

    <!-- Card 2: True/False (starts in middle) -->
    <div
      class="absolute inset-x-0 top-0 glass-strong rounded-2xl p-5 shadow-lg card-deck-2"
    >
      <div class="text-[10px] text-muted mb-2 font-medium">
        Verdadero / Falso
      </div>
      <div class="text-sm font-medium mb-4">
        La Tierra gira alrededor del Sol.
      </div>
      <div class="flex gap-2">
        <div
          class="flex-1 rounded-lg py-2.5 text-center text-xs font-medium bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 ring-1 ring-emerald-500/30"
        >
          <UIcon
            name="i-lucide-check"
            class="text-sm mr-1 align-text-bottom"
          />
          Verdadero
        </div>
        <div
          class="flex-1 glass rounded-lg py-2.5 text-center text-xs font-medium"
        >
          Falso
        </div>
      </div>
    </div>

    <!-- Card 3: Matching (starts in back) -->
    <div
      class="absolute inset-x-0 top-0 glass-strong rounded-2xl p-5 shadow-lg card-deck-3"
    >
      <div class="text-[10px] text-muted mb-2 font-medium">Emparejamiento</div>
      <div class="flex gap-4 items-center">
        <div class="flex-1 space-y-2">
          <div
            class="glass rounded-lg px-3 py-2 text-[11px] text-center font-medium"
          >
            Célula
          </div>
          <div
            class="glass rounded-lg px-3 py-2 text-[11px] text-center font-medium"
          >
            ADN
          </div>
          <div
            class="glass rounded-lg px-3 py-2 text-[11px] text-center font-medium"
          >
            Fotosíntesis
          </div>
        </div>
        <!-- Connection lines -->
        <div class="flex flex-col gap-6 py-2">
          <div class="w-8 border-t border-dashed border-violet-400/50" />
          <div class="w-8 border-t border-dashed border-violet-400/50" />
          <div class="w-8 border-t border-dashed border-violet-400/50" />
        </div>
        <div class="flex-1 space-y-2">
          <div
            class="glass rounded-lg px-3 py-2 text-[11px] text-center font-medium"
          >
            Biología
          </div>
          <div
            class="glass rounded-lg px-3 py-2 text-[11px] text-center font-medium"
          >
            Genética
          </div>
          <div
            class="glass rounded-lg px-3 py-2 text-[11px] text-center font-medium"
          >
            Plantas
          </div>
        </div>
      </div>
    </div>

    <!-- Floating badge: Top right -->
    <div
      class="absolute -top-4 -right-4 glass rounded-xl p-3 shadow-lg transform -rotate-6 z-40"
    >
      <div class="flex items-center gap-2">
        <UIcon name="i-lucide-layers" class="text-violet-500 text-lg" />
        <span class="text-xs font-medium">5 tipos</span>
      </div>
    </div>

    <!-- Floating badge: Bottom left -->
    <div
      class="absolute -bottom-3 -left-3 glass rounded-xl p-3 shadow-lg transform rotate-3 z-40"
    >
      <div class="flex items-center gap-2">
        <UIcon name="i-lucide-timer" class="text-amber-500 text-lg" />
        <span class="text-xs font-medium">Con o sin tiempo</span>
      </div>
    </div>
  </div>
</template>
