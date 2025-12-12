<template>
  <div class="ui-field">
    <label v-if="label" class="ui-field__label">
      {{ label }}
    </label>
    <div class="ui-field__content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  label?: string
}

defineProps<Props>()
</script>

<style scoped>
.ui-field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.ui-field__label {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-dark);
  margin-bottom: 0.25rem;
}

.ui-field__content {
  width: 100%;
}
</style>
