<script setup lang="ts">
definePageMeta({ layout: "public" });

const appName = useAppName();

useSeoMeta({
  title: `Para Estudiantes — ${appName}`,
  description:
    "Crea tus propios quizzes y flashcards para estudiar a tu ritmo. Personaliza tu experiencia con temas visuales y mejora tus resultados.",
});

const quizBuilderFeatures = [
  {
    icon: "i-lucide-check-square",
    title: "5 tipos de preguntas",
    desc: "Opción múltiple, V/F, respuesta corta, encuesta y emparejamiento.",
  },
  {
    icon: "i-lucide-text-cursor-input",
    title: "Agrega las que quieras",
    desc: "Sin límite de preguntas con el Plan Pro.",
  },
  {
    icon: "i-lucide-save",
    title: "Guarda y reutiliza",
    desc: "Tus quizzes se guardan para practicar cuando quieras.",
  },
];

const flashcardFeatures = [
  {
    icon: "i-lucide-rotate-3d",
    title: "Voltea para ver la respuesta",
    desc: "Tarjetas interactivas con efecto de volteo visual.",
  },
  {
    icon: "i-lucide-gauge",
    title: "Avanza a tu ritmo",
    desc: "Sin presión de tiempo, estudia a la velocidad que necesites.",
  },
  {
    icon: "i-lucide-book-open",
    title: "Convierte cualquier quiz en flashcards",
    desc: "Tus preguntas se transforman en tarjetas de estudio automáticamente.",
  },
  {
    icon: "i-lucide-repeat",
    title: "Repasa sin límite",
    desc: "Revisa el contenido las veces que quieras hasta dominarlo.",
  },
];

const themesFeatures = [
  {
    icon: "i-lucide-palette",
    title: "Temas prediseñados",
    desc: "Elige entre temas por categorías para darle estilo a tus quizzes.",
  },
  {
    icon: "i-lucide-image-plus",
    title: "Crea los tuyos (Pro)",
    desc: "Sube tu propio logo e imagen de fondo con el Plan Pro.",
  },
  {
    icon: "i-lucide-smile",
    title: "Haz del estudio algo divertido",
    desc: "Un entorno visualmente atractivo hace que estudiar sea más ameno.",
  },
];

const sessionFeatures = [
  {
    icon: "i-lucide-share-2",
    title: "Crea sesiones desde tus quizzes",
    desc: "Convierte cualquier quiz en una sesión para que otros la resuelvan.",
  },
  {
    icon: "i-lucide-key-round",
    title: "Comparte con un código",
    desc: "Tus compañeros entran con un código de acceso, sin necesidad de cuenta.",
  },
  {
    icon: "i-lucide-users",
    title: "Estudien juntos",
    desc: "Todos practican el mismo quiz y al finalizar ven sus resultados.",
  },
  {
    icon: "i-lucide-chart-bar",
    title: "Resultados al terminar",
    desc: "Al completar la práctica, cada participante ve su puntaje y respuestas.",
  },
];

const steps = [
  {
    number: 1,
    icon: "i-lucide-user-plus",
    title: "Crea tu cuenta gratis",
    description:
      "Regístrate en segundos y accede a todas las herramientas para crear tus propios quizzes y flashcards.",
  },
  {
    number: 2,
    icon: "i-lucide-pencil-line",
    title: "Crea tu primer quiz",
    description:
      "Agrega preguntas de distintos tipos, personaliza con un tema visual y guárdalo para practicar cuando quieras.",
  },
  {
    number: 3,
    icon: "i-lucide-brain",
    title: "Estudia y mejora",
    description:
      "Practica en modo quiz o con flashcards. Recibe retroalimentación inmediata y repasa hasta dominar cada tema.",
  },
];

const testimonials = [
  {
    quote:
      "Crear mis propias flashcards me ayudó mucho a preparar mi examen final. El modo práctica con retroalimentación inmediata me dio la confianza que necesitaba.",
    author: "Estudiante de preparatoria",
    role: "Guadalajara",
    rating: 5,
  },
  {
    quote:
      "Me encanta poder crear mis quizzes con los temas que estoy estudiando. Los temas visuales hacen que estudiar sea mucho más divertido.",
    author: "Estudiante de secundaria",
    role: "Ciudad de México",
    rating: 5,
  },
  {
    quote:
      `Uso ${appName} para crear evaluaciones de cada materia. Practicar con mis propios quizzes es mucho más efectivo que solo releer mis apuntes.`,
    author: "Estudiante universitario",
    role: "Monterrey",
    rating: 5,
  },
];
</script>

<template>
  <div>
    <!-- Hero -->
    <UseCasesUseCaseHero
      icon="i-lucide-book-open"
      headline="Para Estudiantes"
      description="Crea tu cuenta, diseña tus propios quizzes y flashcards, y estudia a tu ritmo con retroalimentación inmediata. Personaliza tu experiencia con temas visuales increíbles."
    >
      <template #title>
        Crea tus quizzes, estudia a tu ritmo y
        <SharedGradientText>mejora</SharedGradientText>
        tus resultados
      </template>
      <UseCasesStudentsHeroMockup />
    </UseCasesUseCaseHero>

    <!-- Showcase: Quiz Builder -->
    <UPageSection headline="Crea tus quizzes">
      <template #title>
        Diseña evaluaciones a tu
        <SharedGradientText>medida</SharedGradientText>
      </template>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div>
          <p class="text-lg text-muted mb-6">
            Elige entre 5 tipos de preguntas, personaliza el tiempo por pregunta
            y organiza tus temas de estudio. Tus quizzes, a tu manera.
          </p>
          <div class="space-y-3">
            <div
              v-for="item in quizBuilderFeatures"
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
          <UseCasesStudentsQuizBuilderMockup />
        </div>
      </div>
    </UPageSection>

    <!-- Showcase: Flashcards -->
    <UPageSection
      headline="Estudia con flashcards"
      class="gradient-mesh-subtle gradient-mesh"
    >
      <template #title>
        Memoriza con tarjetas
        <SharedGradientText>interactivas</SharedGradientText>
      </template>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div class="lg:order-last">
          <p class="text-lg text-muted mb-6">
            Convierte tus quizzes en tarjetas de estudio con un clic. Voltea
            para ver la respuesta y avanza a tu propio ritmo sin presión.
          </p>
          <div class="space-y-3">
            <div
              v-for="item in flashcardFeatures"
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
          <UseCasesStudentsFlashcardShowcaseMockup />
        </div>
      </div>
    </UPageSection>

    <!-- Showcase: Themes -->
    <UPageSection headline="Personaliza tu experiencia">
      <template #title>
        Temas visuales para estudiar con
        <SharedGradientText>estilo</SharedGradientText>
      </template>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div>
          <p class="text-lg text-muted mb-6">
            Elige entre temas prediseñados o crea los tuyos con el Plan Pro. Haz
            que cada sesión de estudio tenga tu estilo personal.
          </p>
          <div class="space-y-3">
            <div
              v-for="item in themesFeatures"
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
          <UseCasesStudentsThemesMockup />
        </div>
      </div>
    </UPageSection>

    <!-- Showcase: Sessions -->
    <UPageSection
      headline="Comparte con tus compañeros"
      class="gradient-mesh-subtle gradient-mesh"
    >
      <template #title>
        Crea sesiones y estudien
        <SharedGradientText>juntos</SharedGradientText>
      </template>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div class="lg:order-last">
          <p class="text-lg text-muted mb-6">
            Convierte tus quizzes en sesiones y comparte un código de acceso con
            tus compañeros. Todos practican y al finalizar ven sus resultados.
          </p>
          <div class="space-y-3">
            <div
              v-for="item in sessionFeatures"
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
          <UseCasesStudentsSessionShareMockup />
        </div>
      </div>
    </UPageSection>

    <!-- How it works -->
    <UPageSection headline="Cómo funciona">
      <template #title>
        Empieza a estudiar en
        <SharedGradientText>3 pasos</SharedGradientText>
      </template>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4">
        <div v-for="(step, index) in steps" :key="step.number" class="relative">
          <!-- Arrow connector -->
          <div
            v-if="index < 2"
            class="hidden lg:flex absolute -right-4 top-1/3 z-10 text-violet-500/40"
          >
            <UIcon name="i-lucide-chevron-right" class="text-2xl" />
          </div>

          <div
            class="glass-strong rounded-2xl overflow-hidden card-hover-lift h-full"
          >
            <!-- Step mockup area -->
            <div class="p-5 pb-0">
              <!-- Step 1: Signup mockup -->
              <div v-if="step.number === 1" class="glass rounded-xl p-3">
                <div class="flex items-center gap-2 mb-2.5">
                  <div
                    class="w-6 h-6 rounded-lg bg-violet-500/15 flex items-center justify-center"
                  >
                    <UIcon
                      name="i-lucide-user-plus"
                      class="text-violet-500 text-xs"
                    />
                  </div>
                  <span class="text-[10px] font-medium">Crear cuenta</span>
                </div>
                <div class="space-y-1.5">
                  <div
                    class="glass rounded-lg px-2.5 py-1.5 text-[9px] text-muted"
                  >
                    nombre@correo.com
                  </div>
                  <div
                    class="glass rounded-lg px-2.5 py-1.5 text-[9px] text-muted"
                  >
                    ••••••••
                  </div>
                  <div
                    class="rounded-lg py-1.5 text-[9px] font-medium text-center text-white bg-violet-500 shadow-md shadow-violet-500/25"
                  >
                    Crear cuenta gratis
                  </div>
                </div>
              </div>

              <!-- Step 2: Create quiz mockup -->
              <div v-else-if="step.number === 2" class="glass rounded-xl p-3">
                <div class="flex items-center gap-2 mb-2.5">
                  <div
                    class="w-6 h-6 rounded-lg bg-violet-500/15 flex items-center justify-center"
                  >
                    <UIcon
                      name="i-lucide-pencil-line"
                      class="text-violet-500 text-xs"
                    />
                  </div>
                  <span class="text-[10px] font-medium">Mi primer quiz</span>
                </div>
                <div class="glass rounded-lg p-2 mb-1.5">
                  <div class="text-[9px] text-muted mb-0.5">Pregunta 1</div>
                  <div class="text-[10px] font-medium">
                    ¿Capital de Francia?
                  </div>
                </div>
                <div class="flex gap-1">
                  <div
                    class="flex-1 rounded px-1.5 py-1 text-[8px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-center"
                  >
                    París
                  </div>
                  <div
                    class="flex-1 glass rounded px-1.5 py-1 text-[8px] text-center"
                  >
                    Madrid
                  </div>
                </div>
              </div>

              <!-- Step 3: Study and improve mockup -->
              <div v-else-if="step.number === 3" class="glass rounded-xl p-3">
                <div class="flex items-center gap-2 mb-2.5">
                  <div
                    class="w-6 h-6 rounded-lg bg-violet-500/15 flex items-center justify-center"
                  >
                    <UIcon
                      name="i-lucide-brain"
                      class="text-violet-500 text-xs"
                    />
                  </div>
                  <span class="text-[10px] font-medium">Resultados</span>
                </div>
                <div class="flex items-end gap-1.5 h-10 mb-1.5">
                  <div
                    v-for="(h, i) in [55, 70, 80, 65, 90]"
                    :key="i"
                    class="flex-1 rounded-t"
                    :class="
                      h >= 80
                        ? 'bg-emerald-500/60'
                        : h >= 60
                          ? 'bg-violet-500/60'
                          : 'bg-amber-500/60'
                    "
                    :style="{ height: h + '%' }"
                  />
                </div>
                <div class="flex justify-between text-[8px]">
                  <span class="text-muted">5 intentos</span>
                  <span class="font-bold text-emerald-500">Mejorando</span>
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
        <SharedGradientText>estudiantes</SharedGradientText>
      </template>
      <UseCasesUseCaseTestimonials :testimonials="testimonials" />
    </UPageSection>

    <!-- Pricing -->
    <LandingPricing />

    <!-- CTA -->
    <UseCasesUseCaseCTA
      title="Crea tu cuenta y empieza a estudiar hoy"
      description="Regístrate gratis y crea tus propios quizzes y flashcards. Personaliza tu experiencia y mejora tus resultados."
      button-label="Crear cuenta gratis"
    />
  </div>
</template>
