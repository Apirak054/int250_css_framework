<script setup>
import { ref } from 'vue';
import AppNavbar from './components/AppNavbar.vue';
import StarCard from './components/StarCard.vue';
import CourseCard from './components/CourseCard.vue';
import CourseModal from './components/CourseModal.vue';
import ToastNotification from './components/ToastNotification.vue';

// ข้อมูล Stats
const stats = [
  { title: 'Active Courses', value: '3' },
  { title: 'Pending Assignments', value: '2' },
  { title: 'Completed Tasks', value: '8' },
  { title: 'Overall Progress', value: '72%' }
];

// ข้อมูล Courses
const courses = [
  {
    id: 1,
    code: 'INT250',
    name: 'CSS Framework',
    status: 'In Progress',
    description: 'Learn how to build responsive and interactive web applications using Vue.js and Tailwind CSS.',
    progress: 72
  },
  {
    id: 2,
    code: 'INT161',
    name: 'Object-Oriented Programming',
    status: 'In Progress',
    description: 'Practice Java programming, object-oriented design, and software development principles.',
    progress: 58
  }
];

// Logic สำหรับ Modal และ Toast
const isModalOpen = ref(false);
const selectedCard = ref(null);
const showToast = ref(false);
const toastMessage = ref("");

const openDetails = (course) => {
  selectedCard.ref = course;
  isModalOpen.value = true;
};

const triggerSubmit = () => {
  toastMessage.value = "Assignment submitted successfully!";
  showToast.value = true;
  setTimeout(() => showToast.value = false, 3000);
};
</script>

<template>
  <div class="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100">
    <AppNavbar />

    <main class="mx-auto max-w-7xl px-6 py-8">
      <section class="bg-indigo-600 rounded-3xl p-8 md:p-12 text-white shadow-xl shadow-indigo-200 dark:shadow-none mb-10 relative overflow-hidden">
        <div class="relative z-10">
          <p class="text-indigo-100 text-sm font-medium mb-2">Welcome back, Student 👋</p>
          <h2 class="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Continue your learning journey today.</h2>
          <p class="text-indigo-100 mb-8 max-w-xl opacity-90">Track your courses, review assignments, and monitor your progress in one place.</p>
          <button class="bg-white text-indigo-600 px-8 py-3 rounded-xl font-bold hover:bg-indigo-50 transition shadow-lg">
            View My Courses
          </button>
        </div>
        <div class="absolute -right-20 -top-20 w-80 h-80 bg-indigo-500 rounded-full opacity-50 blur-3xl"></div>
      </section>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <StarCard v-for="s in stats" :key="s.title" :title="s.title" :value="s.value" />
      </div>

      <section>
        <div class="flex justify-between items-end mb-8">
          <div>
            <h3 class="text-2xl font-bold">My Courses</h3>
            <p class="text-slate-500 dark:text-slate-400">Review your course progress and status.</p>
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CourseCard 
            v-for="course in courses" 
            :key="course.id" 
            :course="course"
            @view-details="openDetails(course)"
            @submit="triggerSubmit"
          />
        </div>
      </section>

      <footer class="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 flex justify-between text-xs text-slate-400">
        <span>04/29/2026</span>
        <span class="font-medium uppercase">OWONGABUT, T. - INT250 (2/2025)</span>
        <span>Page 1</span>
      </footer>
    </main>

    <CourseModal :is-open="isModalOpen" :course="selectedCard" @close="isModalOpen = false" />
    <ToastNotification :show="showToast" :message="toastMessage" />
  </div>
</template>