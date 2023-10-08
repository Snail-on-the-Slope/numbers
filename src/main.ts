import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from "pinia"
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import BaseButton from '~/components/BaseButton.vue'
import BaseTable from '~/components/BaseTable.vue'
import BaseAlert from '~/components/BaseAlert.vue'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app
  .component('BaseButton', BaseButton)
  .component('BaseTable', BaseTable)
  .component('BaseAlert', BaseAlert)
  .use(router)
  .use(pinia)
  .mount('#app')
