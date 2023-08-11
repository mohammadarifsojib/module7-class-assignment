<script setup>
    import { ref } from 'vue';
    import { pricingTable } from '../data/episode4.js';
    import EpisodeFour from '../components/EpisodeFour.vue';
</script>

<template>
    <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Designed for business teams like yours</h2>
                <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
            </div>
            <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                <!-- Pricing Card Start-->
                <EpisodeFour :pricing="pricingTable" />
                <!-- Pricing Card End-->

            </div>
            <RouterLink :to="{name:'home'}" class="mt-16 inline-block text-sm bg-sky-500 px-4 py-2 rounded-lg text-white hover:bg-sky-400 transition-all">Back</RouterLink>
        </div>
      </section>
  </template>