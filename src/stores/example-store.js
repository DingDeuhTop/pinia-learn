import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 0,
  }),
  getters: {
    OddorEven: (state) => {
      if (state.count % 2 === 0) return "even";
      return "odd";
    },
  },
  actions: {
    increase() {
      this.count++;
    },
    decrease() {
      this.count--;
    },
  },
});
