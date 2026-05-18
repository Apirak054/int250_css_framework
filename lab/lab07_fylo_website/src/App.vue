<script setup>
import { ref, onMounted } from 'vue';
import NavBar from "./components/NavBar.vue";
import Hero from "./components/Hero.vue";
import Features from "./components/Features.vue";
import Productive from "./components/Productive.vue";
import FAQ from "./components/FAQ.vue";
import Testimonial from "./components/Testimonial.vue";
import EarlyAccess from "./components/EarlyAccess.vue";
import Footer from "./components/Footer.vue";

const isDark = ref(false);

const toggleDarkMode = () => {
  isDark.value = !isDark.value;
  if (isDark.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

onMounted(() => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    isDark.value = true;
    document.documentElement.classList.add('dark');
  }
});
</script>

<template>
  <div class="min-h-screen w-full bg-white text-slate-800 dark:bg-[#1b2431] dark:text-white font-sans transition-colors duration-300">  
    
    <NavBar :is-dark="isDark" @toggle-theme="toggleDarkMode" />

    <main class="relative">
    <Hero />
      
      <div class="w-full absolute top-[500px] left-0 z-0">
        <img src="./assets/bg-curvy-light-mode.svg" alt="bg light" class="w-full block dark:hidden" />
        
        <img src="./assets/bg-curvy-dark-mode.svg" alt="bg dark" class="w-full hidden dark:block" />
      </div>

      <div class="bg-slate-50 dark:bg-[#1b2431] relative z-10">
        <Features />
        <Productive />
        <FAQ />
        <Testimonial />
      </div>
      
      <div class="relative bg-white dark:bg-[#0b1523] ">
        <EarlyAccess />
        <Footer />
      </div>
    </main>
  </div>
</template>

<style>
/* นำเข้า Font จาก Google Fonts ถ้าจำเป็น */
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Raleway:wght@400;700&display=swap');

body {
  font-family: 'Open Sans', sans-serif;
}
.font-raleway {
  font-family: 'Raleway', sans-serif;
}
</style>