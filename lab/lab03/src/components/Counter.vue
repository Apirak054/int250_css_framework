<script setup>
import { ref } from "vue";

const count = ref(0);
const step = ref(1);
const min = 0;
const max = 100;
const previousCount = ref(null);

function increment() {
  previousCount.value = count.value;
  count.value = Math.min(count.value + step.value, max);
}

function decrement() {
  previousCount.value = count.value;
  count.value = Math.max(count.value - step.value, min);
}

function reset() {
  previousCount.value = count.value;
  count.value = 0;
}

function undo() {
  if (previousCount.value !== null) {
    count.value = previousCount.value;
    previousCount.value = null;
  }
}
</script>

<template>
  <div class="card">
    <h1 class="title">Counter App</h1>

    <div class="count-circle">
      {{ count }}
    </div>

    <div class="controls">
      <button class="btn danger" @click="decrement" :disabled="count === 0">
        −
      </button>

      <button class="btn success" @click="increment">
        +
      </button>
    </div>

    <div class="controls">
      <button class="btn warning" @click="reset">
        Reset
      </button>

      <button class="btn secondary" @click="undo" :disabled="previousCount === null">
        Undo
      </button>
    </div>

    <div class="step">
      <label>Step</label>
      <input type="number" v-model.number="step" min="1" />
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 320px;
  padding: 28px;
  border-radius: 20px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  text-align: center;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.title {
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
}

/* count */
.count-circle {
  width: 120px;
  height: 120px;
  margin: 0 auto 20px;
  border-radius: 50%;
  background: white;
  color: #5a4fcf;
  font-size: 42px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* buttons */
.controls {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 12px;
}

.btn {
  padding: 10px 18px;
  border-radius: 10px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  color: white;
}

.btn:hover:not(:disabled) {
  transform: translateY(-2px);
  opacity: 0.9;
}

.btn:active:not(:disabled) {
  transform: scale(0.95);
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* colors */
.success {
  background: #22c55e;
}

.danger {
  background: #ef4444;
}

.warning {
  background: #f59e0b;
}

.secondary {
  background: #64748b;
}

/* step input */
.step {
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.step input {
  width: 70px;
  padding: 6px;
  border-radius: 8px;
  border: none;
  text-align: center;
  outline: none;
}
</style>
