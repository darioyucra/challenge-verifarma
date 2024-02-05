<script setup>
import BigSlider from './BigSlider.vue';
import {ref} from 'vue';
const movies = ref([
    {
        Title: "Avengers: Endgame",
        Year: "2019",
        imdbID: "tt4154796",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
    },
    {
        Title: "Harry Potter and the Deathly Hallows: Part 2",
        Year: "2011",
        imdbID: "tt1201607",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
    }
]);
</script>
<template>
    <BigSlider :movies="movies"/>
</template>

<style>
    .carousel__pagination-button::after {
        background-color: rgba(255, 255, 255, 0.4);
        width: 16px;
        height: 16px;
        border-radius: 100%;
    }
    .carousel__pagination-button:hover::after {
        background-color: #6200af;
    }
    .carousel__pagination-button--active::after {
        background-color: #6200af;
    }
    .carousel__pagination {
        margin-top: 0;
    }
    .carousel__prev, .carousel__next {
        background-color: rgba(155, 160, 166, 0.5);
        width: 60px;
        height: 60px;
        border-radius: 100%;
        color: white;
    }
</style>