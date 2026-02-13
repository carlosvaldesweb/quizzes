<script setup lang="ts">
const { monthlyPrice, status, fetchProducts, formatPrice } = useSubscription();
const { signupUrl } = useAppUrls();

onMounted(() => {
  fetchProducts();
});
</script>

<template>
  <UPageSection
    headline="Planes"
    description="Sin tarjeta de crédito para empezar. Actualiza al Plan Pro cuando necesites más funcionalidades."
  >
    <template #title>
      Comienza gratis, crece cuando
      <SharedGradientText>lo necesites</SharedGradientText>
    </template>

    <PricingCards
      billing-period="monthly"
      :monthly-price="monthlyPrice"
      :loading="status === 'pending'"
      :format-price="formatPrice"
      :cta-url="signupUrl"
    />

    <div class="text-center mt-8">
      <UButton
        label="Ver todos los detalles"
        to="/pricing"
        variant="link"
        color="primary"
        trailing-icon="i-lucide-arrow-right"
      />
    </div>
  </UPageSection>
</template>
