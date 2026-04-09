<script setup>
import Navbar from './component/Navbar.vue';
import Footer from './component/Footer.vue';
import Feature from './component/Feature.vue';
import Creation from './component/Creation.vue';
import { ref } from 'vue';

// Menu: About, Careers, Events, Products, Supports
const menuItems = ref([
    { name: "About", link: "#" },
    { name: "Careers", link: "#" },
    { name: "Events", link: "#" },
    { name: "Products", link: "#" },
    { name: "Support", link: "#" }
])
</script>

<template>
    <Navbar :menu-items="menuItems" />
    <Feature />
    <Creation />
    <Footer :menu-items="menuItems" />
</template>

<style scoped></style>