<script setup>
import { ref } from "vue";
const isMenuOpen = ref(false);
</script>

<template>
  <div class="mx-30">
  <nav class="p-4">
    <div class="flex justify-between ml-20">
      <!-- Left: Logo + Menu -->
      <img src="../assets/logo.svg" alt="logo" class="h-8" />

      <div class="hidden lg:flex flex-1 items-center justify-between ml-10">
        <div class="space-x-8 text-gray-400 font-bold">
          <a href="#" class="hover:text-gray-800">Features</a>
          <a href="#" class="hover:text-gray-800">Pricing</a>
          <a href="#" class="hover:text-gray-800">Resources</a>
        </div>

        <div class="space-x-6 flex items-center">
          <a href="#" class="text-gray-400 font-bold hover:text-gray-800"
            >Login</a
          >
          <button
            class="bg-cyan-500 text-white px-6 py-2 rounded-full font-bold hover:bg-cyan-400"
          >
            Sign Up
          </button>
        </div>
      </div>
      <button
        @click="isMenuOpen = !isMenuOpen"
        class="lg:hidden text-gray-400 text-3xl focus:outline-none"
      >
        <span v-if="!isMenuOpen">☰</span>
        <span v-else>✕</span>
      </button>
    </div>
  </nav>
  <div v-if="isMenuOpen" class="lg:hidden container mx-auto px-6 pb-6">
    <div
      class="bg-gray-400/80 text-white text-center rounded-xl p-6 font-bold flex flex-col space-y-6"
    >
      <a href="#">Features</a>
      <a href="#">Pricing</a>
      <a href="#">Resources</a>
      <hr class="border-gray-600" />
      <a href="#">Login</a>
      <button class="bg-cyan-500 w-full py-3 rounded-full">Sign Up</button>
    </div>
  </div>
  </div>
</template>

<style scoped></style>
