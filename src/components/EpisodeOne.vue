<script setup>
import { defineProps } from 'vue';
    defineProps(
        {
            team: Array
        }
    )
    
</script>

<template>
    <div v-for="member in team" :key="member.id">
        <div class="items-center bg-gray-50 shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class="w-[300px]" :src="member.avatar" :alt="member.name">
            </a>
            <div class="p-5">
                <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#"> {{ member.name }} </a>
                </h3>
                <span class="text-gray-500 dark:text-gray-400"> {{ member.designation }} </span>
                <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400"> {{ member.about }} </p>
                <ul class="flex space-x-4 sm:mt-0">
                    <li v-for="(links, index) in member.socialLinks">
                        <a :href="links.link" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <span v-html="links.icon"></span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped></style>