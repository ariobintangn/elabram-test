<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header class=" h-1/6">
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