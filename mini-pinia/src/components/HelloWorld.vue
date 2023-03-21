<script setup>
import { reactive,toRefs,computed } from 'vue';
import { useCounterStore } from '../store/counter'

const counter = useCounterStore();

</script>

<template>
  <h1>{{ counter.count }} {{ counter.doubleCounter }}</h1>
  <button @click="counter.count++">counter.count++</button><br />
  <button @click="counter.inc()">counter.inc()</button><br />
  <button @click="counter.$patch({ count: counter.count + 1 })">
          counter.$patch({ count: counter.count + 1 })</button><br />
  <button @click="counter.$patch((state) => state.count++)">
          counter.$patch(state => state.count++)
  </button>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
