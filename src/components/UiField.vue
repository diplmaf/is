<template>
  <div class="ui-field">
    <label v-if="label" class="ui-field__label">{{ label }}</label>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
})
</script>

<style scoped lang="scss">
@use '../styles/colors' as *;

.ui-field {
  display: flex;
  flex-direction: column;
  gap: $padding-sm;

  &__label {
    font-size: $font-size-sm;
    color: $text-secondary;
  }
}
</style>
