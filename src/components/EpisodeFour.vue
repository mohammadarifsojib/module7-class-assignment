<script setup>
    import { defineProps } from 'vue';
    defineProps({
        pricing: {
            type: Array
        }
    })
</script>

<template>
        <div v-for="price in pricing" :key="price.id" class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 class="mb-4 text-2xl font-semibold"> {{ price.title }} </h3>
            <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400"> {{ price.desc }} </p>
            <div class="flex justify-center items-baseline my-8">
                <span class="mr-2 text-5xl font-extrabold"> {{ price.price }} </span>
                <span class="text-gray-500 dark:text-gray-400">/{{ price.duration }}</span>
            </div>
            <!-- List -->
            <ul role="list" class="mb-8 space-y-4 text-left">

                <li v-for="feature in price.features" :key="feature.id" class="flex items-center space-x-3">
                    <!-- Icon -->
                    <span v-html="feature.icon"></span>
                    <span v-html="feature.title"></span>
                </li>

            </ul>
            <a href="#" class="text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Get started</a>
        </div>
</template>

<style scoped></style>