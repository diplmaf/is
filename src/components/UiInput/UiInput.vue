<template>
  <input
    :value="modelValue"
    :disabled="isDisabled"
    :placeholder="placeholder"
    :data-disabled="isDisabled"
    class="ui-input"
    @input="handleInput"
    @change="handleChange"
  />
</template>

<script setup lang="ts">
interface Props {
  modelValue: string
  isDisabled?: boolean
  placeholder?: string
}

interface Emits {
  (e: 'update:modelValue', value: string): void
  (e: 'change', event: Event): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

const handleChange = (event: Event) => {
  emit('change', event)
}
</script>

<style scoped>
.ui-input {
  width: 100%;
  padding: var(--padding-md) var(--padding-lg);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  font-size: 1rem;
  color: var(--text-dark);
  background-color: white;
  transition: border-color 0.2s ease;
}

.ui-input::placeholder {
  color: var(--color-secondary);
  opacity: 0.7;
}

.ui-input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px rgba(8, 123, 255, 0.2);
}

.ui-input[data-disabled="true"] {
  background-color: var(--color-light);
  color: var(--color-secondary);
  cursor: not-allowed;
  opacity: 0.65;
}
</style>
