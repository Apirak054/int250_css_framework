<script setup>
const model = defineModel({ type: Boolean, default: false });

defineProps({
  label: { type: String, required: true },
  error: { type: String, default: "" },
});
</script>

<template>
  <div>
    <label class="flex items-start gap-3">
      <input
        v-model="model"
        type="checkbox"
        class="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
      />
      <span class="text-sm text-slate-700">{{ label }}</span> <span class="text-red-500">*</span> 
    </label>

    <p v-if="error" class="mt-2 text-sm text-red-500">
      {{ error }}
    </p>
  </div>
</template>