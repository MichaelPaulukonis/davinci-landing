<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-black text-white overflow-hidden">
       <!-- Optional: Add subtle background pattern if needed -->
       <!-- <div class="absolute inset-0 opacity-10 bg-pattern"></div> -->
       <div class="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 md:pt-40 md:pb-24 min-h-[50vh] flex items-center">
         <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
               <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                 The Generative AI Playbook
               </h1>
            </div>
            <div class="md:pl-8">
               <p class="text-lg md:text-xl leading-relaxed">
                 We launched our first white paper about Generative AI in January. Now, we are revisiting the topic, diving deeper, and offering a fresh perspective. Download our free white paper and discover how you can use this technology for your business.
               </p>
            </div>
         </div>
       </div>
    </section>

    <!-- Whitepaper Details Section -->
    <section class="bg-white py-16 md:py-24">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
         <p class="text-sm uppercase tracking-wider text-gray-500 mb-2">The Generative AI Playbook</p>
         <h2 class="text-3xl md:text-4xl font-bold mb-6 leading-tight">
           We launched our first white paper about Generative AI in January. Now, we are revisiting the topic, diving deeper, and offering a fresh perspective. Download our free white paper and discover how you can use this technology for your business.
         </h2>
         <p class="text-lg text-gray-700 mb-8">What you can expect from this whitepaper:</p>
         <ul class="list-disc list-inside space-y-3 text-gray-700 mb-8 pl-4">
            <li><strong class="text-black">The evolution of Generative AI:</strong> Beyond the basic notions of the technology</li>
            <li><strong class="text-black">Notable technical advancements:</strong> Function calling, knowledge mining, fine-tuning</li>
            <li><strong class="text-black">The ethical landscape:</strong> EU AI Act and other guidelines</li>
            <li><strong class="text-black">Strategies for successful implementation:</strong> How businesses can prepare for and take advantage of the <strong class="text-black">opportunities</strong> presented by generative AI</li>
            <li><strong class="text-black">Future outlook:</strong> What's next?</li>
         </ul>

         <p class="text-lg text-gray-700">
            Or listen to our podcast version <a href="#" class="text-blue-600 hover:underline font-medium">here</a>.
         </p>
      </div>
    </section>

    <!-- Download Form Section -->
     <section class="bg-white py-16 md:py-24">
       <div class="container mx-auto px-4 sm:px-6 lg:px-8">
         <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 class="text-5xl md:text-6xl font-bold leading-tight">
                Download now
              </h2>
            </div>
            <div>
               <DownloadForm />
            </div>
         </div>
       </div>
     </section>

    <!-- Other Whitepapers Section -->
    <section class="bg-white pt-8 pb-16 md:pb-24">
       <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center mb-8">
             <h2 class="text-3xl font-bold">Other whitepapers</h2>
             <NuxtLink to="#" class="text-blue-600 hover:underline font-medium flex items-center space-x-1">
               <span>View all</span>
               <span>→</span>
             </NuxtLink>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Card 1: AI Integration Framework -->
            <div class="bg-gray-100 p-6 rounded-lg shadow-sm">
              <!-- Placeholder for image -->
              <div class="bg-gray-300 h-48 rounded mb-4 flex items-center justify-center text-gray-500">
                  <img src="https://via.placeholder.com/400x200/E2E8F0/CBD5E0?text=Image+Placeholder" alt="AI Integration Framework Placeholder" class="w-full h-full object-cover rounded">
                  <!-- In a real project replace with <img src="/path/to/image.jpg" alt="..."> -->
              </div>
              <h3 class="text-xl font-semibold mb-2">The AI Integration Framework</h3>
              <p class="text-gray-700 text-sm">
                 It's clear the generative AI-hype won't die down anytime soon. After initial experiments, businesses are ready to implement the technology in their processes on a serious level. But how do you start? That's exactly what we cover in our six-step AI Integration Framework.
              </p>
               <!-- Add a "Read More" link if needed -->
            </div>

             <!-- Card 2: How generative AI will disrupt Belgian businesses -->
            <div class="bg-gray-100 p-6 rounded-lg shadow-sm">
               <!-- Placeholder for image -->
               <div class="bg-gray-300 h-48 rounded mb-4 flex items-center justify-center text-gray-500">
                 <img src="https://via.placeholder.com/400x200/E2E8F0/CBD5E0?text=Image+Placeholder" alt="Generative AI Disruption Placeholder" class="w-full h-full object-cover rounded">
               </div>
              <h3 class="text-xl font-semibold mb-2">How generative AI will disrupt Belgian businesses</h3>
              <p class="text-gray-700 text-sm">
                Generative AI is more than just a gimmick; we believe it will revolutionize the way we work today. Download our free whitepaper now to discover how it will impact Belgian businesses.
              </p>
               <!-- Add a "Read More" link if needed -->
            </div>
          </div>
       </div>
    </section>

  </div>
</template>

<script setup>
// You can import components explicitly if needed, but Nuxt 3 auto-imports them
// import AppHeader from '~/components/AppHeader.vue';
// import AppFooter from '~/components/AppFooter.vue';
// import DownloadForm from '~/components/DownloadForm.vue';

useHead({
  title: 'The Generative AI Playbook - Xradiograph',
  meta: [
    { name: 'description', content: 'Download our free white paper on Generative AI and discover how you can use this technology for your business.' }
  ],
})
</script>

<style scoped>
/* Add specific styles if needed */
.min-h-\[50vh\] { /* Custom min-height if needed */
  min-height: 50vh;
}

/* Example background pattern (replace with your actual pattern) */
/* .bg-pattern {
  background-image: url('/path/to/your/pattern.svg');
  background-repeat: repeat;
} */
</style>