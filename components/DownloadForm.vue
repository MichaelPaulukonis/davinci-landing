<template>
  <form @submit.prevent="handleSubmit">
    <div class="space-y-5">
      <div>
        <label for="first-name" class="block text-sm font-medium text-gray-700 sr-only">First name*</label>
        <input type="text" name="first-name" id="first-name" required placeholder="First name*" class="mt-1 block w-full border-b border-gray-300 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
      </div>
      <div>
        <label for="last-name" class="block text-sm font-medium text-gray-700 sr-only">Last name*</label>
        <input type="text" name="last-name" id="last-name" required placeholder="Last name*" class="mt-1 block w-full border-b border-gray-300 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
      </div>
       <div>
        <label for="company-name" class="block text-sm font-medium text-gray-700 sr-only">Company name*</label>
        <input type="text" name="company-name" id="company-name" required placeholder="Company name*" class="mt-1 block w-full border-b border-gray-300 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
      </div>
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700 sr-only">Email*</label>
        <input type="email" name="email" id="email" required placeholder="Email*" class="mt-1 block w-full border-b border-gray-300 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
      </div>
      <div>
        <label for="phone-number" class="block text-sm font-medium text-gray-700 sr-only">Phone number*</label>
        <input type="tel" name="phone-number" id="phone-number" required placeholder="Phone number*" class="mt-1 block w-full border-b border-gray-300 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
      </div>

      <fieldset class="mt-6 space-y-4">
        <div class="relative flex items-start">
          <div class="flex items-center h-5">
            <input id="newsletter" aria-describedby="newsletter-description" name="newsletter" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
          </div>
          <div class="ml-3 text-sm">
            <label for="newsletter" class="font-medium text-gray-700">I want to receive the monthly Xradiograph newsletter.</label>
          </div>
        </div>
        <div class="relative flex items-start">
          <div class="flex items-center h-5">
            <input id="consent" name="consent" type="checkbox" required class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
          </div>
          <div class="ml-3 text-sm">
            <label for="consent" class="font-medium text-gray-700">I agree to allow Xradiograph to store and process my personal data.*</label>
          </div>
        </div>
      </fieldset>

      <p class="text-xs text-gray-500 mt-2">By submitting this form, you agree to our privacy policy.</p>

      <div class="mt-6">
         <button type="submit" class="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Download now
        </button>
      </div>
    </div>
  </form>
</template>

<script setup>
function handleSubmit() {
  // Handle form submission logic here
  // e.g., send data to an API, show a success message
  console.log('Form submitted');
  alert('Form submitted! (Check console)');
}
</script>

<style scoped>
/* Ensure placeholder text color is visible */
input::placeholder {
  color: #9ca3af; /* Equivalent to text-gray-400 */
  opacity: 1;
}
/* You might need slight adjustments for focus states */
input:focus {
   border-bottom-color: #333; /* Darker border on focus */
}
</style>