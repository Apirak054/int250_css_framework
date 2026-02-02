<template>
  <div class="page">
    <Counter />
  </div>
</template>

<script setup>
import Counter from "./components/Counter.vue";
</script>

<style scoped>
.page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #1e293b, #020617);
}
</style>
