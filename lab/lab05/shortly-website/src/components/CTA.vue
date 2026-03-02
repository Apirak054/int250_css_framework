<script setup>
</script>
<template>
<div class="cta-bg bg-[#1E1A4D] py-20 text-center bg-cover bg-center " >
    <p class="font-bold text-xl text-white mb-5 lg:text-xl">Boost your links today</p>
    <button class="bg-cyan-500 text-white px-6 py-2 rounded-full font-bold hover:bg-cyan-400 mx-auto lg:mx-0" >Get Started</button>
</div>
</template>

<style scoped>
.cta-bg {
    background-image: url('../assets/bg-boost-mobile.svg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: left;
}

@media (min-width: 768px) {
    .cta-bg {
        background-image: url('../assets/bg-boost-desktop.svg');
        background-size: cover;
    }
}@media (min-width: 1024px) {
    .cta-bg {
        background-image: url('../assets/bg-boost-desktop.svg');
        background-size: 100% 100%;
    }
}
</style>