<script setup lang="ts">
defineProps<{
  stats: Array<{
    value: string;
    label: string;
    icon: string;
  }>;
}>();
</script>

<template>
  <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
    <div
      v-for="stat in stats"
      :key="stat.label"
      class="glass-strong rounded-2xl p-6 text-center card-hover-lift group"
    >
      <div
        class="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center text-white mb-4 shadow-lg shadow-violet-500/25"
      >
        <UIcon :name="stat.icon" class="text-2xl" />
      </div>
      <div
        class="text-3xl sm:text-4xl font-extrabold text-gradient-primary mb-1"
      >
        {{ stat.value }}
      </div>
      <div class="text-sm text-muted">{{ stat.label }}</div>
    </div>
  </div>
</template>
