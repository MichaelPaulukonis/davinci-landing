<template>
  <footer class="bg-black text-gray-300 pt-16 pb-8">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- CTA Section -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
          Dive Deeper into <br class="md:hidden" /> the Renaissance
        </h2>
        <p class="text-lg max-w-xl mx-auto mb-8">
          Have questions about Leonardo or the Mona Lisa? Want to share your insights? Connect with fellow art enthusiasts and historians.
        </p>
        <NuxtLink
          to="#contact-form"
          class="inline-block bg-white text-black py-3 px-8 rounded font-semibold hover:bg-gray-200 transition duration-300"
        >
          Get in Touch
        </NuxtLink>
      </div>

      <!-- Footer Links Grid -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <!-- Explore -->
        <div>
          <h3 class="text-white font-semibold mb-4">Explore</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="#" class="hover:text-white">Leonardo's Life</NuxtLink></li>
            <li><NuxtLink to="#" class="hover:text-white">The Mona Lisa</NuxtLink></li>
            <li><NuxtLink to="#" class="hover:text-white">Other Works</NuxtLink></li>
            <li><NuxtLink to="#" class="hover:text-white">Techniques</NuxtLink></li>
          </ul>
        </div>
        <!-- About -->
        <div>
          <h3 class="text-white font-semibold mb-4">About</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="#" class="hover:text-white">Our Mission</NuxtLink></li>
            <li><NuxtLink to="#" class="hover:text-white">Contributors</NuxtLink></li>
            <li><NuxtLink to="#" class="hover:text-white">Research</NuxtLink></li>
            <li><NuxtLink to="#" class="hover:text-white">Press</NuxtLink></li>
          </ul>
        </div>
        <!-- Resources -->
        <div>
          <h3 class="text-white font-semibold mb-4">Resources</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="#" class="hover:text-white">Audio Guides</NuxtLink></li>
            <li><NuxtLink to="#" class="hover:text-white">Blog</NuxtLink></li> 
            <li><NuxtLink to="#" class="hover:text-white">Publications</NuxtLink></li> 
            <li><NuxtLink to="#" class="hover:text-white">Further Reading</NuxtLink></li> 
          </ul>
        </div>
        <!-- Socials -->
        <div>
          <h3 class="text-white font-semibold mb-4">Socials</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="#" class="hover:text-white">vasaribook</NuxtLink></li>
            <li><NuxtLink to="#" class="hover:text-white">lefthandedgram</NuxtLink></li>
            <li><NuxtLink to="#" class="hover:text-white">florencetube</NuxtLink></li>
            <li><NuxtLink to="#" class="hover:text-white">renaissancetok</NuxtLink></li>
            <li><NuxtLink to="#" class="hover:text-white">borgiahub</NuxtLink></li>
          </ul>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center text-sm space-y-4 md:space-y-0">
        <div class="space-y-1 md:space-y-0 md:flex md:space-x-6">
           <!-- Kept the themed address -->
           <p><strong class="text-white">address.</strong> Casa da Vinci Florence, Italia</p>
           <!-- Updated email to be more generic/themed -->
           <p><strong class="text-white">email.</strong> info@davinci-exploration.org</p>
           <p><NuxtLink to="#" class="text-white font-semibold hover:underline">contact us</NuxtLink></p>
        </div>
         <div class="flex space-x-4">
            <NuxtLink to="#" class="hover:text-white">privacy policy</NuxtLink>
            <NuxtLink to="#" class="hover:text-white">cookie policy</NuxtLink>
            <NuxtLink to="#" class="hover:text-white">newsletter</NuxtLink>
         </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No specific script needed
</script>
