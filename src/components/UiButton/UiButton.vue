<template>
  <button
    :class="['ui-button', ui-button--${variant}]"
    :disabled="isDisabled"
    :type="type"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (v: string) => ['primary', 'secondary'].includes(v),
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: 'button',
    validator: (v: string) => ['submit', 'button', 'reset'].includes(v),
  },
})

defineEmits(['click'])
</script>

<style scoped lang="scss">
@use '../styles/colors' as *;

.ui-button {
  padding: $padding-md;
  border: none;
  border-radius: $border-radius;
  cursor: pointer;
  font-size: $font-size-md;
  transition: all 0.2s ease;
}

.ui-button:disabled {
  opacity: 0.65;
  cursor: not-allowed;
}

.ui-button--primary {
  background-color: $primary;
  color: white;
}

.ui-button--primary:hover:not(:disabled) {
  background-color: darken($primary, 10%);
}

.ui-button--secondary {
  background-color: $secondary;
  color: white;
}

.ui-button--secondary:hover:not(:disabled) {
  background-color: darken($secondary, 10%);
}
</style>
