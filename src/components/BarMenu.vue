<script setup>
import { MagnifyingGlassIcon, HomeModernIcon, BookmarkIcon, ArrowLeftEndOnRectangleIcon} from '@heroicons/vue/24/solid';
import { useUserStore } from '../stores/user';
const userStore = useUserStore();
</script>
<template>
    <div class="bar-menu fixed bottom-0 w-full bg-graystrong z-10 bg-opacity-100 rounded-t-xl shadow-2xl">
    <nav class="flex justify-around py-4">
        <router-link to="/"><home-modern-icon active-class="active-link" class="icon"/></router-link>
        <router-link to="/search"><magnifying-glass-icon active-class="active-link" class="icon"/></router-link>
        <router-link to="/favoritos" class="pointer-events-none"><bookmark-icon active-class="active-link" class="icon"/></router-link>
        <button @click="userStore.logoutUser"><arrow-left-end-on-rectangle-icon active-class="active-link" class="icon"/></button>
    </nav>
    </div>
</template>

<style>
.icon {
    width: 36px;
    height: 36px;
    color: #fff;
    margin-left: 12px;
}

.router-link-active .icon {
    color: #6200af;
}
</style>