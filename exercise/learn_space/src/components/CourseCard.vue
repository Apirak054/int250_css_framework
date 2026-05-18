<script setup>
defineProps(['course']);
defineEmits(['view-details', 'submit']);
</script>

<template>
  <div class="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col transition-all hover:shadow-xl">
    <div class="flex justify-between items-start mb-6">
      <div class="space-y-1">
        <span class="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">{{ course.code }}</span>
        <h4 class="text-xl font-bold leading-tight">{{ course.name }}</h4>
      </div>
      <span class="px-3 py-1 bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold rounded-full border border-emerald-100 dark:border-emerald-900">
        {{ course.status }}
      </span>
    </div>

    <p class="text-slate-500 dark:text-slate-400 text-sm mb-8 leading-relaxed flex-grow">
      {{ course.description }}
    </p>

    <div class="space-y-3 mb-8">
      <div class="flex justify-between text-xs font-bold">
        <span class="text-slate-400 uppercase">Progress</span>
        <span>{{ course.progress }}%</span>
      </div>
      <div class="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
        <div class="h-full bg-indigo-600 transition-all duration-700" :style="{ width: course.progress + '%' }"></div>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <button @click="$emit('view-details')" class="py-3 px-4 rounded-xl border-2 border-slate-100 dark:border-slate-800 text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition">
        Details
      </button>
      <button @click="$emit('submit')" class="py-3 px-4 rounded-xl bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-700 transition shadow-md shadow-indigo-100 dark:shadow-none">
        Submit
      </button>
    </div>
  </div>
</template>