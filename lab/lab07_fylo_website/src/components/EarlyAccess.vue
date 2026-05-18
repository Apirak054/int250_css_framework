<template>
  <section class="relative h-120 z-20 max-w-4xl mx-auto px-6 transform -translate-y-1/4">
    <div class="bg-[#171f2a] mt-50 text-white rounded-lg p-10 text-center shadow-2xl shadow-slate-900/50">
      <h2 class="text-2xl md:text-3xl font-bold font-raleway mb-4">Get early access today</h2>
      <p class="text-sm md:text-base text-slate-300 mb-8 max-w-2xl mx-auto">
        It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.
      </p>
      <form @submit.prevent class="flex flex-col md:flex-row gap-4 justify-center w-full px-4">
        <input 
          type="email" 
          placeholder="email@example.com" 
          class="w-full md:w-2/3 px-6 py-4 bg-white rounded-full text-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          required
        />
        <button type="submit" class="w-full md:w-1/3 bg-cyan-400 hover:bg-cyan-300 text-white font-bold py-4 px-6 rounded-full transition-colors">
          Get Started For Free
        </button>
      </form>
    </div>
  </section>
</template>