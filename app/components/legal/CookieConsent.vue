<script setup lang="ts">
const { showBanner, acceptAll, rejectNonEssential, savePreferences } =
  useCookieConsent();

const showCustomize = ref(false);
const functionalEnabled = ref(false);
const analyticsEnabled = ref(false);

function handleSaveCustom() {
  savePreferences({
    functional: functionalEnabled.value,
    analytics: analyticsEnabled.value,
  });
  showCustomize.value = false;
}
</script>

<template>
  <Teleport to="body">
    <Transition name="slide-up">
      <div
        v-if="showBanner"
        class="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6"
      >
        <UCard class="max-w-2xl mx-auto" :ui="{ root: 'shadow-2xl' }">
          <template v-if="!showCustomize">
            <div
              class="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <div class="flex-1">
                <p class="font-semibold text-default">Uso de cookies</p>
                <p class="text-sm text-muted mt-1">
                  Utilizamos cookies esenciales para el funcionamiento del
                  sitio. Puedes aceptar o rechazar las cookies opcionales.
                  <NuxtLink to="/cookies" class="text-primary underline">
                    Mas informacion
                  </NuxtLink>
                </p>
              </div>
              <div class="flex flex-col sm:flex-row gap-2 shrink-0">
                <UButton
                  label="Personalizar"
                  color="neutral"
                  variant="outline"
                  size="sm"
                  @click="showCustomize = true"
                />
                <UButton
                  label="Rechazar"
                  color="neutral"
                  variant="soft"
                  size="sm"
                  @click="rejectNonEssential"
                />
                <UButton
                  label="Aceptar todas"
                  color="primary"
                  size="sm"
                  @click="acceptAll"
                />
              </div>
            </div>
          </template>

          <template v-else>
            <p class="font-semibold text-default mb-4">
              Personalizar cookies
            </p>
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-default">Esenciales</p>
                  <p class="text-xs text-muted">
                    Necesarias para el funcionamiento del sitio
                  </p>
                </div>
                <USwitch :model-value="true" disabled />
              </div>

              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-default">Funcionales</p>
                  <p class="text-xs text-muted">
                    Mejoran la experiencia de uso
                  </p>
                </div>
                <USwitch v-model="functionalEnabled" />
              </div>

              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-default">Analiticas</p>
                  <p class="text-xs text-muted">
                    Nos ayudan a entender el uso del sitio
                  </p>
                </div>
                <USwitch v-model="analyticsEnabled" />
              </div>
            </div>

            <div class="flex justify-end gap-2 mt-4">
              <UButton
                label="Cancelar"
                color="neutral"
                variant="ghost"
                size="sm"
                @click="showCustomize = false"
              />
              <UButton
                label="Guardar preferencias"
                color="primary"
                size="sm"
                @click="handleSaveCustom"
              />
            </div>
          </template>
        </UCard>
      </div>
    </Transition>
  </Teleport>
</template>
