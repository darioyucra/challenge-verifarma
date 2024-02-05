<template>
    <BarMenu/>
    <div>
    <!--<button @click="toggleMenu" class="fixed top-0 left-0 p-4 bg-grayStrong text-white">☰</button>-->

    <div class="flex w-100 min-h-screen justify-end bg-graystrong"  @click="handleOutsideClick">
      <div class="w-full bg-graytrong min-h-screen">

        <MoviePrincipal/>
        <ListsMovies titleList="Lo mas visto"/>

        <ListsMovies titleList="Clasicos"/>

        <ListsMovies titleList="Recomendados para vos"/>

        <div v-if="error">
        <p>{{ error }}</p>
        </div>
    </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '../stores/user';
import axios from 'axios';
const userStore = useUserStore();
import { ref } from 'vue';
import MoviePrincipal from '../components/MoviePrincipal.vue';
import ListsMovies from '../components/ListsMovies.vue';
import BarMenu from '../components/BarMenu.vue'

const query = ref('tt1201607');
const movies = ref([]);
const error = ref('');

const searchMovies = async () => {
  try {

    const response = await axios.get(`https://www.omdbapi.com/?apikey=a1572d34&s=harry+potter`)

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

<style scoped>
.menu-movies {
    box-shadow: 25px 0px 68px -12px rgba(97,0,195,1);
}

.carousel__pagination-button::after {
  background-color: red;
}

</style>