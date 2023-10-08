<script lang="ts" setup>
import { ref } from "vue";
import { useAlertsStore } from '~/store/alerts'
import { Number, Column } from '~/types'

interface Props {
  columns: Column[]
  data: Number[]
}

interface Emits {
  (e: 'edit', value: Number): void
  (e: 'remove', value: Number): void
}

withDefaults(defineProps<Props>(), {
  columns: () => [],
  data: () => [],
})

const emit = defineEmits<Emits>()
const alerts = useAlertsStore()
const removeItem = ref(null)

function confirmedRemove(): void {
  emit('remove', removeItem.value)
  removeItem.value = null
}

const removeItemShow = (item: Number): void => {
  removeItem.value = item
  alerts.add('remove', confirmedRemove, item.value)
}
</script>

<template>
  <table>
    <thead>
      <tr>
        <th v-for="column in columns" :key="column.prop">
          {{ column.label }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in data" :key="row.id">
        <td
          v-for="column in columns"
          :key="column.value"
        >
          {{ row[column.value] }}
        </td>
        <td class="table-action">
          <BaseButton
            variant="primary-link"
            size="sm"
            @click="emit('edit', row)"
          >
            Edit
          </BaseButton>
        </td>
        <td class="table-action">
          <BaseButton
            variant="danger-link"
            size="sm"
            @click="removeItemShow(row)"
          >
            Delete
          </BaseButton>
        </td>
      </tr>
      <tr v-if="data.length === 0" key="empty">
        <td :colspan="columns.length" class="text-center py-5 text-gray-500 text-lg td-cell">
          <slot name="empty">
            <span>No Data</span>
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 40px 60px;
  border-radius: 12px;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
}

td {
  text-align: center;
}

.table-action {
  width: 12%;
}
</style>