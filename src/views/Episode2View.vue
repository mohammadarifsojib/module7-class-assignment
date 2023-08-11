<script setup>
    import { ref } from 'vue';
    import {tickets} from '../data/episode2.js'
    import EpisodeTwo from '../components/EpisodeTwo.vue';
</script>

<template>
    <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
            <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Ticket Buying</h2>
                <div class="py-10">
                    <EpisodeTwo :myTicket="tickets"/>
                </div>
                <RouterLink :to="{name:'home'}" class="text-sm bg-sky-500 px-4 py-2 rounded-lg text-white hover:bg-sky-400 transition-all">Back</RouterLink>
            </div>
        </div>
    </section>
</template>

<style scoped></style>