<script setup>
import { computed, reactive, ref } from "vue";
import BaseInput from "./Components/BaseInput.vue";
import BaseSelect from "./Components/BaseSelect.vue";
import BaseTextarea from "./Components/BaseTextarea.vue";
import BaseRadioGroup from "./Components/BaseRadioGroup.vue";
import BaseCheckbox from "./Components/BaseCheckbox.vue";
const form = reactive({
  fullName: "",
  studentId: "",
  email: "",
  password: "",
  program: "",
  yearLevel: "",
  bio: "",
  track: "",
  agree: false,
});

const submitted = ref(false);
const showSuccessModal = ref(false);

const programOptions = [
  { label: "Computer Science", value: "CS" },
  { label: "Digital Service Innovation", value: "DSI" },
  { label: "Information Technology", value: "IT" },
  { label: "Software Engineering", value: "SE" },
];

const trackOptions = [
  { label: "Frontend UI Development", value: "frontend" },
  { label: "Backend API Design", value: "backend" },
  { label: "UX/UI Design", value: "ux" },
  { label: "AI for Productivity", value: "ai" },
];

const yearOptions = [
  { label: "Year 1", value: "1" },
  { label: "Year 2", value: "2" },
  { label: "Year 3", value: "3" },
  { label: "Year 4", value: "4" },
];

const errors = computed(() => {
  const e = {};

  if (!form.fullName.trim()) e.fullName = "Full name is required.";

  if (!form.studentId.trim()) {
    e.studentId = "Student ID is required.";
  } else if (!/^\d{11}$/.test(form.studentId)) {
    e.studentId = "Student ID must be 11 digits.";
  }

  if (!form.email.trim()) {
    e.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    e.email = "Please enter a valid email address.";
  }

  if (!form.password.trim()) {
    e.password = "Password is required.";
  } else if (form.password.length < 8) {
    e.password = "Password must be at least 8 characters.";
  }

  if (!form.program) e.program = "Please select your program.";
  if (!form.yearLevel) e.yearLevel = "Please select your year level.";
  if (!form.track) e.track = "Please choose a workshop track.";
  if (!form.agree) e.agree = "You must accept the terms before submitting.";

  return e;
});

const isFormValid = computed(() => Object.keys(errors.value).length === 0);

function resetForm() {
  form.fullName = "";
  form.studentId = "";
  form.email = "";
  form.password = "";
  form.program = "";
  form.yearLevel = "";
  form.bio = "";
  form.track = "";
  form.agree = false;
  submitted.value = false;
}

function handleSubmit() {
  submitted.value = true;

  if (!isFormValid.value) return;

  showSuccessModal.value = true;
}

function closeSuccessModal() {
  showSuccessModal.value = false;
  resetForm();
}
</script>

<template>
  <div class="min-h-screen bg-slate-100 py-10 px-4">
    <div class="mx-auto max-w-5xl">
      <div class="mb-6">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
          Hands-on Lab
        </p>
        <h1 class="mt-2 text-3xl font-bold text-slate-900">
          Student Workshop Registration Form
        </h1>
        <p class="mt-2 max-w-2xl text-sm text-slate-600">
          This page demonstrates reusable form controls, validation feedback,
          helper text, and a clean responsive layout.
        </p>
      </div>

      <div class="space-y-6">
        <section class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 class="text-xl font-bold text-slate-900">4. Form Controls</h2>
          <p class="mt-1 text-sm text-slate-500">
            Consistent form patterns with labels, helper text, and validation style.
          </p>

          <form class="mt-6 space-y-6" @submit.prevent="handleSubmit">
            <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
              <BaseInput v-model="form.fullName" label="Full Name" placeholder="Enter your full name"
                helper-text="Use a clear and complete student name." :error="submitted ? errors.fullName : ''" />

              <BaseInput v-model="form.email" label="Email Address" type="email" placeholder="Enter your email"
                helper-text="Example: student@mail.kmutt.ac.th" :error="submitted ? errors.email : ''" />
            </div>

            <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
              <BaseInput v-model="form.studentId" label="Student ID" placeholder="Enter 11-digit student ID"
                :error="submitted ? errors.studentId : ''" />

              <BaseInput v-model="form.password" label="Password" type="password" placeholder="Enter your password"
                helper-text="Password must be at least 8 characters." :error="submitted ? errors.password : ''" />
            </div>

            <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
              <BaseSelect v-model="form.program" label="Program" placeholder="Select your program"
                :options="programOptions" :error="submitted ? errors.program : ''" />

              <BaseSelect v-model="form.track" label="Workshop Track" placeholder="Select your workshop track"
                :options="trackOptions" :error="submitted ? errors.track : ''" required />


            </div>
            <BaseRadioGroup v-model="form.yearLevel" label="Year Level" name="yearLevel" :options="yearOptions"
              :error="submitted ? errors.yearLevel : ''" required />
            <BaseTextarea v-model="form.bio" label="Message" placeholder="Write your message here"
              helper-text="You can briefly tell us why you're interested in this workshop." />


            <BaseCheckbox v-model="form.agree" label="I agree to the workshop terms and conditions."
              :error="submitted ? errors.agree : ''" />

            <div
              class="flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p class="text-sm text-slate-500">
                <span class="font-medium">Tip:</span>
                Try submitting with empty fields to test validation feedback.
              </p>

              <div class="flex gap-3">
                <button type="button" @click="resetForm"
                  class="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50">
                  Reset Form
                </button>

                <button type="submit"
                  class="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 active:scale-[0.99]">
                  Submit Registration
                </button>
              </div>
            </div>
            <transition name="fade">
              <div v-if="showSuccessModal"
                class="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/35 px-4">
                <div class="w-full max-w-2xl rounded-[28px] bg-white p-8 shadow-2xl md:p-10">
                  <div class="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                    <svg class="h-10 w-10 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>

                  <h2 class="text-4xl font-bold text-slate-900">
                    Registration Submitted
                  </h2>

                  <p class="mt-4 text-xl leading-relaxed text-slate-500">
                    Your workshop registration has been recorded successfully.
                  </p>

                  <div class="mt-10 flex justify-end">
                    <button type="button" @click="closeSuccessModal"
                      class="rounded-2xl bg-green-600 px-8 py-3 text-lg font-semibold text-white transition hover:bg-green-700">
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </transition>
          </form>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped></style>