<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Shorten from './components/Shorten.vue'
import CTA from './components/CTA.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col ">
    <Navbar />

    <main class="flex-grow">
      <Hero />
      <Shorten />
      <CTA />
    </main>

    <Footer />
  </div>
</template>

<style scoped>
</style>
