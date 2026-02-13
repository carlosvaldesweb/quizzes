<script setup lang="ts">
const props = defineProps<{
  title: string;
  description: string;
  buttonLabel: string;
  buttonTo?: string;
}>();

const { signupUrl } = useAppUrls();
const resolvedTo = computed(() => props.buttonTo ?? signupUrl.value);
</script>

<template>
  <UPageCTA
    :title="title"
    :description="description"
    variant="subtle"
    :links="[
      {
        label: buttonLabel,
        to: resolvedTo,
        size: 'xl',
        icon: 'i-lucide-rocket',
        color: 'primary',
      },
    ]"
  />
</template>
