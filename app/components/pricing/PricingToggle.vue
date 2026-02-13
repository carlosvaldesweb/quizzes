<script setup lang="ts">
const model = defineModel<string>({ default: "monthly" });

const items = [
  { label: "Mensual", value: "monthly" },
  { label: "Anual", value: "annual" },
];
</script>

<template>
  <div class="flex items-center justify-center gap-3">
    <div class="relative">
      <UTabs
        v-model="model"
        :items="items"
        :content="false"
        variant="pill"
        size="lg"
      />
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 scale-90"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-90"
      >
        <UBadge
          v-if="model === 'annual'"
          label="Ahorra 20%"
          color="secondary"
          variant="subtle"
          size="md"
          class="absolute -top-2 -right-20"
        />
      </Transition>
    </div>
  </div>
</template>
