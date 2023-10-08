<script lang="ts" setup>
import BaseForm from '~/components/BaseForm.vue';
import { useRoute } from 'vue-router';
import { useNumbersStore } from '~/store/numbers'

const route = useRoute(); 
const numbers = useNumbersStore()
const id = route.params.id
const number = numbers.itemById(id)
const edit = (value: string): void => numbers.edit(id, value)
const deleteItem = (): void => numbers.remove(id)
</script>

<template>
  <BaseForm
    :value="number"
    @submit="edit"
    @delete="deleteItem"
  >
    Edit Number
  </BaseForm>
</template>

<style scoped>
</style>