<script setup lang="ts">
const props = defineProps<{
  steps: Array<{
    number: number;
    icon: string;
    title: string;
    description: string;
  }>;
}>();

const gridCols = computed(() =>
  props.steps.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3",
);
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6" :class="gridCols">
    <div
      v-for="step in steps"
      :key="step.number"
      class="relative glass rounded-2xl p-6 card-hover-lift group"
    >
      <!-- Step number -->
      <div
        class="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center text-white font-bold text-sm mb-4 shadow-lg shadow-violet-500/25"
      >
        {{ step.number }}
      </div>

      <!-- Icon -->
      <div
        class="w-12 h-12 rounded-xl bg-violet-500/10 dark:bg-violet-500/20 flex items-center justify-center mb-4 group-hover:bg-violet-500/20 dark:group-hover:bg-violet-500/30 transition-colors"
      >
        <UIcon :name="step.icon" class="text-violet-500 text-2xl" />
      </div>

      <!-- Content -->
      <h3 class="font-semibold text-lg mb-2">{{ step.title }}</h3>
      <p class="text-sm text-muted">{{ step.description }}</p>

      <!-- Connector line -->
      <div
        v-if="step.number < steps.length"
        class="hidden lg:block absolute top-10 -right-3 w-6 h-0.5 bg-gradient-to-r from-violet-500/50 to-transparent"
        :class="{
          'lg:hidden': steps.length === 3 && step.number % 3 === 0,
          'lg:!hidden': steps.length === 4 && step.number % 4 === 0,
        }"
      />
    </div>
  </div>
</template>
