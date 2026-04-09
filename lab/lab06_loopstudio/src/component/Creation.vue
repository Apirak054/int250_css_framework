<script setup>
const cardList = [
    { id: 1, title: "Deep Earth", imgName: "image-deep-earth.jpg" },
    { id: 2, title: "Night Arcade", imgName: "image-night-arcade.jpg" },
    { id: 3, title: "Soccer Team VR", imgName: "image-soccer-team.jpg" },
    { id: 4, title: "The Grid", imgName: "image-grid.jpg" },
    { id: 5, title: "From Up Above VR", imgName: "image-from-above.jpg" },
    { id: 6, title: "Pocket Borealis", imgName: "image-pocket-borealis.jpg" },
    { id: 7, title: "The Curiosity", imgName: "image-curiosity.jpg" },
    { id: 8, title: "Make it fisheye", imgName: "image-fisheye.jpg" },
];

const getImgUrl = (type, imgName) => {
    return new URL(`../assets/${type}/${imgName}`, import.meta.url).href;
};
</script>

<template>
    <section>
        <div class="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
            
            <div class="flex justify-center items-center mb-10 md:justify-between">
                <h2 class="text-4xl text-center uppercase md:text-left md:text-5xl">Our Creations</h2>
                
                <button class="hidden md:block px-10 py-2 border-2 border-black font-bold tracking-[0.3em] uppercase transition-colors hover:bg-black hover:text-white">
                    See All
                </button>
            </div>

            <div class="grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-8 w-full cursor-pointer uppercase">
                <div class="group relative overflow-hidden w-full" v-for="card in cardList" :key="card.id">
                    
                    <img :src="getImgUrl('mobile', card.imgName)" :alt="card.title" 
                         class="w-full h-auto block md:hidden transition duration-200">
                    
                    <img :src="getImgUrl('desktop', card.imgName)" :alt="card.title" 
                         class="w-full h-auto hidden md:block transition duration-200 group-hover:scale-110">

                    <div class="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 transition-all duration-200 group-hover:from-white/50 group-hover:to-white/80 group-hover:opacity-70"></div>

                    <h3 class="absolute w-52 bottom-4 px-6 md:bottom-8 md:px-10 text-white text-2xl leading-tight transition-all duration-200 group-hover:scale-110 group-hover:text-black origin-left">
                        {{ card.title }}
                    </h3>
                </div>
            </div>

            <div class="flex justify-center mt-10 md:hidden">
                <button class="w-full px-10 py-2 border-2 border-black font-bold tracking-[0.3em] uppercase transition-colors hover:bg-black hover:text-white">
                    See All
                </button>
            </div>

        </div>
    </section>
</template>

<style scoped></style>