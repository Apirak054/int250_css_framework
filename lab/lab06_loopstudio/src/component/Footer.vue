<script setup>
    const props = defineProps({
        menuItems: {
            type: Array,            
            required: true,        
            default: () => []       
        }
    });

    const getImageUrl = (imageName) => {
        return new URL(`../assets/${imageName}`, import.meta.url);
    }

    const contacts = [
        {src:"icon-facebook.svg", alt:"Facebook", href:"#"},
        {src:"icon-twitter.svg", alt:"Twitter", href:"#"},
        {src:"icon-pinterest.svg", alt:"Pinterest", href:"#"},
        {src:"icon-instagram.svg", alt:"Instagram", href:"#"},
    ]

</script>

<template>
    <section
        class="flex flex-col justify-center items-center h-auto text-white px-16 pt-10 pb-16 gap-8 bg-black md:flex-row md:justify-between md:mx-0">
        <div class="md:flex md:flex-col">
            <img src="../assets/logo.svg" alt="Logo Picture" class="w-60 h-10 mb-4">
            <div class="flex flex-col justify-center items-center gap-8 text-[12px] md:flex-row">
                <div v-for="item in menuItems" :key="item.name">
                    <a :href="item.link">{{ item.name }}</a>
                </div>
            </div>
        </div>

        <div class="md:flex md:flex-col md:items-start">
            <div class="flex justify-center items-center gap-4 mb-6">
                <div v-for="item in contacts" :key="item.alt">
                    <a :href="item.href"><img :src="getImageUrl(item.src)" :alt="item.alt"></a>
                </div>
            </div>

            <p class="text-gray-500 text-nowrap text-[12px]">
                © 2022 Loopstudios. All Rights Reserved.
            </p>
        </div>
    </section>
</template>

<style scoped></style>