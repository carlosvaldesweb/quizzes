<script setup lang="ts">
definePageMeta({ layout: "public" });

const appName = useAppName();

useSeoMeta({
  title: `${appName} — Crea, comparte y evalúa quizzes`,
  description:
    "Plataforma web para crear cuestionarios interactivos, compartirlos con un código de acceso y obtener resultados al instante.",
});
</script>

<template>
  <div>
    <LandingHero />
    <LandingQuestionTypes />
    <LandingSessions />
    <LandingPractice />
    <LandingFlashcards />
    <LandingAudiences />
    <LandingHowItWorks />
    <LandingPricing />
    <LandingCTA />
  </div>
</template>
