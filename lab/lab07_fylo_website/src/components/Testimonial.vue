<template>
  <section class="max-w-7xl mx-auto px-6 py-20 relative">
    <img src="../assets/bg-quotes.png" alt="quote" class="absolute top-10 left-8 z-0 w-10 md:w-14" />
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
      <div v-for="(review, index) in reviews" :key="index" class="bg-slate-50 dark:bg-slate-800 rounded-lg p-8 shadow-lg">
        <p class="text-sm tracking-wide mb-6 text-slate-800 dark:text-slate-300 leading-relaxed">{{ review.text }}</p>
        <div class="flex items-center gap-4">
          <img :src="review.avatar" :alt="review.name" class="w-10 h-10 rounded-full" />
          <div>
            <h4 class="font-bold text-xs tracking-wider">{{ review.name }}</h4>
            <p class="text-xs text-slate-800 dark:text-slate-400">{{ review.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import profile1 from '../assets/profile-1.jpg';
import profile2 from '../assets/profile-2.jpg';
import profile3 from '../assets/profile-3.jpg';

const reviews = [
  { text: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.', name: 'Satish Patel', role: 'Founder & CEO, Huddle', avatar: profile1 },
  { text: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.', name: 'Bruce McKenzie', role: 'Founder & CEO, Huddle', avatar: profile2 },
  { text: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.', name: 'Iva Boyd', role: 'Founder & CEO, Huddle', avatar: profile3 }
];
</script>