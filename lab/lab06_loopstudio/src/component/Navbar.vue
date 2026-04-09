<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

defineProps({
    menuItems: {
        type: Array,            
        required: true
    }
});
</script>

<template>
    <section class="relative min-h-[500px] md:min-h-[600px] bg-no-repeat bg-center bg-cover bg-[url('@/assets/mobile/image-hero.jpg')] md:bg-[url('@/assets/desktop/image-hero.jpg')] font-sans">

        <div class="container mx-auto max-w-6xl px-6 py-10">

            <nav class="relative z-50 flex justify-between items-center h-10 mb-32 font-bold text-white">

                <img src="@/assets/logo.svg" alt="Loopstudios Logo" class="h-6 md:h-8">

                <div class="hidden md:flex gap-8">
                    <div class="group" v-for="item in menuItems" :key="item.name">
                        <a :href="item.link" class="cursor-pointer">{{ item.name }}</a>
                        <div class="transition-all duration-300 bg-white w-0 h-[2px] mx-auto mt-2 group-hover:w-1/2"></div>
                    </div>
                </div>

                <button @click="toggleMenu" class="md:hidden focus:outline-none z-50" aria-label="Toggle Menu">
                    <div class="w-8 h-[3px] mb-1.5 bg-white transition-transform duration-300 origin-center"
                        :class="{ 'rotate-45 translate-y-[9px]': isMenuOpen }"></div>
                    
                    <div class="w-8 h-[3px] mb-1.5 bg-white transition-opacity duration-300" 
                        :class="{ 'opacity-0': isMenuOpen }"></div>
                    
                    <div class="w-8 h-[3px] bg-white transition-transform duration-300 origin-center"
                        :class="{ '-rotate-45 -translate-y-[9px]': isMenuOpen }"></div>
                </button>
            </nav>

            <div v-show="isMenuOpen"
                class="fixed inset-0 z-40 bg-black flex flex-col justify-center px-6 space-y-6 text-white uppercase tracking-[0.2em] text-2xl md:hidden">
                
                <a v-for="item in menuItems" :key="item.name" :href="item.link"
                    class="hover:text-gray-400 transition-colors" @click="toggleMenu">
                    {{ item.name }}
                </a>
            </div>

            <div class="relative z-30 group border-2 border-white p-6 max-w-sm md:max-w-lg transition-colors duration-300 hover:border-blue-50 cursor-default">
                <h1 class="text-white font-light text-4xl md:text-6xl uppercase leading-tight group-hover:text-blue-50 transition-colors duration-300">
                    Impressive <br> Experiences <br> That Deliver
                </h1>
            </div>
            
        </div>
    </section>
</template>

<style scoped></style>