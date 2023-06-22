<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
    data() {
        return {
            verification: false
        };
    },
    methods: {
        toggleVerification() {
            this.verification = !this.verification;
        }
    },computed: {
        isLg() {
            return window.innerWidth >= 1024;
        },
    },
}
</script>

<template>
   <div class="h-[70px] p-[16px]">
    <img src="../assets/axdif-logo.svg" class="h-[40px]">
   </div>
   <div class="bg-primary-600">
        <div class="mx-[16px] pt-[40px] pb-[29px] text-3xl font-bold text-white text-center">A few clicks away from being a part of Axdif</div>
        <div class="h-[796px] bg-white mx-[16px] rounded-lg lg:rounded-none"></div>
        <div>© Copyright 2023. All Right Reserved.</div>
   </div>
</template>

