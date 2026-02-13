<script setup lang="ts">
definePageMeta({ layout: "public" });

const appName = useAppName();

useSeoMeta({
  title: `Precios — ${appName}`,
  description:
    "Elige tu plan. Comienza gratis o desbloquea todo con el Plan Pro. Prueba gratuita de 30 días.",
});

const {
  monthlyPrice,
  annualPrice,
  status,
  fetchProducts,
  formatPrice,
  checkout,
} = useSubscription();

const { signupUrl } = useAppUrls();

const billingPeriod = ref("monthly");

onMounted(() => {
  fetchProducts();
});

async function handleCheckout(priceId: string) {
  await checkout(priceId);
}
</script>

<template>
  <UPageHero
    description="Comienza gratis y actualiza cuando lo necesites. Sin compromisos, cancela en cualquier momento."
    class="gradient-mesh relative"
    :ui="{
      container:
        'flex flex-col lg:grid py-24 sm:py-32 lg:py-40 gap-4 sm:gap-y-4',
    }"
  >
    <template #headline>
      <UBadge
        label="Planes y precios"
        variant="subtle"
        color="primary"
        size="lg"
      />
    </template>

    <template #title>
      Elige tu <SharedGradientText>plan</SharedGradientText>
    </template>

    <div class="mb-12">
      <PricingToggle v-model="billingPeriod" />
    </div>

    <!-- Pricing cards -->
    <PricingCards
      :billing-period="billingPeriod"
      :monthly-price="monthlyPrice"
      :annual-price="annualPrice"
      :loading="status === 'pending'"
      :format-price="formatPrice"
      @checkout="handleCheckout"
    />
  </UPageHero>

  <PricingFAQ />

  <UPageCTA
    description="Regístrate gratis y comienza a evaluar en minutos. Sin tarjeta de crédito."
    variant="subtle"
    :links="[
      {
        label: 'Crear cuenta gratis',
        to: signupUrl,
        size: 'xl',
        icon: 'i-lucide-rocket',
        color: 'primary',
      },
      {
        label: 'Volver al inicio',
        to: '/',
        size: 'xl',
        variant: 'outline',
        color: 'neutral',
      },
    ]"
  >
    <template #title>
      ¿Listo para <SharedGradientText>empezar</SharedGradientText>?
    </template>
  </UPageCTA>
</template>
