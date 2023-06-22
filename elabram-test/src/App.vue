<script setup>
import { RouterLink, RouterView } from 'vue-router'
import LoginRegisterHeader from './components/LoginRegisterHeader.vue';
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/axdif-logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
  <!-- <LoginRegisterHeader /> -->
  <main class="font-body">
    <RouterView class="h-screen"/>
  </main>
</template>

