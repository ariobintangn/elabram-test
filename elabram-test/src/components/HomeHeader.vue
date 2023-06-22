<script>
import { useRoute } from 'vue-router';

export default {
    data() {
        return {
            isDropdownOpen: false,
            isLargeScreen: false
        };
    },
    methods: {
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
        }, 
        checkScreenSize() {
            this.isLargeScreen = window.innerWidth >= 1024;
        },
        currentLink: (currentRoute) => {
            const route = useRoute();
            let className = 'text-lg mx-2 cursor-pointer'
            if (currentRoute !== route.name) {
                className += ' text-primary-gray-3'
            } else {
                className += ' font-bold'
            }
            return className
        }
    }, 
    mounted() {
        this.checkScreenSize(); // Initial check

        window.addEventListener('resize', this.checkScreenSize);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.checkScreenSize);
    },

};
</script>

<template>
    <nav class=" h-[70px] flex items-center justify-between px-[16px]" v-if="!isLargeScreen">
        <img src="../assets/home/axdif-icon-square-white.svg" />
        <div class="flex flex-row font-bold" @click="toggleDropdown">
            <h1>Overview</h1>
            <img src="../assets/home/search-24px (1)-2.svg" class="ml-[4px]" />
            <div v-if="isDropdownOpen" class="absolute translate-y-4 bg-primary-gray-2 rounded-md shadow-lg mt-2">
                <ul>
                    <li>
                        <router-link to="/">
                            <a href="#">Overview</a>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/employee-stats">
                            <a href="#">Employee Stats</a>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div>
            <img src="../assets/home/Profile Picture.png" class="h-[40px]" />
        </div>

    </nav>

    <nav class=" h-[70px] flex items-center justify-between px-[16px]" v-if="isLargeScreen">
        <img src="../assets/home/axdif-icon-square-white.svg" />
        <div class="flex flex-row w-7/12">
            <router-link to="/">
                <h1 :class="currentLink('home')">Overview</h1>
            </router-link> 
            <router-link to="/employee-stats">
                <h1 :class="currentLink('employee-stats')">Employee Stats</h1>
            </router-link>
            <h1 class="text-lg mx-2 text-primary-gray-3 cursor-pointer">Submission</h1>
            <h1 class="text-lg mx-2 text-primary-gray-3 cursor-pointer">Task</h1>
            <h1 class="text-lg mx-2 text-primary-gray-3 cursor-pointer">Chat</h1>
            <h1 class="text-lg mx-2 text-primary-gray-3 cursor-pointer">Payroll</h1>
        </div>
        <div class="w-1/4">

        </div>
        <div>
            <img src="../assets/home/Profile Picture.png" class="h-[40px]" />
        </div>

    </nav>
</template>
