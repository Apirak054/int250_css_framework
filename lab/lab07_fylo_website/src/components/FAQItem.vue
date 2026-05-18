<template>
  <div class="border-b border-gray-300 dark:border-gray-700 py-4">
    <button 
      @click="$emit('toggle')"
      :aria-expanded="isOpen.toString()"
      class="w-full flex justify-between items-center text-left focus:outline-none"
    >
      <span class="font-medium hover:text-cyan-400 transition-colors text-sm md:text-base">{{ question }}</span>
      <svg 
        :class="{'rotate-180': isOpen}" 
        class="w-5 h-5 transform transition-transform duration-200" 
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>
    
    <div v-show="isOpen" class="mt-3 text-sm text-gray-600 dark:text-gray-300">
      {{ answer }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  question: String,
  answer: String,
  isOpen: Boolean
});
defineEmits(['toggle']);
</script>