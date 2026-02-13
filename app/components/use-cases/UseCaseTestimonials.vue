<script setup lang="ts">
defineProps<{
  testimonials: Array<{
    quote: string;
    author: string;
    role: string;
    rating?: number;
  }>;
}>();
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <SharedGlassCard
      v-for="(testimonial, index) in testimonials"
      :key="index"
      class="flex flex-col"
    >
      <!-- Star rating -->
      <div v-if="testimonial.rating" class="flex gap-1 mb-4">
        <UIcon
          v-for="star in testimonial.rating"
          :key="star"
          name="i-lucide-star"
          class="text-amber-500 text-lg"
        />
      </div>

      <!-- Quote icon -->
      <UIcon name="i-lucide-quote" class="text-3xl text-violet-500/20 mb-3" />

      <!-- Quote text -->
      <blockquote class="text-sm sm:text-base font-medium italic mb-4 flex-1">
        "{{ testimonial.quote }}"
      </blockquote>

      <!-- Author -->
      <div
        class="border-t border-white/10 dark:border-slate-700/30 pt-4 mt-auto"
      >
        <div class="font-semibold text-sm">{{ testimonial.author }}</div>
        <div class="text-xs text-muted">{{ testimonial.role }}</div>
      </div>
    </SharedGlassCard>
  </div>
</template>
