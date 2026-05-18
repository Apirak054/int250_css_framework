<template>
  <section class="max-w-3xl mx-auto px-6 py-16">
    <div class="text-center mb-10">
      <h2 class="text-2xl md:text-3xl font-bold font-raleway mb-4">Frequently Asked Questions</h2>
      <p class="text-sm md:text-base text-slate-800 dark:text-slate-300">
        Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.
      </p>
    </div>
    
    <div class="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 md:p-8 shadow-md">
      <FAQItem 
        v-for="(faq, index) in faqs" 
        :key="index"
        :question="faq.question"
        :answer="faq.answer"
        :is-open="activeIndex === index"
        @toggle="toggleFAQ(index)"
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import FAQItem from './FAQItem.vue';

const activeIndex = ref(null);

const faqs = ref([
  { question: 'What is Fylo?', answer: 'Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.' },
  { question: 'How much does it cost?', answer: 'We offer a free tier with 2GB of storage. Premium plans start at $9.99/month for 1TB.' },
  { question: 'Is my data safe?', answer: 'Yes, we use industry-standard encryption to ensure your data is completely safe and secure.' }
]);

const toggleFAQ = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>