<script setup>
const model = defineModel({ type: String, default: "" });

defineProps({
  label: { type: String, required: true },
  name: { type: String, required: true },
  options: { type: Array, default: () => [] },
  error: { type: String, default: "" },
});
</script>

<template>
  <div>
    <p class="mb-3 block text-sm font-medium text-slate-700">
      {{ label }} <span class="text-red-500">*</span> 
    </p>

    <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
      <label
        v-for="option in options"
        :key="option.value"
        class="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-blue-400 hover:bg-blue-50"
      >
        <input
          v-model="model"
          :name="name"
          :value="option.value"
          type="radio"
          class="mt-1 h-4 w-4 border-slate-300 text-blue-600 focus:ring-blue-500"
        />
        <div>
          <p class="text-sm font-medium text-slate-800">{{ option.label }}</p>
        </div>
      </label>
    </div>

    <p v-if="error" class="mt-2 text-sm text-red-500">
      {{ error }}
    </p>
  </div>
</template>