<script setup>
import BarMenu from '../components/BarMenu.vue';
import axios from 'axios';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const query = ref('');
const movies = ref([]);
const error = ref('');

const searchMovies = async () => {
  try {

    const response = await axios.get(`https://www.omdbapi.com/?apikey=a1572d34&s=${query.value}`)

    if (response.data.Response === 'True') {
      movies.value = response.data.Search;
      error.value = '';
    } else {
      movies.value = [];
      error.value = 'No se encontraron resultados.';
    }
  } catch (error) {
    console.error('Error al realizar la búsqueda:', error);
    movies.value = [];
    error.value = 'Hubo un problema al realizar la búsqueda.';
  }
};

searchMovies();

</script>

<template>
    <BarMenu/>

    <div class="flex w-100 min-h-screen justify-start bg-graystrong flex-col items-center">
        <div class="box-search w-full max-w-[350px] mt-4 relative h-auto">
            <input v-model="query" type="text" placeholder="Buscar películas" class="w-full mt-2 rounded-full px-4 font-bold py-4 bg-black bg-opacity-50 outline-none focus:bg-opacity-75 y focus:border-opacity-100 text-white mb-8" @keyup.enter="searchMovies">
            <button class="text-white bg-purple px-6 py-4 rounded-full font-bold absolute right-0 top-2" @click="searchMovies">Buscar</button>
        </div>

        <div v-if="movies.length > 0">
            <ul class="flex flex-wrap w-full justify-around">
                <li v-for="movie in movies" :key="movie.imdbID" class="w-full sm:w-1/2 md:w-1/3 relative max-h-80 overflow-hidden mb-8 max-w-[40%] rounded-lg lg:max-w-[23%] lg:max-h-[100%]">
                    <Router-Link :to="`/search/${movie.imdbID}`">
                    <div class="relative">
                        <img :src="`${movie.Poster}`" alt="" class="w-full h-auto object-cover object-top max-h-80 lg:max-h-[100%]">
                        <div class="absolute bottom-0 left-0 right-0 p-4 bg-grayLight bg-opacity-95 w-full bg-graystrong flex justify-center">
                            <p class="text-white text-sm text-center">{{ movie.Title }}</p>
                        </div>
                    </div>
                    </Router-Link>
                </li>
            </ul>
        </div>
    </div>
</template>