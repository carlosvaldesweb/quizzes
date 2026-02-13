<script setup lang="ts">
import type { SubscriptionPrice } from "~/types/subscription";

const { signupUrl } = useAppUrls();

const props = defineProps<{
  billingPeriod: string;
  monthlyPrice?: SubscriptionPrice;
  annualPrice?: SubscriptionPrice;
  loading: boolean;
  formatPrice: (amount: number, currency: string) => string;
  ctaUrl?: string;
}>();

const emit = defineEmits<{
  checkout: [priceId: string];
}>();

const currentProPrice = computed(() =>
  props.billingPeriod === "monthly" ? props.monthlyPrice : props.annualPrice,
);

const displayPrice = computed(() => {
  if (!currentProPrice.value) return "$9.99";
  return props.formatPrice(
    currentProPrice.value.unit_amount,
    currentProPrice.value.currency,
  );
});

const billingCycleLabel = computed(() =>
  props.billingPeriod === "monthly" ? "/mes" : "/año",
);

const freeFeatures = [
  "Quizzes y sesiones ilimitadas",
  "Hasta 10 preguntas por quiz",
  "Hasta 4 opciones de respuesta",
  "Hasta 20 participantes por sesión",
  "Opción múltiple y Verdadero/Falso",
  "Temas prediseñados",
];

const proFeatures = [
  "Todo lo del plan gratuito",
  "Hasta 50 preguntas por quiz",
  "Hasta 6 opciones de respuesta",
  "Hasta 50 participantes por sesión",
  "Todos los tipos de preguntas",
  "Múltiples respuestas correctas",
  "Temas personalizados con logo y fondo",
  "Modo aleatorio en sesiones",
  "Prueba gratuita de 30 días",
];

function handleCheckout() {
  if (currentProPrice.value) {
    emit("checkout", currentProPrice.value.id);
  }
}
</script>

<template>
  <UPricingPlans>
    <UPricingPlan
      title="Gratuito"
      description="Para empezar a crear quizzes sin costo"
      price="$0"
      billing-cycle="/siempre"
      :features="freeFeatures"
      :button="{
        label: 'Empieza gratis',
        to: ctaUrl ?? signupUrl,
        variant: 'outline',
        color: 'neutral',
      }"
    />

    <UPricingPlan
      title="Pro"
      description="Para profesionales que necesitan más"
      :price="loading ? '...' : displayPrice"
      :billing-cycle="billingCycleLabel"
      :badge="{ label: 'Popular', color: 'secondary' as const }"
      highlight
      scale
      :features="proFeatures"
      :button="
        ctaUrl
          ? {
              label: 'Prueba gratis 30 días',
              icon: 'i-lucide-sparkles',
              to: ctaUrl,
            }
          : {
              label: 'Comenzar prueba gratuita',
              icon: 'i-lucide-sparkles',
              onClick: handleCheckout,
              loading: loading,
            }
      "
      tagline="30 días de prueba gratuita"
    />
  </UPricingPlans>
</template>
