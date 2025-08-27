//OEFENING 5

import { defineStore } from 'pinia'

export const useReeksStore = defineStore('reeks', {
  state: () => ({
    getallenReeks: [0, 1, 1, 2, 3]
  }),
  actions: {
    addGetallenReeks(nieuwGetal) {
      this.getallenReeks.push(nieuwGetal)
    }
  }
})
