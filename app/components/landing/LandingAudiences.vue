<script setup lang="ts">
const audiences = [
  {
    icon: "i-lucide-graduation-cap",
    title: "Para Profesores",
    description:
      "Crea evaluaciones en minutos, compártelas con un código y obtén resultados al instante.",
    to: "/para/profesores",
    color: "violet",
    features: [
      { icon: "i-lucide-clock", label: "Resultados al instante" },
      { icon: "i-lucide-bar-chart", label: "Estadísticas por alumno" },
      { icon: "i-lucide-calendar-clock", label: "Sesiones programables" },
    ],
  },
  {
    icon: "i-lucide-building-2",
    title: "Para Empresas",
    description:
      "Evalúa candidatos, mide conocimientos después de capacitaciones y recopila opiniones.",
    to: "/para/empresas",
    color: "amber",
    features: [
      { icon: "i-lucide-shield-check", label: "Evaluaciones certificables" },
      { icon: "i-lucide-users", label: "Hasta 50 participantes" },
      { icon: "i-lucide-repeat", label: "Múltiples intentos" },
    ],
  },
  {
    icon: "i-lucide-book-open",
    title: "Para Estudiantes",
    description:
      "Practica y repasa por tu cuenta con retroalimentación inmediata. Únete con solo un código.",
    to: "/para/estudiantes",
    color: "emerald",
    features: [
      { icon: "i-lucide-zap", label: "Feedback inmediato" },
      { icon: "i-lucide-layers", label: "Modo flashcards" },
      { icon: "i-lucide-user-x", label: "Sin registro necesario" },
    ],
  },
];
</script>

<template>
  <UPageSection headline="¿Para quién es?">
    <template #title>
      Diseñado para todos los que enseñan, capacitan y
      <SharedGradientText>entretienen</SharedGradientText>
    </template>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        v-for="audience in audiences"
        :key="audience.title"
        class="glass-strong rounded-2xl overflow-hidden card-hover-lift group"
      >
        <!-- Visual header with mini-mockup -->
        <div class="p-5 pb-0">
          <!-- Teachers mockup: mini results list -->
          <div
            v-if="audience.color === 'violet'"
            class="glass rounded-xl p-3 space-y-2"
          >
            <div class="flex items-center justify-between text-[10px] mb-1">
              <span class="font-medium text-muted">Resultados del grupo</span>
              <span class="text-violet-500 font-bold">25 alumnos</span>
            </div>
            <div
              v-for="(student, i) in [
                { name: 'Ana García', score: 95, color: 'emerald' },
                { name: 'Luis Pérez', score: 88, color: 'emerald' },
                { name: 'María López', score: 72, color: 'amber' },
              ]"
              :key="i"
              class="flex items-center justify-between"
            >
              <div class="flex items-center gap-2">
                <div
                  class="w-5 h-5 rounded-full bg-violet-500/15 flex items-center justify-center"
                >
                  <span class="text-[8px] font-bold text-violet-500">{{
                    student.name[0]
                  }}</span>
                </div>
                <span class="text-[10px] font-medium">{{ student.name }}</span>
              </div>
              <span
                class="text-[10px] font-bold"
                :class="
                  student.color === 'emerald'
                    ? 'text-emerald-500'
                    : 'text-amber-500'
                "
                >{{ student.score }}%</span
              >
            </div>
          </div>

          <!-- Business mockup: mini metrics -->
          <div
            v-else-if="audience.color === 'amber'"
            class="glass rounded-xl p-3"
          >
            <div class="flex items-center justify-between text-[10px] mb-2">
              <span class="font-medium text-muted">Capacitación Q1</span>
              <span
                class="text-[9px] font-medium text-emerald-500 bg-emerald-500/10 rounded-full px-1.5 py-0.5"
                >Completada</span
              >
            </div>
            <div class="grid grid-cols-3 gap-1.5">
              <div class="glass rounded-lg p-1.5 text-center">
                <div class="text-sm font-bold text-gradient-primary">24</div>
                <div class="text-[8px] text-muted">Evaluados</div>
              </div>
              <div class="glass rounded-lg p-1.5 text-center">
                <div class="text-sm font-bold text-gradient-primary">87%</div>
                <div class="text-[8px] text-muted">Aprobados</div>
              </div>
              <div class="glass rounded-lg p-1.5 text-center">
                <div class="text-sm font-bold text-gradient-primary">4.2</div>
                <div class="text-[8px] text-muted">Min. prom.</div>
              </div>
            </div>
          </div>

          <!-- Students mockup: mini flashcard -->
          <div
            v-else-if="audience.color === 'emerald'"
            class="glass rounded-xl p-3"
          >
            <div class="flex items-center justify-between text-[10px] mb-2">
              <span class="font-medium text-muted">Modo práctica</span>
              <span class="text-emerald-500 font-bold">5/10</span>
            </div>
            <div
              class="glass rounded-lg p-2 text-center text-[11px] font-medium mb-2"
            >
              ¿Cuál es la capital de Japón?
            </div>
            <div
              class="rounded-lg p-1.5 text-center text-[10px] font-medium bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
            >
              <UIcon
                name="i-lucide-check"
                class="text-[10px] mr-0.5 align-text-bottom"
              />
              Tokio — ¡Correcto!
            </div>
          </div>
        </div>

        <!-- Card content -->
        <div class="p-5">
          <div class="flex items-center gap-2.5 mb-2">
            <div
              class="w-9 h-9 rounded-xl flex items-center justify-center"
              :class="{
                'bg-violet-500/15': audience.color === 'violet',
                'bg-amber-500/15': audience.color === 'amber',
                'bg-emerald-500/15': audience.color === 'emerald',
              }"
            >
              <UIcon
                :name="audience.icon"
                class="text-lg"
                :class="{
                  'text-violet-500': audience.color === 'violet',
                  'text-amber-500': audience.color === 'amber',
                  'text-emerald-500': audience.color === 'emerald',
                }"
              />
            </div>
            <h3 class="text-base font-semibold">{{ audience.title }}</h3>
          </div>

          <p class="text-sm text-muted mb-4">{{ audience.description }}</p>

          <!-- Feature highlights -->
          <div class="space-y-2 mb-4">
            <div
              v-for="feature in audience.features"
              :key="feature.label"
              class="flex items-center gap-2"
            >
              <UIcon
                :name="feature.icon"
                class="text-sm"
                :class="{
                  'text-violet-500': audience.color === 'violet',
                  'text-amber-500': audience.color === 'amber',
                  'text-emerald-500': audience.color === 'emerald',
                }"
              />
              <span class="text-xs font-medium">{{ feature.label }}</span>
            </div>
          </div>

          <!-- CTA link -->
          <NuxtLink
            :to="audience.to"
            class="inline-flex items-center gap-1 text-sm font-medium transition-colors"
            :class="{
              'text-violet-500 hover:text-violet-600':
                audience.color === 'violet',
              'text-amber-500 hover:text-amber-600':
                audience.color === 'amber',
              'text-emerald-500 hover:text-emerald-600':
                audience.color === 'emerald',
            }"
          >
            Saber más
            <UIcon
              name="i-lucide-arrow-right"
              class="text-sm transition-transform group-hover:translate-x-0.5"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </UPageSection>
</template>
