<script lang="ts" setup>
interface Props {
  variant?: 'primary' | 'primary-link' | 'secondary-link' | 'danger-link' | 'secondary' | 'danger'
  size?: 'md' | 'sm' | 'lg'
  disabled?: boolean
}

interface Emits {
  (e: 'click', event: MouseEvent): void
}

const emit = defineEmits<Emits>()

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
})

function handleClick (e: MouseEvent): void {
  emit('click', e)
}
</script>

<template>
  <span class="button-wrapp">
    <button
      v-bind="{ ...$attrs }"
      ref="button"
      class="button"
      :class="[`button__${variant}`, `button__${size}`, { 'button__disabled': disabled}]"
      @click="handleClick"
    >
      <slot></slot>
    </button>
  </span>
</template>


<style scoped>
.button-wrapp {
  border-radius: 6px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
}

.button {
  border-color: transparent;
  border-radius: 4px;
  font-weight: 500;
  background: transparent;

  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.button:hover {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.button__primary {
  color: #fff;
  background-color: rgb(37 99 235);
}

.button__primary:hover {
  background-color: rgb(59 130 246);
}

.button__primary:active,
.button__primary:focus {
  background-color: rgb(29 78 216);
}
.button__secondary {
  color: #fff;
  background-color: rgb(107 114 128);
}

.button__secondary:hover {
  background-color: rgb(107 114 128);
}

.button__secondary:active,
.button__secondary:focus {
  background-color: rgb(55 65 81);
}

.button__primary-link {
  color: rgb(59 130 246);
}

.button__primary-link:hover {
  color: rgb(30 58 138);
}

.button__secondary-link {
  color: rgb(75 85 99);
}

.button__secondary-link:hover {
  color: rgb(17 24 39);
}

.button__danger {
  color: #fff;
  background-color: rgb(220 38 38);
}

.button__danger:hover {
  background-color: rgb(239 68 68);
}

.button__danger:active,
.button__danger:focus {
  background-color: rgb(185 28 28);
}

.button__danger-link {
  color: rgb(220 38 38);
}

.button__danger-link:hover {
  color: rgb(127 29 29);
}

.button__sm {
  font-size: 14px;
  line-height: 16px;
  padding: 8px 12px;
}

.button__md {
  font-size: 14px;
  line-height: 20px;
  padding: 8px 16px;
}

.button__lg {
  font-size: 16px;
  line-height: 24px;
  padding: 8px 24px;
}

.button__disabled {
  pointer-events: none;
  opacity: 0.8;
}
</style>