<template>
  <div class="home">
    <div class="count">
      {{ storeCounter.count }}
    </div>
    <div class="button">
      <q-btn color="primary" label="add" @click="storeCounter.increase" />
      <q-btn color="primary" label="minus" @click="storeCounter.decrease" />
    </div>
    <hr />
    <div>This counter is: {{ storeCounter.OddorEven }}</div>
    <hr />
    <div>
      <q-input v-model="storeCounter.count" type="text" label="Label" />
    </div>
  </div>
</template>
<script setup>
import { computed, ref } from "vue";
import { useCounterStore } from "../stores/example-store.js";

const storeCounter = useCounterStore();
</script>
