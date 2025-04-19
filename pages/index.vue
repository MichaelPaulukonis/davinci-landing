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
                 Leonardo Da Vinci & The Mona Lisa
               </h1>
            </div>
            <div class="md:pl-8">
               <p class="text-lg md:text-xl leading-relaxed">
                 Explore the genius of Leonardo da Vinci and the enduring mystery of his most famous creation. Delve into the history, techniques, and secrets behind the world's most recognizable portrait. Download our free guide and uncover the story behind the smile.
               </p>
            </div>
         </div>
       </div>
    </section>

    <!-- Details Section -->
    <section class="bg-white py-16 md:py-24">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
         <p class="text-sm uppercase tracking-wider text-gray-500 mb-2">Exploring the Masterpiece</p>
         <h2 class="text-3xl md:text-4xl font-bold mb-6 leading-tight">
           Explore the genius of Leonardo da Vinci and the enduring mystery of his most famous creation. Delve into the history, techniques, and secrets behind the world's most recognizable portrait. Download our free guide and uncover the story behind the smile.
         </h2>
         <p class="text-lg text-gray-700 mb-8">What you can expect from this guide:</p>
         <ul class="list-disc list-inside space-y-3 text-gray-700 mb-8 pl-4">
            <li><strong class="text-black">Leonardo's Life and Times:</strong> Understanding the context of the Renaissance.</li>
            <li><strong class="text-black">Innovative Techniques:</strong> Sfumato, composition, and the use of perspective.</li>
            <li><strong class="text-black">The Subject's Identity:</strong> Theories about Lisa Gherardini and others.</li>
            <li><strong class="text-black">The Theft and Recovery:</strong> The painting's dramatic journey through history.</li>
            <li><strong class="text-black">Enduring Legacy:</strong> Why the Mona Lisa remains an icon of art.</li>
         </ul>

         <p class="text-lg text-gray-700">
            Or listen to our audio guide <a href="#" class="text-blue-600 hover:underline font-medium">here</a>.
         </p>
      </div>
    </section>

    <!-- Download Form Section -->
     <section class="bg-white py-16 md:py-24">
       <div class="container mx-auto px-4 sm:px-6 lg:px-8">
         <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 class="text-5xl md:text-6xl font-bold leading-tight">
                Get the Full Story
              </h2>
            </div>
            <div>
               <!-- Assuming DownloadForm is a generic component -->
               <DownloadForm />
            </div>
         </div>
       </div>
     </section>

    <!-- Other Related Content Section -->
    <section class="bg-white pt-8 pb-16 md:pb-24">
       <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center mb-8">
             <h2 class="text-3xl font-bold">Related Masterpieces</h2>
             <NuxtLink to="#" class="text-blue-600 hover:underline font-medium flex items-center space-x-1">
               <span>View all</span>
               <span>→</span>
             </NuxtLink>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Card 1: The Last Supper -->
            <div class="bg-gray-100 p-6 rounded-lg shadow-sm">
              <!-- Placeholder for image -->
              <div class="bg-gray-300 h-48 rounded mb-4 flex items-center justify-center text-gray-500">
                  <img src="https://via.placeholder.com/400x200/E2E8F0/CBD5E0?text=Image+Placeholder" alt="The Last Supper Placeholder" class="w-full h-full object-cover rounded">
                  <!-- In a real project replace with <img src="/path/to/image.jpg" alt="..."> -->
              </div>
              <h3 class="text-xl font-semibold mb-2">The Last Supper</h3>
              <p class="text-gray-700 text-sm">
                 Discover another of Leonardo's iconic works. Learn about the innovative techniques, the dramatic moment depicted, and the challenges of its preservation over centuries.
              </p>
               <!-- Add a "Read More" link if needed -->
            </div>

             <!-- Card 2: Vitruvian Man -->
            <div class="bg-gray-100 p-6 rounded-lg shadow-sm">
               <!-- Placeholder for image -->
               <div class="bg-gray-300 h-48 rounded mb-4 flex items-center justify-center text-gray-500">
                 <img src="https://via.placeholder.com/400x200/E2E8F0/CBD5E0?text=Image+Placeholder" alt="Vitruvian Man Placeholder" class="w-full h-full object-cover rounded">
               </div>
              <h3 class="text-xl font-semibold mb-2">Vitruvian Man</h3>
              <p class="text-gray-700 text-sm">
                Explore Leonardo's famous drawing that perfectly blends art and science. Understand its connection to classical proportions and its significance in Renaissance thought.
              </p>
               <!-- Add a "Read More" link if needed -->
            </div>
          </div>
       </div>
    </section>

  </div>
</template>

<script setup>
// Nuxt 3 auto-imports components from the components directory
// import DownloadForm from '~/components/DownloadForm.vue';

useHead({
  // Updated title and description for the new topic
  title: 'Leonardo Da Vinci & The Mona Lisa - An Exploration',
  meta: [
    { name: 'description', content: 'Explore the history, techniques, and enduring mystery of Leonardo da Vinci\'s Mona Lisa. Learn more about this iconic masterpiece.' }
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
