<template>
  <div class="ui-select">
    <select
      :class="['ui-selectcontrol', { 'ui-selectcontrol--disabled': isDisabled }]"
      :value="modelValue"
      :disabled="isDisabled"
      @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
    >
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
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
  options: {
    type: Array<string>,
    required: true,
  },
})

defineEmits(['update:modelValue'])
</script>

<style scoped lang="scss">
@use '../styles/colors' as *;

.ui-select {
  position: relative;
}

.ui-select__control {
  width: 100%;
  padding: $padding-md;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  font-size: $font-size-md;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: white url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e") no-repeat right 0.75rem center / 0.75em auto;
  cursor: pointer;
}

.ui-select__control:focus {
  outline: none;
  border-color: $primary;
  box-shadow: $shadow-sm;
}

.ui-select__control--disabled {
  background-color: $bg-light;
  cursor: not-allowed;
}
</style>
