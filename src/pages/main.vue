<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useNumbersStore } from '~/store/numbers'
import { Number } from '~/types'

const router = useRouter()
const numbers = useNumbersStore()

const columns = [
  {
    label: "ID",
    value: "id",
  },
  {
    label: "Number",
    value: "value",
  },
]

const create = (): void => {
  router.push({ name: 'Create' })
}

const edit = (item: Number): void => {
  router.push({ name: 'Edit', params: { id: item.id } })
}

const remove = (item: Number): void => {
  numbers.remove(item.id);
}
</script>

<template>
  <div class="main">
    <div class="main-button">
      <BaseButton
        variant="primary"
        size="sm"
        @click="create"
      >
        Create
      </BaseButton>
    </div>
    <BaseTable
      :columns="columns"
      :data="numbers.items"
      @edit="edit"
      @remove="remove"
    />
  </div>
</template>

<style scoped>
.main {
  padding: 16px 20px;

}
.main-button {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-bottom: 40px;
}
</style>