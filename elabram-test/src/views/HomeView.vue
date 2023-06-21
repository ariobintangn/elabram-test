<script>
import LoginRegisterHeader from '../components/LoginRegisterHeader.vue';
import HomeHeader from '../components/HomeHeader.vue';
import HomeProfile from '../components/HomeProfile.vue';

export default {
  components: {
    HomeHeader,
    HomeProfile
  },
};
</script>

<template>
  <HomeHeader />
  <main class="px-[16px] bg-primary-gray-2 my-[16px]">
    <HomeProfile />
  </main>
</template>
