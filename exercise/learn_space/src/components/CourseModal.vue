<script setup>
defineProps(['isOpen', 'course']);
defineEmits(['close']);
</script>

<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-6">
    <div class="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" @click="$emit('close')"></div>
    
    <div class="relative bg-white dark:bg-slate-900 w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden">
      <div class="p-8">
        <div class="flex justify-between items-start mb-6">
          <h3 class="text-2xl font-bold">Course Details</h3>
          <button @click="$emit('close')" class="h-10 w-10 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition">
            ✕
          </button>
        </div>
        
        <div v-if="course" class="space-y-4">
          <div class="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl">
            <p class="text-xs font-bold text-indigo-600 mb-1">{{ course.code }}</p>
            <p class="text-lg font-bold">{{ course.name }}</p>
          </div>
          <p class="text-slate-500 text-sm">{{ course.description }}</p>
          <div class="pt-4 border-t border-slate-100 dark:border-slate-800">
            <p class="text-xs font-bold text-slate-400 mb-2 uppercase">Status</p>
            <p class="text-sm font-medium">{{ course.status }} ({{ course.progress }}%)</p>
          </div>
        </div>

        <button @click="$emit('close')" class="w-full mt-8 py-4 bg-slate-900 dark:bg-indigo-600 text-white font-bold rounded-2xl transition hover:opacity-90">
          Close Window
        </button>
      </div>
    </div>
  </div>
</template>