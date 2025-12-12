<template>
  <select
    :value="modelValue"
    :disabled="isDisabled"
    :data-disabled="isDisabled"
    class="ui-select"
    @change="handleChange"
  >
    <option 
      v-for="(option, index) in options" 
      :key="index" 
      :value="option"
    >
      {{ option }}
    </option>
  </select>
</template>

<script setup lang="ts">
interface Props {
  modelValue: string
  isDisabled?: boolean
  options: string[]
}

interface Emits {
  (e: 'update:modelValue', value: string): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const handleChange = (event: Event) => {
  const target = event.target as HTMLSelectElement
  emit('update:modelValue', target.value)
}
</script>

<style scoped>
.ui-select {
  width: 100%;
  padding: var(--padding-md) var(--padding-lg);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  font-size: 1rem;
  color: var(--text-dark);
  background-color: white;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23343a40' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right var(--padding-lg) center;
  background-size: 16px;
  padding-right: calc(var(--padding-lg) * 3);
}

.ui-select:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px rgba(8, 123, 255, 0.2);
}

.ui-select[data-disabled="true"] {
  background-color: var(--color-light);
  color: var(--color-secondary);
  cursor: not-allowed;
  opacity: 0.65;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%236c757d' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E");
}
</style>
