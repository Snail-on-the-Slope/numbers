import { defineStore } from "pinia";
import { Number } from '~/types'

export const useNumbersStore = defineStore("numbers", {
  state: () => ({
    rawNumbers: [] as number[],
  }),
  getters: {
    items: (state): Number[] => state.rawNumbers?.map((value, id) => ({ id: id, value })).reverse(),
    itemById: (state): Number => (id: number) => state.rawNumbers[id],
  },
  actions: {
    add(value: number): void {
      this.rawNumbers.push(value)
    },
    edit(id: number, value: number): void {
      this.rawNumbers[id] = value
    },
    remove(id: number): void {
      this.rawNumbers.splice(id, 1)
    },
  },
  persist: true,
});