<template>
  <input
    :class="['ui-input', { 'ui-input--disabled': isDisabled }]"
    :value="modelValue"
    :placeholder="placeholder"
    :disabled="isDisabled"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>

<script setup lang="ts">
defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: '',
  },
})

defineEmits(['update:modelValue'])
</script>

<style scoped lang="scss">
@use '../styles/colors.scss' as *;

.ui-input {
  width: 100%;
  padding: $padding-md;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  font-size: $font-size-md;
  transition: border-color 0.2s ease;
}

.ui-input:focus {
  outline: none;
  border-color: $primary;
  box-shadow: $shadow-sm;
}

.ui-input--disabled {
  background-color: $bg-light;
  cursor: not-allowed;
}
</style>
