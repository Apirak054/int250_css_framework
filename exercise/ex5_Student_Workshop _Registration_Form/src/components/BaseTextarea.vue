<script setup>
const model = defineModel({ type: String, default: "" });

defineProps({
  label: { type: String, required: true },
  placeholder: { type: String, default: "" },
  helperText: { type: String, default: "" },
  error: { type: String, default: "" },
  rows: { type: Number, default: 5 },
});
</script>

<template>
  <div>
    <label class="mb-2 block text-sm font-medium text-slate-700">
      {{ label }}
    </label>

    <textarea
      v-model="model"
      :rows="rows"
      :placeholder="placeholder"
      :class="[
        'w-full rounded-lg border px-4 py-3 text-sm text-slate-900 outline-none transition resize-none',
        error
          ? 'border-red-300 bg-red-50 focus:border-red-500 focus:ring-2 focus:ring-red-200'
          : 'border-slate-300 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
      ]"
    ></textarea>

    <p v-if="error" class="mt-2 text-sm text-red-500">
      {{ error }}
    </p>
    <p v-else-if="helperText" class="mt-2 text-sm text-slate-500">
      {{ helperText }}
    </p>
  </div>
</template>