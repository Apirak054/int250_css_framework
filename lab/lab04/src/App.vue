<script setup>
import ProfileCard from './components/ProfileCard.vue'
</script>

<template>
  <div
    class="min-h-screen flex items-center justify-center gap-8
           bg-gradient-to-br from-indigo-500 to-purple-600"
  >

    <!-- Card 1 friend(1) -->
    <ProfileCard
      background="/background_f1.jpg"
      profileimg="/profile_f1.jpg"
      name="Pakin (Team) "
      subheading="Student, IT, BKK"
      followers="560K"
      following="210"
      projects="892"
      github="https://github.com/Payya007"
      instagram="https://www.instagram.com/_24.06.06_"
      email="Pakinn.ta@gmail.com"
    />

        <!-- Card 2-->
    <ProfileCard
      background="/background.jpg"
      profileimg="/profile.jpg"
      name="Apirak"
      subheading="Student, IT, BKK"
      followers="120M"
      following="80"
      projects="599"
      github="https://github.com/Payya007"
      instagram="https://www.instagram.com/404nanfound/"
      email="apirak.chai@mail.kmutt.ac.th"
    />


     <!-- Card 2 friend(2) -->
    <ProfileCard
      background="/background_f1.jpg"
      profileimg="/profile_f2.jpg"
      name="wannawat (Team) "
      subheading="Student, IT, BKK"
      followers="560K"
      following="390"
      projects="755"
      github="https://github.com/UltraPixel042"
      instagram="https://www.instagram.com/4thvowelineng"
      email="67130500036@ad.sit.kmutt.ac.th"
    />
  </div>
</template>
