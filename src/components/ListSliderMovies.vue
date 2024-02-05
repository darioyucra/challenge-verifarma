<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { RouterLink } from 'vue-router';

const props = defineProps(['movies']);

const breakpoints = {
    0: {
        itemsToShow: 3
    },
    1024: {
        itemsToShow: 6
    }
}
</script>
<template>
    <div class="content-slider">
        <carousel :items-to-show="2.5" :wrap-around="true" :breakpoints="breakpoints">
            <slide v-for="movie in movies" :key="movie.imdbID">
                <div class="container-movie overflow-hidden relative me-4">
                    <router-link :to="`/search/${movie.imdbID}`">
                        <img :src="movie.Poster" alt="" class="w-[100%]">
                        <div class="info-action-movie absolute left-0 bottom-0 w-full bg-graystrong bg-opacity-80 h-[38%] flex flex-col items-start">
                            <span class="text-white text-xs font-bold mt-2 flex ml-4 text-left">{{ movie.Title }}</span>
                        </div>
                    </router-link>
                </div>
            </slide>
        </carousel>
    </div>
</template>
<style scoped>
</style>