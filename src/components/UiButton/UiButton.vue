<template>
  <button
    :type="type"
    :disabled="isDisabled"
    :data-layout="layout"
    class="ui-button"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  layout?: 'primary' | 'secondary'
  isDisabled?: boolean
  type?: 'submit' | 'button'
}

interface Emits {
  (e: 'click', event: MouseEvent): void
}

const props = withDefaults(defineProps<Props>(), {
  layout: 'primary',
  isDisabled: false,
  type: 'button'
})

const emit = defineEmits<Emits>()

const handleClick = (event: MouseEvent) => {
  if (!props.isDisabled) {
    emit('click', event)
  }
}
</script>

<style scoped>
.ui-button {
  padding: var(--padding-md) var(--padding-lg);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 120px;
}

/* Data-attribute стилизация как в ТЗ */
.ui-button[data-layout="primary"] {
  background-color: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}

.ui-button[data-layout="primary"]:hover:not(:disabled) {
  background-color: color-mix(in srgb, var(--color-primary) 90%, black);
}

.ui-button[data-layout="secondary"] {
  background-color: var(--color-secondary);
  color: var(--text-dark);
  border-color: var(--color-secondary);
}

.ui-button[data-layout="secondary"]:hover:not(:disabled) {
  background-color: color-mix(in srgb, var(--color-secondary) 90%, black);
}

.ui-button:disabled {
  opacity: 0.65;
  cursor: not-allowed;
}

.ui-button:focus {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
</style>
