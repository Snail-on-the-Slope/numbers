<script lang="ts" setup>
import { useAlertsStore } from '~/store/alerts'

const alerts = useAlertsStore()
const confirmed = (): void => {
  alerts.alert.confirmed()
  alerts.cancel()
}
</script>

<template>
  <div class="layout" v-if="alerts.alert">
    <div class="alert">
      <div class="alert-text">
        {{ alerts.alert.title }}
      </div>
      <div class="alert-actions">
        <BaseButton
          variant="primary"
          size="md"
          @click="confirmed"
        >
          Confirm
        </BaseButton>
        <BaseButton
          variant="secondary-link"
          size="sm"
          @click="alerts.cancel"
        >
          Cansel
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
.layout {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  background: rgba(0, 0, 0, 0.2);
}
.alert {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px 60px;
  background: #fff;
  border-radius: 30px;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  pointer-events: all;
}

.alert-text {
  font-size: 24px;
  line-height: 26px;
  margin-bottom: 24px;
}

.alert-actions {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>