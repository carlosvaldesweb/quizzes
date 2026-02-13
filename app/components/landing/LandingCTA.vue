<script setup lang="ts">
const { signupUrl } = useAppUrls();
</script>

<template>
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
        label: 'Ver precios',
        to: '/pricing',
        size: 'xl',
        variant: 'outline',
        color: 'neutral',
      },
    ]"
  >
    <template #title>
      ¿Listo para crear tu
      <SharedGradientText>primer quiz</SharedGradientText>?
    </template>
  </UPageCTA>
</template>
