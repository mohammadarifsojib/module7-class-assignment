<script setup>
    defineProps({
        myTicket: {
            type: Array
        }
    })
</script>

<template>
    <div>
        <section class="mx-auto">
            <div class="flex flex-col space-y-5">
              <div class="w-full" v-for="ticket in myTicket" :key="ticket.id">
                <article class=" flex flex-wrap md:flex-nowrap shadow-lg mx-auto max-w-3xl group cursor-pointer transform duration-500 hover:-translate-y-1">
                  <img class="w-full md:w-52" :src="ticket.image" alt="">
                  <div class="">
                    <div class="p-5 pb-10">
                      <h1 class="text-2xl font-semibold text-gray-800 mt-4">
                        {{ ticket.title }}
                      </h1>
                      <p class="text-xl text-gray-400 mt-2 leading-relaxed">
                        {{ ticket.desc }}
                      </p>
                    </div>
                    <div class="bg-blue-50 p-5">
                      <div class="sm:flex sm:justify-between">
                        <div>
                          <div class="text-lg text-gray-700">
                            <span class="text-gray-900 font-bold">{{ ticket.distance }}</span> {{ ticket.destination }}
                          </div>
                          <div class="flex items-center">
                            <div class="flex">

                              <svg v-for="start in ticket.starts" :key="start" class="w-4 h-4 mx-px fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                              </svg>
                              
                            </div>
                            <div class="text-gray-600 ml-2 text-sm md:text-base mt-1">
                              {{ ticket.reviews > 1 ? `${ticket.reviews} reviews` : `${ticket.reviews} review` }}
                            </div>
                          </div>
                        </div>

                        <a  :href="ticket.btnLink" class="mt-3 sm:mt-0 py-2 px-5 md:py-3 md:px-6 bg-purple-700 hover:bg-purple-600 font-bold text-white md:text-lg rounded-lg shadow-md">{{ ticket.btnText }}</a>
                      </div>
                      <div class="mt-3 text-gray-600 text-sm md:text-sm">
                        {{ ticket.visitTo }}
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
        
          </section>
    </div>
</template>

<style scoped></style>