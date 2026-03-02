<template>
  <div class="min-h-screen bg-[#1a1e29] flex items-center justify-center p-6 font-sans">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
      
      <div class="rounded-xl p-8 flex flex-col justify-between items-center bg-[#222736] border-15 border-[#2d3345] opacity-90 transition-all duration-300 h-150">
        <div class="flex flex-col items-center w-full">
          <h3 class="text-xs font-semibold text-gray-300 tracking-widest mb-6 uppercase">
            BASIC
          </h3>
          <div class="text-5xl font-serif text-white mb-2">
            100GB
          </div>
          <div class="text-sm text-gray-300 mb-8">
            $1.99/month
          </div>
          <button class="w-full py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 bg-transparent border border-[#404859] text-white hover:bg-[#2d3345]">
            Purchase
          </button>
        </div>
        <div class="border-t border-gray-700 pt-5 w-full">
          <ul class="w-full space-y-4">
            <li class="flex items-center text-sm text-gray-300">
              <svg class="w-4 h-4 mr-3 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              100 GB storage
            </li>
            <li class="flex items-center text-sm text-gray-300">
              <svg class="w-4 h-4 mr-3 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              Option to add members
            </li>
            <li class="flex items-center text-sm text-gray-300">
              <svg class="w-4 h-4 mr-3 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              Extra member benefits
            </li>
          </ul>
        </div>
      </div>

      <div class="rounded-xl p-8 flex flex-col justify-between items-center bg-[#222736] border-15 border-[#8b5cf6] shadow-lg shadow-[#8b5cf6]/20 transform md:-translate-y-2 transition-all duration-300 h-150">
        <div class="flex flex-col items-center w-full">
          <h3 class="text-xs font-semibold text-gray-300 tracking-widest mb-6 uppercase">
            STANDARD
          </h3>
          <div class="text-5xl font-serif text-white mb-2">
            200GB
          </div>
          <div class="text-sm text-gray-300 mb-8">
            $3.99/month
          </div>
          <button class="w-full py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 bg-[#8b5cf6] text-white hover:bg-[#7c3aed]">
            Purchase
          </button>
        </div>
        <div class="border-t border-gray-700 pt-5 w-full">
          <ul class="w-full space-y-4">
            <li class="flex items-center text-sm text-gray-300">
              <svg class="w-4 h-4 mr-3 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              200 GB storage
            </li>
            <li class="flex items-center text-sm text-gray-300">
              <svg class="w-4 h-4 mr-3 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              Option to add members
            </li>
            <li class="flex items-center text-sm text-gray-300">
              <svg class="w-4 h-4 mr-3 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              Extra member benefits
            </li>
          </ul>
        </div>
      </div>

      <div class="rounded-xl p-8 flex flex-col justify-between items-center bg-[#222736] border-15 border-[#2d3345] opacity-90 transition-all duration-300 h-150">
        <div class="flex flex-col items-center w-full">
          <h3 class="text-xs font-semibold text-gray-300 tracking-widest mb-6 uppercase">
            PREMIUM
          </h3>
          <div class="text-5xl font-serif text-white mb-2">
            2TB
          </div>
          <div class="text-sm text-gray-300 mb-8">
            $8.99/month
          </div>
          <button class="w-full py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 bg-transparent border border-[#404859] text-white hover:bg-[#2d3345]">
            Purchase
          </button>
        </div>
        <div class="border-t border-gray-700 pt-5 w-full">
          <ul class="w-full space-y-4">
            <li class="flex items-center text-sm text-gray-300">
              <svg class="w-4 h-4 mr-3 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              2 TB storage
            </li>
            <li class="flex items-center text-sm text-gray-300">
              <svg class="w-4 h-4 mr-3 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              Option to add members
            </li>
            <li class="flex items-center text-sm text-gray-300">
              <svg class="w-4 h-4 mr-3 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              Extra member benefits
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>