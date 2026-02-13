<script setup lang="ts">
defineProps<{
  features: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
}>();
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div
      v-for="feature in features"
      :key="feature.title"
      class="glass-strong rounded-2xl p-6 card-hover-lift group"
    >
      <div
        class="w-12 h-12 rounded-xl bg-violet-500/10 dark:bg-violet-500/20 flex items-center justify-center mb-4 group-hover:bg-violet-500/20 dark:group-hover:bg-violet-500/30 transition-colors"
      >
        <UIcon :name="feature.icon" class="text-violet-500 text-2xl" />
      </div>
      <h3 class="font-semibold text-lg mb-2">{{ feature.title }}</h3>
      <p class="text-sm text-muted leading-relaxed">
        {{ feature.description }}
      </p>
    </div>
  </div>
</template>
