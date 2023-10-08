<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAlertsStore } from '~/store/alerts'

interface Props {
  value?: number
}

interface Emits {
  (e: 'submit', value: number): void
  (e: 'delete'): void
}

const props = withDefaults(defineProps<Props>(), {
  value: undefined,
})

const router = useRouter()
const emit = defineEmits<Emits>()
const alerts = useAlertsStore()

const number = ref<number | string | undefined>(props.value)

const isCreate = computed(() => props.value === undefined)
const isEmpty = computed(() => number.value === undefined || number.value === '')

const submit = (): void => {
  if (isEmpty) return
  emit('submit', number.value as number)
  if (isCreate.value) {
    number.value = ''
  }
}

function confirmedCancel(): void {
  router.push({ name: 'Main'})
}
function confirmedRemove(): void {
  emit('delete')
  router.push({ name: 'Main'})
}

const cancelEditShow = (): void => { alerts.add('cancel', confirmedCancel) }
const removeItemShow = (): void => { alerts.add('remove', confirmedRemove) }
</script>

<template>
  <div class="form">
    <div class="form-title-wrap">
      <div class="form-title">
        <slot></slot>
      </div>
      <router-link
        :to="{ name: 'Main' }"
        class="form-link"
      >Home</router-link>
    </div>

    <form @submit.prevent>
      <div class="form-input-wrap">
        <input type="number" required v-model="number" />
        <label>Number</label>
      </div>
      <BaseButton
        v-if="isCreate"
        variant="primary"
        size="md"
        :disabled="isEmpty"
        @click="submit"
      >
        Create
      </BaseButton>
      <div
        v-else
        class="form-actions"
      >
        <BaseButton
          variant="primary"
          size="md"
          :disabled="isEmpty"
          @click="submit"
        >
          Edit
        </BaseButton>
        <BaseButton
          variant="secondary"
          size="md"
          @click="cancelEditShow"
        >
          Cansel
        </BaseButton>
        <BaseButton
          variant="danger"
          size="md"
          @click="removeItemShow"
        >
          Remove
        </BaseButton>
      </div>
    </form>
  </div>
</template>

<style scoped>
.form {
  width: 100%;
  max-width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px 60px;
  border-radius: 30px;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
}
.form-title-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}
.form-title {
  font-size: 32px;
  line-height: 40px;
}
.form-link {
  text-decoration: none;
  font-size: 24px;
  line-height: 28px;
}

.form-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-input-wrap {
  position: relative;
}

.form-input-wrap input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #000;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid rgb(55 65 81);
  outline: none;
  background: transparent;
}

.form-input-wrap label {
  position: absolute;
  top:0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #000;
  pointer-events: none;
  transition: .5s;
}

.form-input-wrap input:focus ~ label,
.form-input-wrap input:valid ~ label {
  top: -20px;
  left: 0;
  color: #000;
  font-size: 12px;
}
</style>