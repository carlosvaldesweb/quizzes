<script setup lang="ts">
definePageMeta({ layout: "public" });

const appName = useAppName();

useSeoMeta({
  title: `Para Empresas — ${appName}`,
  description:
    "Evalúa candidatos, mide conocimientos post-capacitación, recopila feedback con encuestas y certifica competencias. Resultados detallados por participante al instante.",
});

const stats = [
  {
    value: "5",
    label: "Tipos de preguntas disponibles",
    icon: "i-lucide-file-plus-2",
  },
  {
    value: "50+",
    label: "Participantes por sesión (Pro)",
    icon: "i-lucide-users",
  },
  {
    value: "0",
    label: "Cuentas necesarias para participantes",
    icon: "i-lucide-user-x",
  },
  {
    value: "30",
    label: "Días de prueba gratuita",
    icon: "i-lucide-calendar",
  },
];

const problems = [
  {
    icon: "i-lucide-users-round",
    title: "Capacitaciones sin seguimiento",
    description:
      "Inviertes tiempo y recursos en capacitar a tu equipo pero no tienes forma de medir si realmente comprendieron el contenido.",
  },
  {
    icon: "i-lucide-gauge",
    title: "Procesos de evaluación lentos",
    description:
      "Evaluar candidatos o medir conocimientos internos con métodos tradicionales es lento, manual y difícil de escalar.",
  },
  {
    icon: "i-lucide-clipboard-list",
    title: "Sin datos para tomar decisiones",
    description:
      "Encuestas en papel, formularios genéricos y evaluaciones sin detalle no te dan la información que necesitas para actuar.",
  },
];

const resultsFeatures = [
  {
    icon: "i-lucide-chart-bar",
    title: "Puntaje y porcentaje",
    desc: "Puntaje total, porcentaje de aciertos y detalle pregunta por pregunta.",
  },
  {
    icon: "i-lucide-clock",
    title: "Tiempo por respuesta",
    desc: "Identifica qué preguntas fueron más difíciles por el tiempo invertido en cada una.",
  },
  {
    icon: "i-lucide-activity",
    title: "Estado en tiempo real",
    desc: "Monitorea quién está en progreso, quién finalizó y quién abandonó la sesión.",
  },
  {
    icon: "i-lucide-search",
    title: "Identifica brechas",
    desc: "Descubre qué temas necesitan más refuerzo en tu equipo.",
  },
];

const accessFeatures = [
  {
    icon: "i-lucide-key-round",
    title: "Código de acceso",
    desc: "Comparte un código y tus participantes entran al instante desde cualquier dispositivo.",
  },
  {
    icon: "i-lucide-user-x",
    title: "Sin registro necesario",
    desc: "Los participantes no necesitan crear cuenta ni descargar nada.",
  },
  {
    icon: "i-lucide-calendar-clock",
    title: "Programa sesiones",
    desc: "Agenda evaluaciones para una fecha y hora específica. Tus participantes acceden cuando la sesión esté disponible.",
  },
  {
    icon: "i-lucide-settings-2",
    title: "Controla cada sesión",
    desc: "Configura intentos, orden aleatorio, visibilidad de respuestas y puntajes.",
  },
];

const brandingFeatures = [
  {
    icon: "i-lucide-palette",
    title: "Temas personalizados",
    desc: "Agrega el logo de tu empresa y una imagen de fondo para dar identidad a tus evaluaciones.",
    pro: true,
  },
  {
    icon: "i-lucide-message-circle",
    title: "Preguntas tipo encuesta",
    desc: "Recopila opiniones y feedback de tu equipo con preguntas sin respuesta correcta.",
    pro: true,
  },
];

const analyticsFeatures = [
  {
    icon: "i-lucide-chart-line",
    title: "Métricas generales",
    desc: "Puntaje promedio, tiempos, distribución de resultados y estadísticas clave de toda la sesión.",
  },
  {
    icon: "i-lucide-list-checks",
    title: "Análisis por pregunta",
    desc: "Ve cuántos acertaron, fallaron o no respondieron cada pregunta. Identifica los temas más difíciles.",
  },
  {
    icon: "i-lucide-users-round",
    title: "Estado de participantes",
    desc: "Monitorea cuántos se unieron, están en progreso o completaron la evaluación en tiempo real.",
  },
];

const steps = [
  {
    number: 1,
    icon: "i-lucide-pencil-line",
    title: "Crea la evaluación",
    description:
      "Diseña quizzes con preguntas técnicas, de conocimiento, encuestas o emparejamiento para tu equipo o candidatos.",
  },
  {
    number: 2,
    icon: "i-lucide-settings-2",
    title: "Configura la sesión",
    description:
      "Define intentos, orden aleatorio, visibilidad de respuestas y programa la fecha y hora de disponibilidad.",
  },
  {
    number: 3,
    icon: "i-lucide-share-2",
    title: "Comparte el código",
    description:
      "Envía el código de acceso a tu equipo o candidatos. Sin registros ni configuraciones adicionales.",
  },
  {
    number: 4,
    icon: "i-lucide-chart-column",
    title: "Revisa los resultados",
    description:
      "Consulta puntajes, respuestas, tiempos y estado de cada participante al instante.",
  },
];

const testimonials = [
  {
    quote:
      `Usamos ${appName} para evaluar a los asistentes después de cada capacitación. Los resultados detallados nos permiten identificar exactamente qué temas necesitan refuerzo.`,
    author: "Coordinadora de Capacitación",
    role: "Empresa de tecnología",
    rating: 5,
  },
  {
    quote:
      "El proceso de selección mejoró mucho. Podemos evaluar conocimientos técnicos de 30 candidatos en una sola sesión, sin que necesiten crear cuenta.",
    author: "Gerente de RH",
    role: "Consultora financiera",
    rating: 5,
  },
  {
    quote:
      "Usamos las encuestas después de cada proyecto para recopilar opiniones del equipo. Programamos la sesión, compartimos el código y en minutos tenemos los resultados organizados.",
    author: "Líder de Equipo",
    role: "Empresa de logística",
    rating: 5,
  },
];
</script>

<template>
  <div>
    <!-- Hero -->
    <UseCasesUseCaseHero
      icon="i-lucide-building-2"
      headline="Para Empresas"
      description="Evalúa candidatos, mide conocimientos post-capacitación, recopila opiniones de tu equipo y certifica competencias periódicamente. Comparte un código, tus participantes responden sin registrarse y tú obtienes resultados detallados al instante."
    >
      <template #title>
        Evalúa a tu equipo y toma decisiones con
        <SharedGradientText>datos</SharedGradientText>
      </template>
      <UseCasesBusinessHeroMockup />
    </UseCasesUseCaseHero>

    <!-- Pain points -->
    <UPageSection
      headline="El problema"
      :description="`Si tu organización enfrenta estos desafíos, ${appName} puede ayudarte.`"
    >
      <template #title>
        Los métodos tradicionales no
        <SharedGradientText>escalan</SharedGradientText>
      </template>
      <UseCasesUseCaseFeatures :features="problems" />
    </UPageSection>

    <!-- Showcase: Team Results (normal: text left, mockup right) -->
    <UPageSection headline="Resultados por participante">
      <template #title>
        Mide el conocimiento de tu
        <SharedGradientText>equipo</SharedGradientText>
      </template>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div>
          <p class="text-lg text-muted mb-6">
            Crea evaluaciones con 5 tipos de preguntas y obtén resultados
            detallados por cada participante: puntaje, porcentaje, tiempo por
            respuesta y estado en tiempo real. Identifica brechas de
            conocimiento al instante.
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
        <div class="relative hidden lg:block">
          <UseCasesEnterpriseTeamResultsMockup />
        </div>
      </div>
    </UPageSection>

    <!-- Showcase: Advanced Analytics (reversed: mockup left, text right + gradient mesh) -->
    <UPageSection
      headline="Analíticas avanzadas"
      class="gradient-mesh-subtle gradient-mesh"
    >
      <template #title>
        Toma decisiones basadas en
        <SharedGradientText>datos</SharedGradientText>
      </template>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div class="lg:order-last">
          <p class="text-lg text-muted mb-6">
            No solo veas quién pasó o reprobó. Obtén métricas detalladas por
            pregunta, identifica patrones de respuesta, analiza tiempos promedio
            y descubre exactamente dónde tu equipo necesita más capacitación.
            Todo en tiempo real.
          </p>
          <div class="space-y-3">
            <div
              v-for="item in analyticsFeatures"
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
        <div class="relative hidden lg:block lg:order-first">
          <UseCasesEnterpriseGeneralResultsMockup />
        </div>
      </div>
    </UPageSection>

    <!-- Showcase: Zero Friction (reversed: mockup left, text right + gradient mesh) -->
    <UPageSection
      headline="Cero fricción"
      class="gradient-mesh-subtle gradient-mesh"
    >
      <template #title>
        Comparte un código y
        <SharedGradientText>listo</SharedGradientText>
      </template>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div class="lg:order-last">
          <p class="text-lg text-muted mb-6">
            Tus participantes no necesitan crear cuenta ni descargar nada.
            Comparte un código de acceso, ellos entran desde cualquier
            dispositivo con navegador y comienzan a responder.
          </p>
          <div class="space-y-3">
            <div
              v-for="item in accessFeatures"
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
        <div class="relative hidden lg:block lg:order-first">
          <UseCasesEnterpriseSessionAccessMockup />
        </div>
      </div>
    </UPageSection>

    <!-- Showcase: Branding & Tools (normal: text left, mockup right) -->
    <UPageSection headline="Tu marca, tu encuesta">
      <template #title>
        Dale identidad a tus
        <SharedGradientText>evaluaciones</SharedGradientText>
      </template>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div>
          <p class="text-lg text-muted mb-6">
            Agrega el logo de tu organización y personaliza el fondo de cada
            quiz. Usa preguntas tipo encuesta para recopilar opiniones de tu
            equipo, y los modos práctica y flashcards para reforzar el
            aprendizaje.
          </p>
          <div class="space-y-3">
            <div
              v-for="item in brandingFeatures"
              :key="item.title"
              class="flex items-start gap-3"
            >
              <div
                class="w-8 h-8 rounded-lg bg-violet-500/10 dark:bg-violet-500/20 flex items-center justify-center shrink-0 mt-0.5"
              >
                <UIcon :name="item.icon" class="text-violet-500" />
              </div>
              <div>
                <div class="text-sm font-medium">
                  {{ item.title }}
                  <span
                    v-if="item.pro"
                    class="inline-flex items-center gap-0.5 bg-violet-500/15 text-violet-600 dark:text-violet-400 rounded-full px-2 py-0.5 text-[9px] font-semibold ml-1.5"
                  >
                    <UIcon name="i-lucide-sparkles" class="text-[9px]" />
                    Pro
                  </span>
                </div>
                <div class="text-sm text-muted">{{ item.desc }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="relative hidden lg:block">
          <UseCasesEnterpriseBrandingSurveyMockup />
        </div>
      </div>
    </UPageSection>

    <!-- Stats -->
    <UPageSection
      headline="En números"
      :description="`${appName} optimiza la forma en que evalúas y capacitas.`"
    >
      <template #title>
        Impacto real en tu
        <SharedGradientText>organización</SharedGradientText>
      </template>
      <UseCasesUseCaseStats :stats="stats" />
    </UPageSection>

    <!-- How it works -->
    <UPageSection
      headline="Cómo funciona"
      description="Desde la creación hasta los resultados, todo en minutos."
    >
      <template #title>
        Evalúa a tu equipo en
        <SharedGradientText>4 pasos</SharedGradientText>
      </template>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4"
      >
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
              <!-- Step 1: Create evaluation mockup -->
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
                  <span class="text-[10px] font-medium">Nueva evaluación</span>
                </div>
                <div class="glass rounded-lg p-2 mb-1.5">
                  <div class="text-[9px] text-muted mb-0.5">Pregunta 1</div>
                  <div class="text-[10px] font-medium">
                    ¿Qué protocolo de seguridad...?
                  </div>
                </div>
                <div class="flex gap-1">
                  <div
                    class="flex-1 rounded px-1.5 py-0.5 text-[8px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-center ring-1 ring-emerald-500/20"
                  >
                    HTTPS
                  </div>
                  <div
                    class="flex-1 glass rounded px-1.5 py-0.5 text-[8px] text-center"
                  >
                    FTP
                  </div>
                </div>
              </div>

              <!-- Step 2: Configure session mockup -->
              <div v-else-if="step.number === 2" class="glass rounded-xl p-3">
                <div class="flex items-center gap-2 mb-2.5">
                  <div
                    class="w-6 h-6 rounded-lg bg-violet-500/15 flex items-center justify-center"
                  >
                    <UIcon
                      name="i-lucide-settings-2"
                      class="text-violet-500 text-xs"
                    />
                  </div>
                  <span class="text-[10px] font-medium">Configurar sesión</span>
                </div>
                <div class="grid grid-cols-2 gap-1.5">
                  <div class="glass rounded-lg p-1.5">
                    <div class="text-[8px] text-muted">Intentos</div>
                    <div class="text-[10px] font-semibold">1</div>
                  </div>
                  <div class="glass rounded-lg p-1.5">
                    <div class="text-[8px] text-muted">Aleatorio</div>
                    <div class="text-[10px] font-semibold text-emerald-500">
                      Sí
                    </div>
                  </div>
                  <div class="glass rounded-lg p-1.5">
                    <div class="text-[8px] text-muted">Respuestas</div>
                    <div class="text-[10px] font-semibold">Ocultas</div>
                  </div>
                  <div class="glass rounded-lg p-1.5">
                    <div class="text-[8px] text-muted">Disponible</div>
                    <div class="text-[10px] font-semibold">Lun 9:00</div>
                  </div>
                </div>
              </div>

              <!-- Step 3: Share code mockup -->
              <div v-else-if="step.number === 3" class="glass rounded-xl p-3">
                <div class="flex items-center gap-2 mb-2.5">
                  <div
                    class="w-6 h-6 rounded-lg bg-violet-500/15 flex items-center justify-center"
                  >
                    <UIcon
                      name="i-lucide-share-2"
                      class="text-violet-500 text-xs"
                    />
                  </div>
                  <span class="text-[10px] font-medium">Compartir</span>
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
                    EVAL-4R9M
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex -space-x-1.5">
                    <div
                      v-for="(letter, i) in ['S', 'D', 'P', 'R']"
                      :key="i"
                      class="w-5 h-5 rounded-full border-2 border-white dark:border-neutral-800 flex items-center justify-center text-[7px] font-bold text-white"
                      :class="
                        [
                          'bg-violet-500',
                          'bg-emerald-500',
                          'bg-amber-500',
                          'bg-rose-400',
                        ][i]
                      "
                    >
                      {{ letter }}
                    </div>
                  </div>
                  <span class="text-[9px] font-medium text-emerald-500"
                    >12 conectados</span
                  >
                </div>
              </div>

              <!-- Step 4: Analyze results mockup -->
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
                <div class="grid grid-cols-3 gap-1 mb-1.5">
                  <div class="glass rounded-lg p-1 text-center">
                    <div class="text-[10px] font-bold text-gradient-primary">
                      24
                    </div>
                    <div class="text-[7px] text-muted">Evaluados</div>
                  </div>
                  <div class="glass rounded-lg p-1 text-center">
                    <div class="text-[10px] font-bold text-gradient-primary">
                      87%
                    </div>
                    <div class="text-[7px] text-muted">Aprobados</div>
                  </div>
                  <div class="glass rounded-lg p-1 text-center">
                    <div class="text-[10px] font-bold text-gradient-primary">
                      4.2
                    </div>
                    <div class="text-[7px] text-muted">Min prom</div>
                  </div>
                </div>
                <div
                  class="w-full h-1.5 rounded-full bg-white/20 dark:bg-slate-700/30"
                >
                  <div
                    class="h-1.5 rounded-full bg-linear-to-r from-violet-500 to-emerald-500"
                    style="width: 87%"
                  />
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
        Lo que dicen nuestros
        <SharedGradientText>clientes</SharedGradientText>
      </template>
      <UseCasesUseCaseTestimonials :testimonials="testimonials" />
    </UPageSection>

    <!-- Pricing -->
    <LandingPricing />

    <!-- CTA -->
    <UseCasesUseCaseCTA
      title="Evalúa a tu equipo de forma profesional"
      description="Prueba gratis durante 30 días. Crea evaluaciones, programa sesiones, personaliza con tu marca y obtén resultados al instante."
      button-label="Prueba gratis 30 días"
    />
  </div>
</template>
