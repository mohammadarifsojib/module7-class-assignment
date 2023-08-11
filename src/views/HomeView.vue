<script setup>
  import { ref } from 'vue';
  import { RouterLink } from 'vue-router';
</script>

<template>
  <main>
    <div class="flex justify-center items-center h-screen bg-gray-300">
      <div class="w-1/2 shadow-lg bg-white p-5 md:p-20 container mx-auto">
        <div class="text-center mb-5">
          <h1 class="text-3xl font-bold mb-5 text-sky-500">Ostad Live Class</h1>
          <h2 class="text-xl text-purple-500 font-semibold">Module 7</h2>
        </div>
        <div class="flex flex-col md:flex-row justify-center items-center gap-10 mt-10 flex-wrap">
        <RouterLink :to="{name:'episode1'}" class="bg-sky-500 text-white rounded-full border border-sky-500 px-4 py-2 hover:bg-transparent hover:text-sky-500 transition-all">Episode 1 </RouterLink>
        <RouterLink :to="{name:'episode2'}" class="bg-sky-500 text-white rounded-full border border-sky-500 px-4 py-2 hover:bg-transparent hover:text-sky-500 transition-all">Episode 2 </RouterLink>
        <RouterLink :to="{name:'episode3'}" class="bg-sky-500 text-white rounded-full border border-sky-500 px-4 py-2 hover:bg-transparent hover:text-sky-500 transition-all">Episode 3 </RouterLink>
        <RouterLink :to="{name:'episode4'}" class="bg-sky-500 text-white rounded-full border border-sky-500 px-4 py-2 hover:bg-transparent hover:text-sky-500 transition-all">Episode 4 </RouterLink>          
        </div>
      </div>
    </div>
  </main>
</template>
