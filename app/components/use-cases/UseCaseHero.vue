<script setup lang="ts">
defineProps<{
  icon: string;
  headline: string;
  title?: string;
  description: string;
}>();

const { signupUrl } = useAppUrls();
</script>

<template>
  <UPageHero
    orientation="horizontal"
    class="gradient-mesh relative"
    :links="[
      {
        label: 'Empieza gratis',
        to: signupUrl,
        icon: 'i-lucide-rocket',
        size: 'xl',
        color: 'primary',
      },
    ]"
  >
    <template #headline>
      <UBadge :label="headline" variant="subtle" color="primary" size="lg">
        <template #leading>
          <UIcon :name="icon" />
        </template>
      </UBadge>
    </template>

    <template #title>
      <slot name="title">{{ title }}</slot>
    </template>

    <template #description>
      {{ description }}
    </template>

    <!-- Decorative side -->
    <div class="relative hidden lg:block">
      <slot>
        <div class="flex items-center justify-center">
          <div
            class="w-32 h-32 rounded-3xl bg-gradient-to-br from-violet-500/20 to-amber-500/20 flex items-center justify-center backdrop-blur-sm"
          >
            <UIcon :name="icon" class="text-6xl text-violet-500" />
          </div>
        </div>
      </slot>
    </div>
  </UPageHero>
</template>
