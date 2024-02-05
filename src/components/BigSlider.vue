<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { RouterLink } from 'vue-router';

const props = defineProps(['movies']);

const breakpoints = {
    1024: {
        itemsToShow: 1
    }
  }

const changeSizePoster = (urlImg) => {
    const newSize = urlImg.replace('SX300', 'SX1920');
    return newSize;
}


</script>
<template>
    <div class="content-slider">
        <carousel :items-to-show="1" :wrap-around="true" :breakpoints="breakpoints" :autoplay="2000">
            <slide v-for="movie in movies" :key="movie.imdbID" class="pb-8">
                <div class="container-movie w-full max-h-[60vh] overflow-hidden relative xl:max-h-[600px]">
                    <router-link :to="`/search/${movie.imdbID}`">
                    <img :src="changeSizePoster(movie.Poster)" alt="" class="w-[100%]">
                    <div class="info-action-movie absolute left-0 bottom-0 w-full bg-graystrong bg-opacity-80 h-[38%] rounded-t-3xl xl:rounded-3xl flex flex-col items-start">
                        <span class="text-white text-xl font-bold mt-6 flex ml-4 text-left">{{ movie.Title }}</span>
                        <span class="text-white text-md text-left ml-4 font-bold">Año: {{ movie.Year }}</span>
                    </div>
                    </router-link>
                </div>
                <button class="text-white text-3xl w-full max-w-[300px] bg-purple p-2 rounded-full absolute button-big-slider">▶</button>
            </slide>

            <template #addons>
            <navigation />
            <pagination />
            </template>
        </carousel>
    </div>
</template>
<style scoped>
    .button-big-slider {
        bottom: 3%;
        left: 50%;
        transform: translate(-50%, 0%);
    }
    @media screen and (min-width: 1366px) {
        .info-action-movie {
            max-width: 800px;
            bottom: 10%;
            padding-top: 2rem;
            padding-left: 2rem;
            height: 400px;
            left: 2%;
        }
        .info-action-movie .text-xl {
            font-size: 4rem;
            margin-bottom: 2rem;
            line-height: 5rem;
        }
        .info-action-movie .text-md {
            font-size: 2rem;
        }
        .button-big-slider {
            bottom: 20%;
            left: 5%;
            transform: inherit;
        }
    }
</style>