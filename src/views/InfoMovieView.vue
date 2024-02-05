<script setup>
import {useRoute, useRouter} from 'vue-router';
import axios from 'axios';
import { ref } from 'vue';
import BarMenu from '../components/BarMenu.vue';

const route = useRoute();
const router = useRouter();

const query = ref('');
const movie = ref({});
const error = ref('');

const searchMovies = async () => {
  try {

    const response = await axios.get(`https://www.omdbapi.com/?apikey=a1572d34&i=${route.params.id}`)

    if (response.data.Response === 'True') {
      movie.value = response.data;
      error.value = '';
    } else {
      movie.value = [];
      error.value = 'No se encontraron resultados.';
    }

  } catch (error) {
    console.error('Error al realizar la búsqueda:', error);
    movie.value = [];
    error.value = 'Hubo un problema al realizar la búsqueda.';
  }
};
searchMovies();

const back = () => {
    router.push('/search')
}

</script>
<template>
    <BarMenu/>
    <div class="w-full bg-graystrong min-h-screen pt-8 px-4 pb-40 lg:flex flex-nowrap">
        <div class="content-detail-left">
          <button @click="back" class="mb-4 text-white bg-purple px-6 py-2 rounded-full font-bold text-sm">Volver</button>
          <img :src="movie.Poster" alt="" class="w-[100%] ml-auto mr-auto lg:max-w-[500px] lg:ml-0">
        </div>

        <div class="content-detail-right lg:ml-12 lg:mt-14 lg:max-w-[700px]">
          <h1 class="text-white mt-4 text-xl capitalize font-bold max-w-[300px]">pagina pelicula unica {{ movie.Title }}</h1>
          <span class="text-white mt-2 flex font-bold text-md">Año de estreno: {{ movie.Year }}</span>
          <p class="text-white mt-4 text-lg">{{ movie.Plot }}</p>
          <p class="text-white mt-4">Actores: {{ movie.Actors }}</p>
        </div>
    </div>
</template>