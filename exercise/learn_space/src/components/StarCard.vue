<script setup>
defineProps(['title', 'value']);
</script>

<template>
  <div class="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm transition-transform hover:scale-[1.02]">
    <p class="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">{{ title }}</p>
    <p class="text-3xl font-bold tracking-tight">{{ value }}</p>
  </div>
</template>