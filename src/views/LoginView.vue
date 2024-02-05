<template>
    <div class="flex flex-col items-center justify-center h-screen container-log">
        <div class="content-log w-full h-full flex flex-col items-center justify-center">
            <h1 class="block text-white text-2xl">Verifarma <span class="text-purple font-bold">MOVIES</span></h1>
            <p class="text-white text-md">Inicia sesión y mira nuestro contenido</p>
            <form class="flex flex-col w-full max-w-[90%] mt-4 lg:max-w-[500px]" @submit.prevent="handleSubmit">
                <input class="w-100 rounded-md px-3 py-4 bg-black bg-opacity-80 outline-none border-black focus:bg-opacity-75 y focus:border-opacity-100 text-white" type="text" placeholder="Ingresa tu Email" v-model.trim="email">
    
                <input class="w-100 mt-2 rounded-md px-3 py-4 bg-black bg-opacity-80 outline-none focus:bg-opacity-75 y focus:border-opacity-100 text-white" type="password" placeholder="Ingresa tu contraseña" v-model.trim="password">
    
                <button class="mt-4 w-100 text-white bg-purple py-4 rounded-full" type="submit"> Log In</button>
            </form>
            <div class="flex mt-2">
                <p class="me-2 text-white text-md">¿No tenes cuenta?</p>
                <router-link to="/register" class="text-white underline text-md">Registrarse</router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import {useUserStore} from '../stores/user';

const userStore = useUserStore();

const email = ref('')
const password = ref('')
const handleSubmit = async () => {
    if(!email.value || password.value.length < 6) {
        return alert('Llena todos los datos')
    }
    await userStore.loginUser(email.value, password.value);
}
</script>

<style scoped>
.container-log {
    background-image: url('../assets/background-log.jpeg');
    background-size: cover;
}
.content-log {
    background-color: rgba(20, 26, 38, 0.8);
}
</style>