<template>
  <section class="max-w-4xl mx-auto px-6 py-16 relative z-10">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 text-center">
      <div v-for="(feature, index) in features" :key="index" class="flex flex-col items-center">
        <img :src="feature.icon" :alt="feature.title" class="h-16 mb-6 object-contain" />
        <h3 class="text-xl font-bold font-raleway mb-3">{{ feature.title }}</h3>
        <p class="text-sm text-slate-800 dark:text-slate-300">{{ feature.desc }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import iconAccess from '../assets/icon-access-anywhere.svg';
import iconSecurity from '../assets/icon-security.svg';
import iconCollab from '../assets/icon-collaboration.svg';
import iconAnyFile from '../assets/icon-any-file.svg';

const features = [
  { icon: iconAccess, title: 'Access your files, anywhere', desc: 'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.' },
  { icon: iconSecurity, title: 'Security you can trust', desc: '2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.' },
  { icon: iconCollab, title: 'Real-time collaboration', desc: 'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.' },
  { icon: iconAnyFile, title: 'Store any type of file', desc: 'Whether you\'re sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.' }
];
</script>