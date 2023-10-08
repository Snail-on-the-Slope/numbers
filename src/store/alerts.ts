import { defineStore } from "pinia";
import { Alert } from '~/types'

const REMOVE_NUMBER = (value?: number): string => `Do you really want to remove the number${value ? ' ' + value : ''}?`
const CANCEL_EDIT = 'Are you sure you want to undo the edit?'

export const useAlertsStore = defineStore("alerts", {
  state: () => ({
    alert: null as Alert,
  }),
  actions: {
    add(type: 'cancel' | 'remove', confirmed: Function, value?: number): void {
      switch (type) {
        case 'cancel': 
          this.alert = {
            title: CANCEL_EDIT,
            confirmed
          }
          break
        case 'remove': 
          this.alert = {
            title: REMOVE_NUMBER(value),
            confirmed
          }
          break
        default:
          break
      }
    },
    cancel(): void {
      this.alert = null
    }
  },
});