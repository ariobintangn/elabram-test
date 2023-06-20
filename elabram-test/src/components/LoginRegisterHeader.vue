<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
    computed: {
        isLg() {
            return window.innerWidth >= 1024;
        },
    },
}
</script>

<template>
    <header v-if="!isLg" class=" h-1/6 sticky top-0 bg-white z-10">
        <img alt="Vue logo" class="logo" src="@/assets/axdif-logo.svg" width="125" height="125" />

        <div class="wrapper">
            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
                <RouterLink to="/login">Login</RouterLink>
            </nav>
        </div>
    </header>
</template>