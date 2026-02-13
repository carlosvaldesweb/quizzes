<script setup lang="ts">
const appName = useAppName();

const items = [
  {
    label: `¿Puedo usar ${appName} gratis?`,
    content:
      "Sí, el plan gratuito es permanente y no requiere tarjeta de crédito. Incluye quizzes y sesiones ilimitadas con hasta 10 preguntas por quiz y 20 participantes por sesión.",
  },
  {
    label: "¿Qué incluye la prueba gratuita del Plan Pro?",
    content:
      "La prueba gratuita de 30 días te da acceso completo a todas las funciones del Plan Pro: hasta 50 preguntas por quiz, todos los tipos de preguntas, temas personalizados, modo aleatorio y más. No se te cobrará durante el periodo de prueba.",
  },
  {
    label: "¿Cómo cancelo mi suscripción?",
    content:
      "Puedes cancelar tu suscripción en cualquier momento desde la sección de configuración de tu cuenta. Tu acceso al Plan Pro continuará hasta el final del periodo de facturación actual.",
  },
  {
    label: "¿Qué métodos de pago aceptan?",
    content:
      "Aceptamos tarjetas de crédito y débito (Visa, Mastercard, American Express) procesadas de forma segura a través de Stripe.",
  },
  {
    label: "¿Los participantes necesitan crear una cuenta?",
    content:
      "No. Los participantes solo necesitan el código de acceso de la sesión para unirse. Pueden participar desde cualquier dispositivo con navegador web sin necesidad de registrarse.",
  },
  {
    label: "¿Puedo cambiar de plan en cualquier momento?",
    content:
      "Sí, puedes actualizar al Plan Pro o volver al plan gratuito en cualquier momento. Si actualizas, el cambio se aplica de inmediato. Si bajas de plan, el cambio se aplica al final del periodo de facturación.",
  },
  {
    label: "¿Hay descuento por pago anual?",
    content:
      `Sí, el plan anual tiene un descuento del 20% comparado con el pago mensual. Es la opción más económica si planeas usar ${appName} a largo plazo.`,
  },
  {
    label: "¿Qué pasa con mis datos si cancelo?",
    content:
      "Tus quizzes, sesiones y resultados se conservan por 30 días después de cancelar. Durante ese periodo puedes reactivar tu cuenta y recuperar toda tu información.",
  },
];
</script>

<template>
  <UPageSection
    headline="FAQ"
    description="¿Tienes dudas? Aquí encontrarás las respuestas más comunes."
    class="gradient-mesh-subtle gradient-mesh"
  >
    <template #title>
      Preguntas <SharedGradientText>frecuentes</SharedGradientText>
    </template>

    <UAccordion :items="items" class="max-w-3xl mx-auto" />
  </UPageSection>
</template>
