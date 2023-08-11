<script setup>
    import { ref } from 'vue';
    import { jobs } from '../data/episode3.js';
    import EpisodeThree from '../components/EpisodeThree.vue';
</script>

<template>
    <section class="mx-auto ">
        <h1 class="my-10 text-center">
            <RouterLink :to="{name:'home'}" class="text-sm bg-sky-500 px-4 py-2 rounded-lg text-white hover:bg-sky-400 transition-all">Back</RouterLink>
        </h1>
        <div class="flex items-center justify-center h-[600px] font-medium">
        
            <!-- Component Start -->
            <EpisodeThree :myjobs="jobs" />
            <!-- Component End  -->
        </div>


    </section>
</template>
  
  <style scoped>
  </style>