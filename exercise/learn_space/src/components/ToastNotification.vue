<script setup>
defineProps(['show', 'message']);
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="transform translate-y-10 opacity-0"
    enter-to-class="transform translate-y-0 opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-if="show" class="fixed bottom-10 right-10 z-[100]">
      <div class="bg-slate-900 dark:bg-indigo-600 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3">
        <div class="h-6 w-6 bg-white/20 rounded-full flex items-center justify-center">
          ✓
        </div>
        <p class="text-sm font-bold">{{ message }}</p>
      </div>
    </div>
  </Transition>
</template>