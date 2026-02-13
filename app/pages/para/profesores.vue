<script setup lang="ts">
definePageMeta({ layout: "public" });

const appName = useAppName();

useSeoMeta({
  title: `Para Profesores — ${appName}`,
  description:
    "Evalúa a tus alumnos de forma dinámica y moderna con quizzes interactivos. Crea evaluaciones en minutos y obtén resultados al instante.",
});

const stats = [
  {
    value: "85%",
    label: "Ahorro de tiempo en evaluación",
    icon: "i-lucide-clock",
  },
  {
    value: "10x",
    label: "Más rápido que calificar a mano",
    icon: "i-lucide-zap",
  },
  {
    value: "100%",
    label: "Resultados al instante",
    icon: "i-lucide-chart-bar",
  },
  {
    value: "0",
    label: "Registros necesarios para alumnos",
    icon: "i-lucide-user-x",
  },
];

const problems = [
  {
    icon: "i-lucide-clock",
    title: "Evaluaciones que consumen mucho tiempo",
    description:
      "Crear exámenes, imprimirlos, aplicarlos y calificarlos a mano toma horas que podrías dedicar a enseñar.",
  },
  {
    icon: "i-lucide-file-x",
    title: "Sin retroalimentación inmediata",
    description:
      "Los alumnos tienen que esperar días para saber sus resultados, perdiendo la oportunidad de aprender de sus errores al momento.",
  },
  {
    icon: "i-lucide-bar-chart-3",
    title: "Difícil medir el progreso",
    description:
      "Sin datos detallados es complicado identificar qué temas necesitan refuerzo y cómo avanza cada estudiante.",
  },
];

const timerFeatures = [
  {
    icon: "i-lucide-timer",
    title: "Tiempo por pregunta",
    desc: "Configura desde 30 segundos hasta 2 minutos por pregunta.",
  },
  {
    icon: "i-lucide-settings-2",
    title: "Configurable individualmente",
    desc: "Cada pregunta puede tener su propio límite de tiempo o no tener límite.",
  },
  {
    icon: "i-lucide-gauge",
    title: "Simula exámenes reales",
    desc: "La presión de tiempo controlada prepara mejor a tus alumnos.",
  },
];

const shuffleFeatures = [
  {
    icon: "i-lucide-shuffle",
    title: "Preguntas en orden aleatorio",
    desc: "Cada alumno recibe las preguntas en una secuencia diferente.",
  },
  {
    icon: "i-lucide-list-ordered",
    title: "Respuestas también aleatorias",
    desc: "Las opciones de respuesta se reordenan para cada participante.",
  },
  {
    icon: "i-lucide-shield-check",
    title: "Evaluaciones más justas",
    desc: "Reduce significativamente la posibilidad de copia entre alumnos.",
  },
];

const resultsFeatures = [
  {
    icon: "i-lucide-chart-bar",
    title: "Puntaje por alumno",
    desc: "Ve quién aprobó y quién necesita refuerzo de un vistazo.",
  },
  {
    icon: "i-lucide-clock",
    title: "Tiempo por pregunta",
    desc: "Identifica qué preguntas fueron más difíciles por el tiempo invertido.",
  },
  {
    icon: "i-lucide-check-circle",
    title: "Correctas e incorrectas",
    desc: "Detalle de cada respuesta por alumno para análisis completo.",
  },
  {
    icon: "i-lucide-search",
    title: "Identifica brechas",
    desc: "Descubre qué temas necesitan más repaso para todo el grupo.",
  },
];

const steps = [
  {
    number: 1,
    icon: "i-lucide-pencil-line",
    title: "Crea tu quiz",
    description:
      "Escribe tus preguntas. Elige entre 5 tipos: opción múltiple, V/F, respuesta corta, encuesta y emparejamiento.",
  },
  {
    number: 2,
    icon: "i-lucide-share-2",
    title: "Comparte el código",
    description:
      "Genera una sesión y comparte el código de acceso con tu grupo. Sin registros necesarios.",
  },
  {
    number: 3,
    icon: "i-lucide-users",
    title: "Tus alumnos responden",
    description:
      "Desde cualquier dispositivo con navegador. Entran con el código y comienzan a responder.",
  },
  {
    number: 4,
    icon: "i-lucide-chart-column",
    title: "Revisa los resultados",
    description:
      "Ve puntajes, respuestas y tiempos por alumno. Identifica temas que necesitan refuerzo.",
  },
];

const testimonials = [
  {
    quote:
      `Antes tardaba horas calificando exámenes. Con ${appName}, mis alumnos responden en línea y yo tengo los resultados al instante. Me ha cambiado la forma de evaluar.`,
    author: "Profesora de secundaria",
    role: "Ciudad de México",
    rating: 5,
  },
  {
    quote:
      "El modo práctica es genial para que mis alumnos repasen antes de los exámenes. Les encanta poder ver sus errores al momento.",
    author: "Profesor de matemáticas",
    role: "Monterrey",
    rating: 5,
  },
  {
    quote:
      `Uso ${appName} cada semana para hacer evaluaciones rápidas. La facilidad de compartir un código y que no necesiten cuenta es clave.`,
    author: "Profesora de idiomas",
    role: "Guadalajara",
    rating: 5,
  },
];
</script>

<template>
  <div>
    <!-- Hero -->
    <UseCasesUseCaseHero
      icon="i-lucide-graduation-cap"
      headline="Para Profesores"
      description="Crea quizzes interactivos en minutos, compártelos con un código y obtén resultados detallados al instante. Tus alumnos participan desde cualquier dispositivo sin necesidad de registrarse."
    >
      <template #title>
        Evalúa a tus alumnos de forma
        <SharedGradientText>dinámica y moderna</SharedGradientText>
      </template>
      <UseCasesTeachersHeroMockup />
    </UseCasesUseCaseHero>

    <!-- Pain points -->
    <UPageSection
      headline="El problema"
      :description="`Si alguno de estos problemas te suena familiar, ${appName} es para ti.`"
    >
      <template #title>
        Las evaluaciones tradicionales se quedan
        <SharedGradientText>cortas</SharedGradientText>
      </template>
      <UseCasesUseCaseFeatures :features="problems" />
    </UPageSection>

    <!-- Showcase: Detailed Results (normal: text left, mockup right) -->
    <UPageSection headline="Resultados">
      <template #title>
        Analiza el rendimiento de cada
        <SharedGradientText>alumno</SharedGradientText>
      </template>
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
      >
        <div>
          <p class="text-lg text-muted mb-6">
            Revisa puntajes, tiempo por pregunta y respuestas de cada
            participante. Identifica exactamente qué temas necesitan refuerzo.
          </p>
          <div class="space-y-3">
            <div
              v-for="item in resultsFeatures"
              :key="item.title"
              class="flex items-start gap-3"
            >
              <div
                class="w-8 h-8 rounded-lg bg-violet-500/10 dark:bg-violet-500/20 flex items-center justify-center shrink-0 mt-0.5"
              >
                <UIcon :name="item.icon" class="text-violet-500" />
              </div>
              <div>
                <div class="text-sm font-medium">{{ item.title }}</div>
                <div class="text-sm text-muted">{{ item.desc }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="relative">
          <UseCasesTeachersDetailedResultsMockup />
        </div>
      </div>
    </UPageSection>

    <!-- Showcase: Timer (reversed: mockup left, text right + gradient mesh) -->
    <UPageSection
      headline="Control de tiempo"
      class="gradient-mesh-subtle gradient-mesh"
    >
      <template #title>
        Controla el ritmo de tu
        <SharedGradientText>evaluación</SharedGradientText>
      </template>
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
      >
        <div class="lg:order-last">
          <p class="text-lg text-muted mb-6">
            Define un límite de tiempo por pregunta para que tus evaluaciones
            simulen condiciones reales de examen y mantengan el ritmo.
          </p>
          <div class="space-y-3">
            <div
              v-for="item in timerFeatures"
              :key="item.title"
              class="flex items-start gap-3"
            >
              <div
                class="w-8 h-8 rounded-lg bg-violet-500/10 dark:bg-violet-500/20 flex items-center justify-center shrink-0 mt-0.5"
              >
                <UIcon :name="item.icon" class="text-violet-500" />
              </div>
              <div>
                <div class="text-sm font-medium">{{ item.title }}</div>
                <div class="text-sm text-muted">{{ item.desc }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="relative lg:order-first">
          <UseCasesTeachersTimerQuestionMockup />
        </div>
      </div>
    </UPageSection>

    <!-- Showcase: Shuffle (normal: text left, mockup right) -->
    <UPageSection headline="Anti-copia">
      <template #title>
        Cada alumno ve un orden
        <SharedGradientText>diferente</SharedGradientText>
      </template>
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
      >
        <div>
          <p class="text-lg text-muted mb-6">
            Activa el orden aleatorio para que cada participante reciba las
            preguntas y respuestas en una secuencia diferente. Reduce la copia
            entre alumnos.
          </p>
          <div class="space-y-3">
            <div
              v-for="item in shuffleFeatures"
              :key="item.title"
              class="flex items-start gap-3"
            >
              <div
                class="w-8 h-8 rounded-lg bg-violet-500/10 dark:bg-violet-500/20 flex items-center justify-center shrink-0 mt-0.5"
              >
                <UIcon :name="item.icon" class="text-violet-500" />
              </div>
              <div>
                <div class="text-sm font-medium">{{ item.title }}</div>
                <div class="text-sm text-muted">{{ item.desc }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="relative">
          <UseCasesTeachersShuffleOrderMockup />
        </div>
      </div>
    </UPageSection>

    <!-- Stats -->
    <UPageSection
      headline="En números"
      :description="`${appName} transforma la forma en que evalúas a tus alumnos.`"
    >
      <template #title>
        Resultados que hablan
        <SharedGradientText>por sí solos</SharedGradientText>
      </template>
      <UseCasesUseCaseStats :stats="stats" />
    </UPageSection>

    <!-- How it works -->
    <UPageSection
      headline="Cómo funciona"
      description="Evaluar a tu grupo nunca fue tan sencillo."
    >
      <template #title>
        De la idea al resultado en
        <SharedGradientText>4 pasos</SharedGradientText>
      </template>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
        <div v-for="(step, index) in steps" :key="step.number" class="relative">
          <!-- Arrow connector -->
          <div
            v-if="index < 3"
            class="hidden lg:flex absolute -right-4 top-1/3 z-10 text-violet-500/40"
          >
            <UIcon name="i-lucide-chevron-right" class="text-2xl" />
          </div>

          <div
            class="glass-strong rounded-2xl overflow-hidden card-hover-lift h-full"
          >
            <!-- Step mockup area -->
            <div class="p-5 pb-0">
              <!-- Step 1: Create quiz mockup -->
              <div v-if="step.number === 1" class="glass rounded-xl p-3">
                <div class="flex items-center gap-2 mb-2.5">
                  <div
                    class="w-6 h-6 rounded-lg bg-violet-500/15 flex items-center justify-center"
                  >
                    <UIcon
                      name="i-lucide-pencil-line"
                      class="text-violet-500 text-xs"
                    />
                  </div>
                  <span class="text-[10px] font-medium">Nuevo quiz</span>
                </div>
                <div class="glass rounded-lg p-2 mb-1.5">
                  <div class="text-[9px] text-muted mb-0.5">Pregunta 1</div>
                  <div class="text-[10px] font-medium">
                    ¿Capital de Francia?
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-1">
                  <div
                    class="rounded px-1.5 py-0.5 text-[8px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-center ring-1 ring-emerald-500/20"
                  >
                    París
                  </div>
                  <div
                    class="glass rounded px-1.5 py-0.5 text-[8px] text-center"
                  >
                    Madrid
                  </div>
                </div>
              </div>

              <!-- Step 2: Share code mockup -->
              <div v-else-if="step.number === 2" class="glass rounded-xl p-3">
                <div class="flex items-center gap-2 mb-2.5">
                  <div
                    class="w-6 h-6 rounded-lg bg-violet-500/15 flex items-center justify-center"
                  >
                    <UIcon
                      name="i-lucide-share-2"
                      class="text-violet-500 text-xs"
                    />
                  </div>
                  <span class="text-[10px] font-medium">Compartir sesión</span>
                </div>
                <div class="glass rounded-lg p-2.5 text-center mb-1.5">
                  <div
                    class="text-[8px] text-muted mb-0.5 uppercase tracking-wider"
                  >
                    Código de acceso
                  </div>
                  <div
                    class="text-sm font-bold font-mono tracking-widest text-gradient-primary"
                  >
                    QUIZ-7X3K
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex -space-x-1.5">
                    <div
                      v-for="(letter, i) in ['A', 'L', 'M', 'J']"
                      :key="i"
                      class="w-5 h-5 rounded-full border-2 border-white dark:border-neutral-800 flex items-center justify-center text-[7px] font-bold text-white"
                      :class="[
                        'bg-violet-500',
                        'bg-emerald-500',
                        'bg-amber-500',
                        'bg-rose-400',
                      ][i]"
                    >
                      {{ letter }}
                    </div>
                  </div>
                  <span class="text-[9px] font-medium text-emerald-500"
                    >4 conectados</span
                  >
                </div>
              </div>

              <!-- Step 3: Students respond mockup -->
              <div v-else-if="step.number === 3" class="glass rounded-xl p-3">
                <div class="flex items-center gap-2 mb-2.5">
                  <div
                    class="w-6 h-6 rounded-lg bg-violet-500/15 flex items-center justify-center"
                  >
                    <UIcon
                      name="i-lucide-users"
                      class="text-violet-500 text-xs"
                    />
                  </div>
                  <span class="text-[10px] font-medium">Pregunta 3 de 10</span>
                </div>
                <div class="w-full h-1 rounded-full bg-white/20 dark:bg-slate-700/30 mb-2">
                  <div
                    class="h-1 rounded-full bg-linear-to-r from-violet-500 to-emerald-500"
                    style="width: 30%"
                  />
                </div>
                <div class="glass rounded-lg p-2 mb-1.5">
                  <div class="text-[10px] font-medium">
                    ¿En qué año fue...?
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-1">
                  <div
                    class="rounded py-1 text-center text-[8px] font-medium bg-violet-500 text-white shadow-sm shadow-violet-500/25"
                  >
                    1810
                  </div>
                  <div class="glass rounded py-1 text-center text-[8px]">
                    1821
                  </div>
                </div>
              </div>

              <!-- Step 4: Review results mockup -->
              <div v-else-if="step.number === 4" class="glass rounded-xl p-3">
                <div class="flex items-center gap-2 mb-2.5">
                  <div
                    class="w-6 h-6 rounded-lg bg-violet-500/15 flex items-center justify-center"
                  >
                    <UIcon
                      name="i-lucide-chart-column"
                      class="text-violet-500 text-xs"
                    />
                  </div>
                  <span class="text-[10px] font-medium">Resultados</span>
                </div>
                <div class="flex items-end gap-1.5 h-10 mb-1.5">
                  <div
                    v-for="(h, i) in [60, 85, 45, 92, 70, 88]"
                    :key="i"
                    class="flex-1 rounded-t"
                    :class="
                      h >= 80
                        ? 'bg-emerald-500/60'
                        : h >= 60
                          ? 'bg-amber-500/60'
                          : 'bg-rose-400/60'
                    "
                    :style="{ height: h + '%' }"
                  />
                </div>
                <div class="flex justify-between text-[9px]">
                  <span class="text-muted">6 alumnos</span>
                  <span class="font-bold text-emerald-500">Prom: 73%</span>
                </div>
              </div>
            </div>

            <!-- Step content -->
            <div class="p-5">
              <div
                class="inline-flex items-center justify-center w-7 h-7 rounded-full bg-linear-to-br from-violet-500 to-violet-600 text-white text-xs font-bold mb-3 shadow-md shadow-violet-500/25"
              >
                {{ step.number }}
              </div>
              <h3 class="font-semibold text-base mb-1.5">{{ step.title }}</h3>
              <p class="text-sm text-muted">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </UPageSection>

    <!-- Testimonials -->
    <UPageSection headline="Testimonios">
      <template #title>
        Lo que dicen otros
        <SharedGradientText>profesores</SharedGradientText>
      </template>
      <UseCasesUseCaseTestimonials :testimonials="testimonials" />
    </UPageSection>

    <!-- Pricing -->
    <LandingPricing />

    <!-- CTA -->
    <UseCasesUseCaseCTA
      title="Crea tu primer quiz y evalúa a tu grupo hoy"
      description="Regístrate gratis y comienza a crear evaluaciones interactivas en minutos."
      button-label="Crear cuenta gratis"
    />
  </div>
</template>
