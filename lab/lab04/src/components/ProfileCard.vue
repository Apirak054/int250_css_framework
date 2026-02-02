<script setup>
defineProps({
  profileimg: String,
  background: String,
  name: String,
  subheading: String,
  followers: String,
  following: String,
  projects: String,
  github: String,
  instagram: String,
  email: String
})
</script>

<template>
  <div
    class="bg-white rounded-xl shadow-lg min-w-[300px] text-center
           hover:-translate-y-2 transition-transform duration-300"
  >
    <!-- Header -->
    <div
      class="h-32 bg-cover bg-center rounded-t-xl relative"
      :style="{ backgroundImage: `url(${background})` }"
    >
      <img
        :src="profileimg"
        class="w-24 h-24 rounded-full border-4 border-white
               absolute left-1/2 -bottom-12 -translate-x-1/2 object-cover"
      />
    </div>

    <!-- Info -->
    <div class="pt-16 px-4">
      <h2 class="text-xl font-bold">{{ name }}</h2>
      <p class="text-gray-500 text-sm">{{ subheading }}</p>

      <!-- Social -->
      <div class="flex justify-center gap-4 mt-3 text-blue-600 text-sm">
          <a :href="github" target="_blank">Github</a>
          <a :href="instagram" target="_blank">Instagram</a>
          <a :href="`mailto:${email}`">Email</a>
      </div>

      <!-- Stats -->
      <div class="flex justify-around mt-6 border-t pt-4">
        <div>
          <p class="text-xs text-gray-400">Followers</p>
          <p class="font-bold text-lg">{{ followers }}</p>
        </div>
        <div>
          <p class="text-xs text-gray-400">Following</p>
          <p class="font-bold text-lg">{{ following }}</p>
        </div>
        <div>
          <p class="text-xs text-gray-400">Projects</p>
          <p class="font-bold text-lg">{{ projects }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
