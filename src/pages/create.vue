<script lang="ts" setup>
import BaseForm from '~/components/BaseForm.vue';
import { useNumbersStore } from '~/store/numbers'

const numbers = useNumbersStore()
const create = (number: string): void => numbers.add(number)
</script>

<template>
  <BaseForm @submit="create">
    Create Number
  </BaseForm>
</template>

<style scoped>
</style>