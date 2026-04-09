<script setup>
const model = defineModel({ type: String, default: "" });

defineProps({
  label: { type: String, required: true },
  placeholder: { type: String, default: "Select an option" },
  options: { type: Array, default: () => [] },
  error: { type: String, default: "" },
});
</script>

<template>
  <div>
    <label class="mb-2 block text-sm font-medium text-slate-700">
      {{ label }} <span class="text-red-500">*</span>
    </label>

    <select v-model="model" :class="[
      'w-full rounded-lg border px-4 py-3 text-sm text-slate-900 outline-none transition',
      error
        ? 'border-red-300 bg-red-50 focus:border-red-500 focus:ring-2 focus:ring-red-200'
        : 'border-slate-300 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
    ]">
      <option disabled value="">{{ placeholder }}</option>
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>

    <p v-if="error" class="mt-2 text-sm text-red-500">
      {{ error }}
    </p>
  </div>
</template>