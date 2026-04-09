<script setup>
</script>

<template>
  <div class="min-h-screen bg-[#f3f4f6] text-slate-800">
    <!-- Hero -->
    <section class="relative overflow-hidden bg-[#efefef] px-6 py-6 md:px-12 md:py-8">
      <div
        class="absolute -left-6 bottom-6 h-16 w-16 rounded-full border-[10px] border-teal-700/50 border-r-transparent border-t-transparent rotate-12"
      ></div>
      <div
        class="absolute -left-2 bottom-16 h-10 w-10 rounded-full border-[8px] border-teal-700/50 border-r-transparent border-t-transparent -rotate-12"
      ></div>
      <div class="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-teal-800/60"></div>

      <div class="mx-auto max-w-5xl">
        <h1 class="text-2xl font-light tracking-tight text-slate-900 md:text-4xl">
          In-Class Exercise: UI Kit Page Listing
        </h1>

        <div class="mt-4 max-w-2xl">
          <p class="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
            Tailwind CSS + Vue.js
          </p>
          <h2 class="mt-3 text-2xl font-bold text-slate-800 md:text-4xl">
            UI Kit Page Listing
          </h2>
          <p class="mt-2 text-sm leading-6 text-slate-500 md:text-base">
            This page demonstrates reusable UI patterns including buttons, badges,
            alerts, form controls, cards, and responsive layout sections.
          </p>
        </div>
      </div>
    </section>

    <!-- Content -->
    <main class="mx-auto max-w-5xl space-y-8 px-6 py-8 md:px-12 md:py-12">
      <!-- 1 Buttons -->
      <section class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <h2 class="text-2xl font-bold text-slate-800">1. Buttons</h2>
        <p class="mt-2 text-sm leading-7 text-slate-500">
          Reusable action styles for primary, secondary, outline, and disabled states.
        </p>

        <div class="mt-6 flex flex-wrap gap-4">
          <button
            class="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            Primary Button
          </button>
          <button
            class="rounded-xl bg-slate-700 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            Secondary Button
          </button>
          <button
            class="rounded-xl border border-blue-300 bg-white px-5 py-3 text-sm font-medium text-blue-600 transition hover:bg-blue-50"
          >
            Outline Button
          </button>
          <button
            disabled
            class="cursor-not-allowed rounded-xl bg-slate-200 px-5 py-3 text-sm font-medium text-slate-400"
          >
            Disabled Button
          </button>
        </div>
      </section>

      <!-- 2 Badges -->
      <section class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <h2 class="text-2xl font-bold text-slate-800">2. Badges</h2>
        <p class="mt-2 text-sm leading-7 text-slate-500">
          Small reusable labels for category, state, or status indication.
        </p>

        <div class="mt-6 flex flex-wrap gap-3">
          <span class="inline-flex rounded-full bg-green-100 px-3 py-1.5 text-xs font-semibold text-green-700">
            Success
          </span>
          <span class="inline-flex rounded-full bg-yellow-100 px-3 py-1.5 text-xs font-semibold text-yellow-700">
            Warning
          </span>
          <span class="inline-flex rounded-full bg-red-100 px-3 py-1.5 text-xs font-semibold text-red-700">
            Error
          </span>
          <span class="inline-flex rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">
            Neutral
          </span>
        </div>
      </section>

      <!-- 3 Alerts -->
      <section class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <h2 class="text-2xl font-bold text-slate-800">3. Alerts</h2>
        <p class="mt-2 text-sm leading-7 text-slate-500">
          Reusable feedback messages for success, warning, and error states.
        </p>

        <div class="mt-6 space-y-4">
          <div class="rounded-2xl border border-green-200 bg-green-50 px-5 py-4 text-green-800">
            <h3 class="text-sm font-bold">Success Alert</h3>
            <p class="mt-1 text-sm opacity-90">Your profile has been updated successfully.</p>
          </div>

          <div class="rounded-2xl border border-yellow-200 bg-yellow-50 px-5 py-4 text-yellow-800">
            <h3 class="text-sm font-bold">Warning Alert</h3>
            <p class="mt-1 text-sm opacity-90">Please review the form before submitting.</p>
          </div>

          <div class="rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-red-800">
            <h3 class="text-sm font-bold">Error Alert</h3>
            <p class="mt-1 text-sm opacity-90">Something went wrong. Please try again later.</p>
          </div>
        </div>
      </section>

      <!-- 4 Form Controls -->
      <section class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <h2 class="text-2xl font-bold text-slate-800">4. Form Controls</h2>
        <p class="mt-2 text-sm leading-7 text-slate-500">
          Consistent form patterns with labels, helper text, and validation style.
        </p>

        <form class="mt-6 space-y-5" @submit.prevent>
          <div class="grid gap-5 md:grid-cols-2">
            <div>
              <label class="mb-2 block text-sm font-semibold text-slate-700">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
              <p class="mt-2 text-xs text-slate-500">Use a clear and complete student name.</p>
            </div>

            <div>
              <label class="mb-2 block text-sm font-semibold text-slate-700">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
              <p class="mt-2 text-xs text-slate-500">Example: student@mail.kmutt.ac.th</p>
            </div>
          </div>

          <div>
            <label class="mb-2 block text-sm font-semibold text-slate-700">Role</label>
            <select
              class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-500 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            >
              <option>Select your role</option>
              <option>Student</option>
              <option>Designer</option>
              <option>Developer</option>
            </select>
          </div>

          <div>
            <label class="mb-2 block text-sm font-semibold text-slate-700">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message here"
              class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            ></textarea>
            <p class="mt-2 text-xs text-red-400">This is an example of validation/helper text styling.</p>
          </div>

          <button
            class="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            Submit Form
          </button>
        </form>
      </section>

      <!-- 5 Cards -->
      <section class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <h2 class="text-2xl font-bold text-slate-800">5. Cards</h2>
        <p class="mt-2 text-sm leading-7 text-slate-500">
          Responsive card layout for reusable content blocks such as event, profile, or product cards.
        </p>

        <div class="mt-6 grid gap-5 md:grid-cols-3">
          <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:shadow-md">
            <div class="flex items-start justify-between gap-3">
              <span class="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600">New</span>
              <span class="text-xs text-slate-400">Reusable</span>
            </div>
            <h3 class="mt-5 text-xl font-bold text-slate-800">Basic Card</h3>
            <p class="mt-3 text-sm leading-7 text-slate-600">
              A simple reusable card for general content blocks in a dashboard or landing page.
            </p>
            <button class="mt-6 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">
              View Details
            </button>
          </article>

          <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:shadow-md">
            <div class="flex items-start justify-between gap-3">
              <span class="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600">Profile</span>
              <span class="text-xs text-slate-400">Reusable</span>
            </div>
            <h3 class="mt-5 text-xl font-bold text-slate-800">Student Profile Card</h3>
            <p class="mt-3 text-sm leading-7 text-slate-600">
              A profile summary card showing student status, program, and quick information.
            </p>
            <button class="mt-6 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">
              View Details
            </button>
          </article>

          <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:shadow-md">
            <div class="flex items-start justify-between gap-3">
              <span class="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600">Event</span>
              <span class="text-xs text-slate-400">Reusable</span>
            </div>
            <h3 class="mt-5 text-xl font-bold text-slate-800">Event Card</h3>
            <p class="mt-3 text-sm leading-7 text-slate-600">
              A reusable event component for workshops, seminars, or hackathon activities.
            </p>
            <button class="mt-6 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">
              View Details
            </button>
          </article>
        </div>
      </section>

      <!-- 6 Responsive Layout Example -->
      <section class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <h2 class="text-2xl font-bold text-slate-800">6. Responsive Layout Example</h2>
        <p class="mt-2 text-sm leading-7 text-slate-500">
          A reusable section layout with content on the left and summary panel on the right.
        </p>

        <div class="mt-6 grid gap-5 lg:grid-cols-[2fr_1fr]">
          <div class="rounded-2xl bg-slate-100 p-6">
            <h3 class="text-xl font-bold text-slate-800">Main Content Area</h3>
            <p class="mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
              This area can be used for dashboard content, a feature section, course details,
              or product descriptions. It demonstrates a simple reusable container pattern
              with consistent padding, rounded corners, and spacing.
            </p>
          </div>

          <div class="rounded-2xl bg-blue-600 p-6 text-white shadow-sm">
            <h3 class="text-xl font-bold">Summary Panel</h3>
            <p class="mt-4 text-sm leading-7 text-blue-100 md:text-base">
              This panel can be reused for quick stats, announcements, or call-to-action content.
            </p>
            <button
              class="mt-6 rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-blue-600 transition hover:bg-blue-50"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped></style>